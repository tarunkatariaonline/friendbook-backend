const express = require('express')
var cors = require('cors')
const app = express()
const dotenv = require('dotenv')
var cookieParser = require('cookie-parser')
const userRouter = require('./Routers/userRoute')
const friendBookRouter = require('./Routers/friendBookRoute')
var bodyParser = require('body-parser')
const port = 3000
dotenv.config({path:'./config.env'})
require('./Database/Connection')
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors({
  
  origin:"*",
  credentials:true,
}))
// parse application/json
app.use(bodyParser.json())

app.use(userRouter)
app.use(friendBookRouter)

app.get('/',(req,res)=>{
  console.log("hello i am here on server")
  res.json({
    message:"Welcome to the server developed by tarun kataria",
   
  })

})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})