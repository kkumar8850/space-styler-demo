const nodemailer = require('nodemailer')

export default async function handler(req, res){
    const body = req.body

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: 'kkumar8850@gmail.com',
          pass: 'fwxfmnamogpxqvqv',
        },
        secure: true,
      })
      const mailData = {
        from: 'demo email',
        to: 'letsrockkuldeep@gmail.com',
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from:
        ${req.body.email}</p>`
      }  
      transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info)
      })  
      res.status(200)
}