const express= require('express')
const router = express.Router();
const fetch = require("node-fetch");
const client_id = "Iv1.197e4c888c53ddd4";
const client_secret= "694cd5c94f3042470ec2b96db132617f1c3cb092";
const user=process.argv[2];

router.get("/", (req, res) => {
  fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`)
  .then(res => res.json())
  .then(data=> res.send(data))
  .catch(err => console.log(err))
 });


router.get("/repo", (req, res) => {
  fetch(`https://api.github.com/users/:${user}/repos`)
  .then(res => res.json())
 .then(data=> res.send(`${user} has ${data.public_repos} Public Repositories`))
.catch(err => console.log(err));
});


router.get("/repo/lang", (req, res) => {
  fetch(`https://api.github.com/users/repos/:${user}/:${repo}/languages`)
  .then(res => res.json())
  .then(data=> res.send(data))
 .catch(err => console.log(err));
});


router.get("/followers", (req, res) => {
  fetch(`https://api.github.com/users/:${user}`)
  .then(res => res.json())
  .then(data=> res.send(`${user} Follows ${data.followers} people`))
 .catch(err => console.log(err));
 });

router.get("/following", (req, res) => {
  fetch(`https://api.github.com/users/:${user}`)
  .then(res => res.json())
 .then(data=> res.send(`${user} is Following ${data.following} People `))
.catch(err => console.log(err));
});
 

module.exports=router;