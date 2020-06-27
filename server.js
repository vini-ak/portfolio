const nodemailer = require('nodemailer')

const express = require('express')
const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true}))

// POST route from contact form
app.post('/formulario', (req, res) => {

    // Instantiate the SMTP server
    let transporter = nodemailer.createTransport({

      host: "smtp.gmail.com",
      port: 587,
      auth: {
          user: "meu email",
          pass: "minha senha"
      }
    });
    
    let mailInfo = {
        from: 'vini <meu email>',
        to: "vinicius.vieira@seedabit.org.br",
        replyTo: "vinicius.vdes@gmail.com",
        subject: "Portfolio",
        text: `${req.body.email}: ${req.body.nome} said: ${req.body.mensagem}`,
        html: "<b>Hello world?</b>", // html body
    }
    
    transporter.sendMail(mailInfo, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log(info);
    })

    res.send({
      val: true
    })
  })

app.listen(3003, () => {
  console.log(`Servidor executando na porta 3003`)
})

