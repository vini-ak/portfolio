const nodemailer = require('nodemailer')

const express = require('express')
const app = express()

const bodyParser = require('body-parser')

const port = 8080 
app.use(bodyParser.urlencoded({ extended: true}))

// POST route from contact form
app.post('/formulario', (req, res) => {
    console.log(req.body)
    // Instantiate the SMTP server
    let transporter = nodemailer.createTransport({

      host: "smtp.gmail.com",
      port: 587,
      auth: {
          user: 'meu email',
          pass: 'minha senha'
      }
    });
    
    let mailInfo = {
        from: 'vini <meu email',
        to: "vinicius.vieira@seedabit.org.br",
        replyTo: "meu email",
        subject: "Portfolio",
        text: `${req.body.email}: ${req.body.nome} said: ${req.body.mensagem}`,
        html: `<b>${req.body.email}: ${req.body.nome} said: ${req.body.mensagem}</b>`, // html body
    }
    
    transporter.sendMail(mailInfo, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log(info);
    })

    res.send({
      nome: req.body.nome,
      email: req.body.email,
      msg: req.body.mensagem
    })
  })


app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`)
})

