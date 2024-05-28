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

app.get("/absenteimos", function(req,res){
    res.sendFile(path.join(__dirname, './public', 'absenteimos.html'));   
})
app.get("/beneficiosSecundarios", function(req,res){
	res.sendFile(path.join(__dirname, "./public", "beneficiosSecundarios.html"))
})
app.get("/cadastro", function(req,res){
	res.sendFile(path.join(__dirname, "./public", "cadastro.html"))
})
app.get("/ferias", function(req,res){
	res.sendFile(path.join(__dirname, "./public", "ferias.html"))
})
app.get("/historicoHolerite", function(req,res){
	res.sendFile(path.join(__dirname, "./public", "historicoHolerite.html"))
})
app.get("/historicoPonto", function(req,res){
	res.sendFile(path.join(__dirname, "./public", "historicoPonto.html"))
})
app.get("/holerite", function(req,res){
	res.sendFile(path.join(__dirname, "./public", "holerite.html"))
})
app.get("/index", function(req,res){
	res.sendFile(path.join(__dirname, "./public", "index.html"))
})
app.get("/infoPessoais", function(req,res){
	res.sendFile(path.join(__dirname, "./public", "infoPessoais.html"))
})
app.get("/noticias", function(req,res){
	res.sendFile(path.join(__dirname, "./public", "noticias.html"))
})
app.get("/noticiasRH", function(req,res){
	res.sendFile(path.join(__dirname, "./public", "noticiasRH.html"))
})
app.get("/vagasInternas", function(req,res){
	res.sendFile(path.join(__dirname, "./public", "vagasInternas.html"))
})
app.get("/valeAlimentacao", function(req,res){
	res.sendFile(path.join(__dirname, "./public", "valeAlimentacao.html"))
})
app.get("/valeTransporte", function(req,res){
	res.sendFile(path.join(__dirname, "./public", "valeTransporte.html"))
})
