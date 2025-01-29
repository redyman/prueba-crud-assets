import express from 'express' //llamamos a Express
import sendpulse from 'sendpulse-api'
var app = express()               
var port =  27012  //puerto

var API_USER_ID = "c79f7382012df0ea4c6fa37afec6374e";
var API_SECRET = "164551af334e1ec93e1b3099afd93a88";
var TOKEN_STORAGE = "/tmp/";

//permite manejar post json
app.use(express.json())

app.get('/', async function(req, res) {
  
  res.json("mail API 2")   
})
app.post('/', function(req, res) {
   
    const {sesionState} = req.body;
    if(!sesionState ){
        res.status(400).send({message:'Nesecistamos un sesionState'})
      }
    if(sesionState != "OK"){
      res.status(400).send({message:'sesionState inválido'})
    }
    const {emailData} = req.body;
    if(!emailData){
      res.status(400).send({message:'Necesitamos un emailData'})
    }
    const {emailFrom} = req.body;
    if(!emailFrom){
      res.status(400).send({message:'Necesitamos un emailFrom'})
    }
    const {emailTo} = req.body;
    if(!emailTo){
      res.status(400).send({message:'Necesitamos un emailTo'})
    }
    const {CC} = req.body;
    const {subject} = req.body;

    const correo=sendpulse.init(API_USER_ID,API_SECRET,TOKEN_STORAGE,function(token) {

        if (token && token.is_error) {
            res.status(400).send({message:'Error en generación de token.'})
        }
    
        var answerGetter = function(data) {
            
            const {error_code}=data;
            if(!error_code){
                res.status(400).send({data})
            }else{
                res.status(200).send({data})
            }
          }
          
          if(CC){
            var email = {
                "html" : emailData,
                "subject" : subject ? subject : "Notificación",
                "from" : {
                  //"name" : "prueba",
                  "email" : emailFrom
                },
                "to" : [
                  {
                    //"name" : "fredy",
                    "email" : emailTo
                  },
                ],
                "bcc" : [
                    {
                      //"name" : "John",
                      "email" : CC
                    },
                ]
              };
          }else{
            var email = {
                "html" : emailData,
                "subject" : subject ? subject : "Notificación",
                "from" : {
                  //"name" : "prueba",
                  "email" : emailFrom
                },
                "to" : [
                  {
                    //"name" : "fredy",
                    "email" : emailTo
                  },
                ]
              };
          }
          
          sendpulse.smtpSendMail(answerGetter,email);
    });
    
  })

// iniciamos nuestro servidor
app.listen(port)