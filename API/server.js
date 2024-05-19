//Inicialização servidor
const app = require('./config/config-server');
const bodyParser = require('body-parser'); 
const database = require('./config/database');
const routes = require('./routes/routes')

//Inicializa o servidor e conecta com banco de dados
try{
    database;
    app.listen(3000, () => {
        console.log("servidor iniciado http://localhost:3000");
        app.use(routes)
    })
    app.use(bodyParser.json());
    
}catch(err){
    console.log("Erro ao iniciar configurações do servidor");
}

