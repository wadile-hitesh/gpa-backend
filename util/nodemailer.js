//import * as dotenv from 'dotenv'
import { createTransport } from "nodemailer"

//dotenv.config()

const transporter = createTransport({
    service: "gmail",
    auth: {
        user: process.env.SMPT_USER,
        pass: process.env.SMTP_PASSWORD
    }
})



export { transporter }