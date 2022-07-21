
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var currentUser;

var corsOptions = {
  orgim: '/',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(3100, () => {
  console.log('Server Started!');
});

app.route('/api/clientes').get((request, response) => {
  response.send(CLIENTES);
});

app.route('/api/clientes').post((request, response) => {
  let cliente = request.body;

  const firstId = CLIENTES ? Math.max.apply(null, CLIENTES.map(courseIterator => courseIterator.id)) + 1 : 1;
  cliente.id = firstId;
  CLIENTES.push(cliente);
  

  response.status(201).send(cliente);
});

app.route('/api/clientes/:id').put((request, response) => {
  const clienteId = +request.params['id'];
  const cliente = request.body;

  const index = cliente.findIndex(clienteIterator => clienteIterator.id === clienteId);
  CLIENTES[index] = cliente;

  response.status(200).send(cliente);
});

app.route('/api/clientes/:id').get((request, response) => {
  const clienteId = +request.params['id'];

  response.status(200).send(CLIENTES.find(clienteIterator => clienteIterator.id === clienteId));
});

app.route('/api/clientes/:id').delete((request, response)=> {
  const clienteId = +request.params['id'];
  CLIENTES = CLIENTES.filter(clienteIterator => clienteIterator.id !== clienteId);
  
  response.status(204).send({});
});

var CLIENTES = [
  {
    avatar: './assets/avatar/AvatarJony.jpg',
    id: 1,
    nome: 'Johnatan',
    sobrenome: ' Quenes',
    idade: 29,
    cpf: '123456789',
    dataNasc: '19/02/1992',
    telefone: '11985433222',
    endereco: 'Rua do Johnatan',
    dataAbertura: '19/02/1992',
    email: 'johnatan@mail.com',
    profissao:'reporter'


  },
  {
    avatar: './assets/avatar/AvatarLarissa.jpg',
    id: 2,
    nome: 'Larissa',
    sobrenome: ' da Silva',
    idade: 19,
    cpf: '123456789',
    dataNasc: '19/02/1992',
    telefone: '11985433222',
    endereco: 'Rua da Larissa',
    dataAbertura: '19/02/1992',
    email: 'larissa@mail.com',
    profissao:'marinheiro'

  },
  {
    avatar: './assets/avatar/AvatarRogerio.jpg',
    id: 3,
    nome: 'Rogerio',
    sobrenome: 'rodrigues',
    idade: 33,
    cpf: '123456789',
    dataNasc: '19/02/1992',
    telefone: '11985433222',
    endereco: 'Rua da rogerio',
    dataAbertura: '19/02/1992',
    email: 'rogerio@mail.com',
    profissao:'professor'

  },
  {
    avatar: './assets/avatar/AvatarLuiza.jpg',
    id: 4,
    nome: 'Luiza',
    sobrenome: ' Soares',
    idade: 33,
    cpf: '123456789',
    dataNasc: '19/02/1992',
    telefone: '11985433222',
    endereco: 'Rua da Luiza',
    dataAbertura: '19/02/1992',
    email: 'luiza@mail.com',
    profissao:'porteiro'

  },
  {
    avatar: './assets/avatar/AvatarRoberta.jpg',
    id: 5,
    nome: 'Roberta',
    sobrenome: ' Soares',
    idade: 33,
    cpf: '123456789',
    dataNasc: '19/02/1992',
    telefone: '11985433222',
    endereco: 'Rua da Roberta',
    dataAbertura: '19/02/1992',
    email: 'roberta@mail.com',
    profissao:'Doceira'

  }
];