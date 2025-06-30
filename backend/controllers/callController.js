import { asyncMiddleware } from "../middlewares/asyncMiddleware.js";
import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

//ngrok/public URL
const BASE_URL = process.env.BASE_URL;

export const getCall = asyncMiddleware(async (req, res) => {
  const { agentNumber, clientNumber } = req.body;

  if (!agentNumber || !clientNumber) {
    return res.status(400).json({ message: "Both phone numbers required" });
  }

  const callbackUrl = `${BASE_URL}/api/call/twiml?clientNumber=${encodeURIComponent(
    clientNumber
  )}`;
  console.log("callbackUrl", callbackUrl);
  try {
    const call = await client.calls.create({
      to: agentNumber,
      from: process.env.TWILIO_PHONE_NUMBER,
      url: callbackUrl, // this TwiML will dial the client when agent answers
    });

    res.json({ success: true, sid: call.sid });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Call failed to initiate" });
  }
});

export const getTwiml = asyncMiddleware(async (req, res) => {
  const clientNumber = req.query.clientNumber;
  console.log("📞 TwiML endpoint hit with number:", clientNumber);

  const twiml = new twilio.twiml.VoiceResponse();
  const dial = twiml.dial();
  dial.number(clientNumber); // bridge to client

  res.type("text/xml");
  res.send(twiml.toString());
});
