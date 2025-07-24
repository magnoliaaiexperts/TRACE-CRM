TRACE Landing Page Project
1. Project Overview
This project is a high-converting, responsive landing page for TRACE, a company providing AI-powered drone assessments for the insurance and contracting industries. The page is architected for lead generation, leveraging modern design, compelling copy, and seamless third-party integrations to capture user interest and data.

2. Technology Stack
The project is built with a simple and robust front-end stack.

HTML5: For the core structure and content of the page.

Tailwind CSS: For all styling, enabling a modern and responsive utility-first design.

JavaScript (Vanilla): For interactive elements like the exit-intent modal and smooth scrolling.

3. Third-Party Integrations
a. Zoho Forms
Purpose: To capture lead information for AI assessment reports.

Implementation: The form is embedded as an <iframe> within the "Lead Capture Section" (id="contact").

To Update or Change the Form:

Go to your Zoho Forms account and get the new <iframe> embed code from the "Share" tab.

In the index.html file, find the <!-- Form section -->.

Replace the existing <iframe ...></iframe> with the new code from Zoho.

b. Chatbase (Nova, TRACE Concierge)
Purpose: To provide 24/7 AI-powered support and lead qualification.

Implementation:

An embedded <iframe> in the "Chatbot Section" (id="chatbot").

A JavaScript snippet at the end of the <body> tag that loads the Chatbase widget.

To Update the Chatbot: No changes are needed in the HTML. All chatbot configuration, training, and appearance settings are managed directly from your Chatbase.co dashboard.

4. Vercel Deployment Guide
This project is a static site and is easy to deploy on Vercel.

Step 1: Prepare Your Files
Ensure your project folder contains the following three files:

index.html (The main landing page file)

vercel.json (The Vercel configuration file)

README.md (This file)

Step 2: Deploy to Vercel
Push to GitHub: Upload your project folder to a new GitHub repository.

Import Project on Vercel:

Log in to your Vercel account.

Click "Add New..." -> "Project".

Select and import your GitHub repository.

Configure Project:

Vercel will automatically detect the static nature of the site. The default settings should be correct.

There are no environment variables to add.

Deploy: Click the "Deploy" button.

Vercel will now build and deploy your site. Your landing page will be live in minutes.