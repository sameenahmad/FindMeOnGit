const express=require('express');
const app=express();
const debug= require('debug')('app');


debug("Server Started");

app.listen(8000);
