# Secure Call Bridge

Secure Call Bridge is a lightweight web application that enables agents to connect with clients securely via video/audio calls without exposing any personal phone numbers. Powered by the Jitsi Meet SDK, it ensures all communications remain private and encrypted. Agents can also prepare and share confidential notes securely, enhancing call context without compromising data security.

## Features

- **Secure Context Panel:** Encrypt confidential notes with a secret key. The encrypted note never leaves your browser.
- **Verification Panel:** Decrypt and verify confidential notes using the secret key.
- **Client-side encryption:** All encryption/decryption is performed in the browser using industry-standard libraries.
- **Jitsi Meet Integration:** Secure, high-quality video and audio conferencing powered by the Jitsi Meet SDK.

## Jitsi Meet SDK

This project integrates the [Jitsi Meet SDK](https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-iframe), an open-source solution for secure video and audio conferencing. Jitsi Meet is recognized for its:

- **Security:** All communications are encrypted by default, ensuring privacy and confidentiality for every call.
- **Quality:** Delivers high-definition audio and video with adaptive streaming for optimal clarity.
- **Efficiency:** Lightweight and optimized for fast connection times and low resource usage, even on modest hardware.
- **Performance:** Scales efficiently for both one-on-one and group calls, providing a seamless experience across devices and networks.

Jitsi Meet helps ensure that your calls are private, reliable, and of the highest quality, making it an ideal choice for secure communications.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/)

## Getting Started

1. **Install dependencies:**
   -> npm i

2. **Start the development server:**
   -> npm run start

3. **Open your browser:**
   -> Visit http://localhost:3000 to use the app.
