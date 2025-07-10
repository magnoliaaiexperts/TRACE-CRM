
// /api/captureLead.js

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { fullName, email, intent, transcript, tags = [] } = req.body;

  const payload = {
    data: [
      {
        Full_Name: fullName,
        Email: email,
        Lead_Source: "AI Chatbot",
        Description: `Intent: ${intent}\nTranscript:\n${transcript}`,
        Tag: tags,
      },
    ],
  };

  try {
    const zohoRes = await fetch('https://www.zohoapis.com/crm/v2/Leads', {
      method: 'POST',
      headers: {
        Authorization: `Zoho-oauthtoken ${process.env.ZOHO_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await zohoRes.json();

    if (tags.some(tag => ['Risk_Analysis', 'Claim_Assessment', 'AI_Lead'].includes(tag))) {
      await triggerAlerts(fullName, tags);
    }

    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Submission failed' });
  }
}

async function triggerAlerts(name, tags) {
  const alertMessage = `🚨 High-Intent Lead: ${name} - Tags: ${tags.join(', ')}`;

  await fetch(process.env.SLACK_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: alertMessage }),
  });

  await fetch(process.env.SMS_API_URL, {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.SMS_API_KEY}` },
    body: JSON.stringify({
      to: process.env.ALERT_PHONE_NUMBER,
      message: alertMessage,
    }),
  });
}
