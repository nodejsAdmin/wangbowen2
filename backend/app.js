const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const mysql = require('mysql');
app.use(bodyparser.urlencoded({}))
const pool = mysql.createPool({
	host:'localhost',
	user:'root',
	password:'root',
	database:'root',
	port:3306
})
app.use('/q',function(req,res){
	res.setHeader('Access-Control-Allow-Origin','*');
	pool.query(`SELECT * FROM root3 WHERE state=${req.body.id}`,function(err,rows){
		res.send(rows)
	})
});
app.use('/del',function(req,res){
	console.log(req.body)
	res.setHeader('Access-Control-Allow-Origin','*');
	pool.query(`DELETE FROM root3 WHERE id=${req.body.id}`,function(err,rows){
		res.send(rows)
	})
});
app.use('/add',function(req,res){
	res.setHeader('Access-Control-Allow-Origin','*');
	pool.query(`INSERT INTO root3 (name,sex,state) VALUES('${req.body.name}','${req.body.sex}','1')`,function(err,rows){
		res.send(rows)
	})
});
app.use('/date',function(req,res){
	console.log(req.body)
	res.setHeader('Access-Control-Allow-Origin','*');
	pool.query(`UPDATE root3 SET state=${req.body.state} WHERE id=${req.body.id}`,function(err,rows){
		res.send(rows)
	})
});
app.listen(3000,()=>{
	console.log('ok')
});