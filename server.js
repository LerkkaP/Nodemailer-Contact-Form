const express = require('express')
const router = express.Router()
const cors = require("cors")
require('dotenv').config()

const nodemailer = require('nodemailer')
const { google } = require("googleapis")
const OAuth2 = google.auth.OAuth2

const app = express() 
app.use(cors())
app.use(express.json())
app.use("/", router)

const PORT = 3001

const myOAuth2Client = new OAuth2(
process.env.CLIENT_ID,
process.env.CLIENT_SECRET,
"https://developers.google.com/oauthplayground"
)

myOAuth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN
  })

const myAccessToken = myOAuth2Client.getAccessToken()

const contactEmail  = nodemailer.createTransport({
  service: "gmail",
  auth: {
      type: "OAuth2",
      user: process.env.EMAIL, // gmail account used to set the project up in google cloud console"
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: myAccessToken 
  }})

router.post("/contact", (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const message = req.body.message
  const mail = {
    from: name,
    to: process.env.EMAIL, // address that receives the email
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  }
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" })
    } else {
      res.json({ status: "Message Sent" })
    }
  })
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})