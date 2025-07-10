# T.R.A.C.E. CRM Lead Capture

This project consists of a high-conversion landing page for T.R.A.C.E. and a serverless backend function designed to capture lead information from a form and send it directly to a Zoho CRM instance.

## Features

-   **Static Landing Page:** A responsive, modern landing page built with HTML and Tailwind CSS.
-   **Serverless API Endpoint:** A JavaScript function (`/api/captureLead.js`) that runs on Vercel's edge network.
-   **Zoho CRM Integration:** The API endpoint securely sends new lead data to the Zoho CRM API.

---

## File Structure for Vercel Deployment

For Vercel to correctly deploy both the frontend website and the backend API function, your project **must** follow this specific file structure:


/ (project root)
|
|-- api/
|   |-- captureLead.js
|
|-- index.html
|
|-- README.md


-   `index.html`: This is the main landing page file. Vercel will automatically serve this at the root of your website.
-   `api/`: This folder contains all serverless functions. Vercel automatically detects any `.js` file inside this folder and deploys it as an API endpoint. The endpoint URL will match the file path (e.g., `api/captureLead.js` becomes `https://your-site.vercel.app/api/captureLead`).

---

## Setup and Configuration

Follow these steps to get the project running.

### 1. Zoho CRM API Credentials

This project requires API access to your Zoho CRM.

-   Go to the [Zoho API Console](https://api-console.zoho.com/).
-   Create a new **"Self Client"**. This is for server-to-server communication.
-   This will provide you with a **Client ID** and a **Client Secret**.
-   Use these credentials to generate an **Access Token**. You will need to generate a temporary **Grant Token** first, then exchange it for the permanent Access Token.
-   For detailed steps, refer to the [Zoho Self Client documentation](https://www.zoho.com/crm/developer/docs/api/v2/self-client.html).

### 2. Environment Variables

The Zoho Access Token is a secret and should not be written directly in the code. It must be stored as an environment variable on your hosting platform (Vercel).

-   **Variable Name:** `ZOHO_ACCESS_TOKEN`
-   **Variable Value:** The `access_token` you generated in the previous step.

---

## Deployment to Vercel

1.  **Push to GitHub:** Ensure your project is pushed to a GitHub repository with the correct file structure shown above.
2.  **Import Project on Vercel:**
    -   Log in to your Vercel account.
    -   Click "Add New..." -> "Project".
    -   Select your GitHub repository.
3.  **Configure Project:**
    -   **Framework Preset:** Vercel should automatically detect that this is not a framework-specific project. If you need to select one, choose **"Other"**.
    -   **Root Directory:** Leave this blank. Vercel will use the root of your repository.
4.  **Add Environment Variable:**
    -   Before deploying, go to the "Settings" tab for your new project.
    -   Click on "Environment Variables".
    -   Add the `ZOHO_ACCESS_TOKEN` with its value.
5.  **Deploy:** Go back to the "Deployments" tab and trigger a new deployment.

Vercel will now build and deploy your site. Your landing page will be live, and the form will be connected to the `/api/captureLead` endpoint, which is now configured to communicate with Zoho CRM.
