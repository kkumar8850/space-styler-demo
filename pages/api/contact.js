const nodemailer = require('nodemailer')

export default async function handler(req, res){
    const {body} = req
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: 'spacestylerwebsite@gmail.com',
          pass: 'ylftoqhcechkgsyn',
        },
        secure: true,
      })
      const mailData = {
        from: 'Space Styler',
        to: ['spacestylerzia@gmail.com', 'sales@spacestyler.in'],
        subject: `New Query From ${body.name} on your website`,
        text: body.message + " | Sent from: " + body.email,
        html: `<div><p>You have a new query on your website :</p>
        <ul>
          <li>
            Name : ${body.name}
          </li>
          <li>
            Email Id : ${body.email}
          </li>
          <li>
            Phone Number : ${body.phone}
          </li>
          <li>
            Query : ${body.message}
          </li>
        </ul>`
      }  
      transporter.sendMail(mailData, function (err, info) {
        if(err)
        res.status(404).json({
          error: `Connection refused at ${err.address}`
      });
        else
        res.status(250).json({
          success: `Message delivered to ${info.accepted}`
      });
      })  
}