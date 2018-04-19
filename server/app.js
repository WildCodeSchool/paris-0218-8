const express = require('express')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const path = require('path')
const nodemailer = require('nodemailer')
const fs = require('fs')
const util = require('util')
const app = express()


const writeFile = util.promisify(fs.writeFile)
// View engine setup
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')))

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use((request, response, next)=> {
  response.header('Access-Control-Allow-Origin', '*')
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})


app.use((request, response, next) => {
if (request.method ==='GET') return next()

  let accumulator = ''

  request.on('data',data => {
    accumulator += data
  })

  request.on('end', () => {
    request.body =JSON.parse(accumulator)
    next()
 })
})


app.get('/', (req, res) => {   //change for quest
  res.render('contact');
});

app.post('/login', (request, response, next) => {

const id = Math.random().toString(36).slice(2).padEnd(11, '0')
const filename = `user${id}.json`
const filepath = path.join(__dirname, './mock/users/', filename)



const content = {
            FirstName: request.body.Firstname,
            LastName: request.body.Lastname,
            Username: request.body.Username,
            Password: request.body.Password,
            Confirmpass: request.body.Confirmpass,
            Email: request.body.Email,
            Phone: request.body.Phone,
            Message: request.body.Message
        }

writeFile(filepath, JSON.stringify(content), 'utf8')
.then(() => response.json('OK'))
.catch(next)
})


// app.post('/send', (req, res) => {
//   const output = `
//     <p>You have a new contact request</p>
//     <h3>Contact Details</h3>
//     <ul>
//       <li>Name: ${req.body.name}</li>
//       <li>Firstname: ${req.body.company}</li>
//       <li>Email: ${req.body.email}</li>
//       <li>Phone: ${req.body.phone}</li>
//     </ul>
//     <h3>Message</h3>
//     <p>${req.body.message}</p>
//   `;

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//         user: 'wildcodegamer@gmail.com', // generated ethereal user
//         pass: 'Azerty11'  // generated ethereal password
//     },
//     tls:{
//       rejectUnauthorized:false
//     }
//   });

//   // setup email data with unicode symbols
//   let mailOptions = {
//       from: 'wildcodegamer@gmail.com', // sender address
//       to: 'wildcodegamer@gmail.com', // list of receivers
//       subject: 'Contact Request', // Subject line
//       text: 'Hello world?', // plain text body
//       html: output // html body
//   };

//   // send mail with defined transport object
//   transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//           return console.log(error);
//       }
//       console.log('Message sent: %s', info.messageId);
//       console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

//       res.render('contact', {msg:'Email has been sent'});
//   });
//   });

app.listen(3000, () => console.log('Server started... on htpp://localhost:3000 '))
