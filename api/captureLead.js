// /api/captureLead.js

export default async function handler(req, res) {
  // Ensure we only handle POST requests.
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  // Destructure the actual fields being sent from your website form.
  const { fullName, workEmail, companyName, role } = req.body;

  // Validate that the required fields are present.
  if (!fullName || !workEmail || !companyName || !role) {
      return res.status(400).json({ error: 'Missing required form fields.' });
  }

  // This payload is structured for the Zoho CRM API.
  // The field names ('Full_Name', 'Email', 'Company', etc.) must match
  // the API names in your Zoho CRM instance.
  const payload = {
    data: [
      {
        Full_Name: fullName,
        Email: workEmail, // Correctly using workEmail from the form
        Company: companyName, // Correctly using companyName from the form
        Description: `Lead's role: ${role}`, // Capturing the 'role' in the description
        Lead_Source: "T.R.A.C.E. Website", // Set a more accurate lead source
      },
    ],
  };

  try {
    // The API call to Zoho CRM to create a new Lead record.
    const zohoRes = await fetch('https://www.zohoapis.com/crm/v2/Leads', {
      method: 'POST',
      headers: {
        // The access token must be stored as an environment variable.
        Authorization: `Zoho-oauthtoken ${process.env.ZOHO_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    // Get the response from Zoho.
    const result = await zohoRes.json();
    
    // Check if Zoho itself reported an error.
    if (result.data && result.data[0] && result.data[0].status === 'error') {
        console.error('Zoho API Error:', result.data[0]);
        return res.status(400).json({ error: `CRM Error: ${result.data[0].message}` });
    }

    // If everything is successful, send a success response.
    res.status(200).json(result);

  } catch (err) {
    // Catch any other errors during the process.
    console.error("Error submitting lead to Zoho:", err);
    res.status(500).json({ error: 'Internal server error during submission.' });
  }
}
