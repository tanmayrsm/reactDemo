const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(cors())

app.post('/api/login',(req,res) => {

  //console.log("req:",req.body);
  let users = {
    phone : '9999999999',
    name: 'Mekvahan',
    password: '0123456789',
    address : 'Mumbai, Maharashtra'
  }
  console.log("comparing:",users," and:",req.body)
  if (req.body.phone == users.phone && req.body.password == users.password){
      res.status(200).send({
          message: "done",
          data: users
      })
  }else{
      res.status(200).send({
          message: 'invalid'
      })
  }

});
const PORT  = process.env.PORT||3002

app.listen(PORT ,() => {
  console.log(`server runs on ${PORT}`);
})