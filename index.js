const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log('Servidor Funcionando em http://localhost:' + PORT))

// Configurar arquivos para serem acessados no navegador. A pasta passada será a public. Tudo o que estiver dentro dela, poderá ser lido pelo navegador
app.use(express.static(path.join(__dirname, './public')));

//Rotas
app.get("/", (req, res) => { //Redireciona para a página index
    res.redirect(301, "/index");
})

app.get("/index", function(req,res){
    res.sendFile(path.join(__dirname, './public', 'index.html'));   
})


app.get("/cadastro", function(req,res){
	res.sendFile(path.join(__dirname, "./public", "cadastro.html"))
})

app.get("/infoPessoais", function(req,res){
	res.sendFile(path.join(__dirname, "./public", "infoPessoais.html"))
})

app.get("/historicoPonto", function(req,res){
	res.sendFile(path.join(__dirname, "./public", "historicoPonto.html"))
})
