import { NextApiResponse, NextApiRequest } from 'next'
// import nodemailer from 'nodemailer'

const { username, password } = process.env

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { firstName, lastName, email, message } = req.body ?? {}
  // const { firstName, lastName, email, message } = JSON.parse(req.body)

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

      await new Promise((resolve, reject) => {
        // verify connection configuration
        transporter.verify(function (error, success) {
          if (error) {
            console.log(error)
            reject(error)
          } else {
            console.log('Server is ready to take our messages')
            resolve(success)
          }
        })
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
      await new Promise((resolve, reject) => {
        // send mail
        transporter.sendMail(mailData, (err, info) => {
          if (err) {
            console.error(err)
            hasError = true
            reject(err)
          } else {
            console.log(info)
            resolve(info)
          }
        })
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
