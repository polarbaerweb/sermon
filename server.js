const express = require("express")
const ejs = require("ejs")
const bodyParser = require("body-parser")
const app = express()
app.set("view engine", "ejs")
app.use(express.static("."))
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", function(req, res){
	res.render("index")
})

app.listen(3000, function(){
	console.log("server run on the 3000 port")
})