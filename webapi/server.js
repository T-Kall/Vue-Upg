const http = require('http')
const port = process.env.port || 9998
const app = require('./app')
const mongodb = require('mongoose')

const serverUri = 'http://localhost:'+ port
const mongoUri = 'mongodb+srv://tina:tina71best@cluster0-ly0i9.mongodb.net/webapidb?retryWrites=true&w=majority';


//starting webserver
http.createServer(app).listen(port, () => console.log("WEBSERVER:" + serverUri))

//starting mongodb database
mongodb
.set('useCreateIndex', true)
.connect(mongoUri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    //serverSelectionTimeoutMS: 5000 
})
.then(() => console.log("MONGODB: Running"))
//.catch((error) => console.log(error))