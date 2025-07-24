TRACE Landing Page Project
1. Project Overview
This project is a high-converting, responsive landing page for TRACE, a company providing AI-powered drone assessments for the insurance and contracting industries. The page is architected for lead generation, leveraging modern design, compelling copy, and seamless third-party integrations to capture user interest and data.

2. Key Features
Dynamic Hero Section: Features an autoplaying video background to immediately capture user attention.

Neuromarketing-Optimized Copy: All text, from headlines to button CTAs, has been crafted to be persuasive, benefit-driven, and to create a sense of urgency and trust.

Social Proof: Includes sections for client logos and testimonials to build credibility and authority.

Data-Driven Statistics: Key metrics are highlighted in visually engaging "stat cards" to quantify the problems TRACE solves.

Exit-Intent Modal: A pop-up appears when a user is about to leave the page, providing a final opportunity to engage them with a compelling offer.

Integrated AI Chatbot: A Chatbase chatbot ("Nova, the TRACE Concierge") is embedded directly on the page for instant user support and lead qualification.

Zoho Form Integration: The primary lead capture mechanism is a seamless iFrame integration with a Zoho form, ensuring all lead data is sent directly to your CRM.

Fully Responsive Design: The layout is optimized for a flawless viewing experience across all devices, from mobile phones to desktops.

3. Technology Stack
The project is built with a simple and robust front-end stack, requiring no complex backend setup.

HTML5: For the core structure and content of the page.

Tailwind CSS: For all styling, enabling a modern and responsive utility-first design.

JavaScript (Vanilla): For interactive elements like the exit-intent modal, smooth scrolling, and scroll-based animations.

4. Third-Party Integrations
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