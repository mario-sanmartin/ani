const express = require('express');
const morgan = require('morgan')

const app = express();

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.static(__dirname + '/'));

const puertoLirquen = process.env.PORT || 1337;

app.listen(puertoLirquen,()=>{
    console.log(`Pero que chucha ${puertoLirquen}`);
})