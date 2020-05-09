// include packages
const express = require('express')
const session = require('express-session')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const checkUser = require('./checkUsers')
const app = express()
const port = 3000

// set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// use body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// use session middleware
app.use(
  session({
    name: 'appLogin',
    secret: 'secret',
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: 30 * 1000 } // session只保留30秒
  })
)

// set static files
app.use(express.static('public'))

// set routes & check session
app.get('/', (req, res) => {
  // render welcome page if session alive
  // console.log(req.session)
  if (req.session.verifiedAccount) {
    res.render('welcome_page', {
      firstName: req.session.verifiedAccount.firstName
    })
  } else {
    // render login page if no session 
    res.render('index')
  }
})

// handle the req & res
app.post('/', (req, res) => {
  let email = req.body.email
  const password = req.body.password
  const storeEmail = req.body.storeEmail
  const logout = req.body.logout

  // check user login
  const results = checkUser(email, password)
  const loginStatus = results.loginStatus
  const verifiedAccount = results.verifiedAccount
  // console.log('loginStatus:', loginStatus);

  // show welcome page if login Success
  if (loginStatus === 'Success') {
    // console.log('verifiedAccount:', verifiedAccount);
    // store session
    req.session.verifiedAccount = verifiedAccount
    res.render('welcome_page', {
      firstName: verifiedAccount.firstName
    })
  } else if (logout === 'on') {
    // logout & destroy session
    req.session.destroy()
    res.render('index')
  } else {
    // show error message if login Fail 
    const errorMessage = 'Username or Password 錯誤'
    // remove it if store email not on
    if (storeEmail !== 'on') {
      email = ''
    }
    res.render('index', { email, errorMessage, storeEmail })
  }
})

// listen on the port
app.listen(port, () => {
  console.log(`server is listening on localhost:${port}`)
})
