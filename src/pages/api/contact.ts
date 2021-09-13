import { NextApiResponse, NextApiRequest } from 'next'
// import nodemailer from 'nodemailer'

const { username, password } = process.env

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { firstName, lastName, email, message } = req.body ?? {}
  if (firstName && lastName && email && message && username && password) {
    try {
      let nodemailer = require('nodemailer')
      const transporter = nodemailer.createTransport({
        port: 465,
        host: 'smtp.gmail.com',
        auth: {
          user: username,
          pass: password
        },
        secure: true
      })

      const mailData = {
        from: email,
        to: username,
        subject: `Message From ${firstName} ${lastName}`,
        text: `${message} | Sent from: ${email}`,
        html: `<div>${message}</div><p>Sent from:
        ${email}</p>`
      }

      let hasError = false
      transporter.sendMail(mailData, function (err, info) {
        if (err) {
          console.log(err)
          hasError = true
        } else {
          console.log(info)
        }
      })
      if (hasError) {
        return res.status(500).json({ message: 'Something went wrong!', error: true })
      }
      return res.status(200).json({ message: 'Email sent successfully!' })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Something went wrong!', error: true })
    }
  }

  return res.status(500).json({ message: 'Something went wrong!', error: true })
}
