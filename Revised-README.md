## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/)

## Getting Started

## Backend Setup

1. **Navigate to the backend folder:**
   cd backend

2. **Install dependencies:**
   -> npm i

3. **Start the development server:**
   -> nodemon server.js

4. **Server Started:**
   -> Your Server must be listening at http://localhost:3001.

## Ngrok Setup

1. **Open New Terminal and Install Ngrok**
   npx i ngrok

2. **Setup the ngrok server:**
   -> npx ngrok config add-authtoken 2z5lpzFhJGIQjIgF2GnnzVfc3rW_3sy7LfjPQvoEwEus8bFb6

   1. Incase it doesn't work then signup at https://dashboard.ngrok.com/get-started/
   2. Once Signed Up go to "Your Authtoken" tab under "Getting Started" in Sidebar
   3. In command line, first click on show Authtoken and then click on copy you will get the similar looking command line as provided above.
   4. Come back to your terminal and paste it

3. **Start the ngrok server:**
   npx ngrok http 3001

4. **Copy URL from Forwarding**

   Copy the url infront of "Forwarding" that looks like this
   "https://3fde-2400-adc1-46b-a400-dc1c-3f8b-91ac-5b18.ngrok-free.app"

5. **Paste URL in Backend env**

   Replace the value of variable "BASE_URL" with the URL you copied.

## Fronend Setup

1. **Navigate to the backend folder:**
   cd frontend

2. **Install dependencies:**
   -> npm i

3. **Start the development server:**
   -> npm run start

4. **Open your browser:**
   -> Visit http://localhost:3000 to use the app.

5. **Test**

   Once all setups are done you can now test the call feature by clicking on start call button, and the provide agent number and client number

   -> Provider your number in agent number to receive call first and once you answer and press any number on keypad, the service automatically calls the client and bridges the two lines together.

   -> Condition is client number should also be verified too, you can add a new caller id in verified caller id list.

## Twilio Setup

1. Sign up at https://www.twilio.com/try-twilio

2. Verify your email and phone number

3. You’ll receive a Trial Account with limited functionality (can only call verified number

4. Copy the following values:

-> Account SID (starts with AC...)

-> Auth Token

-> Twilio Phone Number (purchased or trial number)

5. Replace the values in .env
