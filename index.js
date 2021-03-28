const bandoDeDados = require('./pets.json');
const fs = require('fs');
const moment = require('moment');
const nomePetshop = "PETSHOP AVANADE";

pets = bandoDeDados;


const listarPets = () => {
    
    for (let pet of pets){
        console.log(`${pet.nome}, ${pet.idade} ${anosDeIdade(pet)} , ${pet.tipo}, raça ${pet.raca}.`);

        for (const servico of pet.servicos) {
            console.log(`Serviço: ${servico.nome} | Realizado em: ${servico.data}`);
        }
        if (pet.vacinado ? console.log('Está vacinado!') : console.log('Não vacinado!'));
        console.log('-----------------------------')
    }
}

const vacinarPet = (pet) => {
    if (pet.vacinado === true) {
        console.log(`${pet.nome} já está vacinado`);
    }
    else{
        pet.vacinado = true;
        atualizarBancoDeDados()
        console.log(`${pet.nome} foi vacinado com sucesso.`)
    }
}

const vacinacaoPets = () => {
    totalVacinados = 0;
    for (let pet of pets) {
        if (pet.vacinado === false){
            pet.vacinado = true;
            totalVacinados++;
            atualizarBancoDeDados()        }
    }
    console.log(`${totalVacinados} animais foram vacinados nessa campanha.`)
}

const adicionarPet = novoPet => {
    if (typeof novoPet == 'object') {

        if (!novoPet.servicos) {
            novoPet.servicos = [];
        }
        pets.push(novoPet);
        atualizarBancoDeDados()
        console.log(`o pet ${novoPet.nome} foi cadastrado!`);
    } else {
        console.log('Insira um argumento valido!');
    }
}


const darBanhoPet = pet => {
    pet.servicos.push({
        'nome':'Banho',
        'data': moment().format('DD-MM-YYYY')
    });
    atualizarBancoDeDados()
    console.log(`O serviço de banho foi realizado no ${pet.nome}.`);
}

const tosarPet = (pet) => {
    pet.servicos.push({
        'nome':'Tosa',
        'data': moment().format('DD-MM-YYYY')
    });
    atualizarBancoDeDados()
    console.log(`O serviço de tosa foi realizado no ${pet.nome}.`);
}

const apararUnhasPet = (pet) => {
    pet.servicos.push({
        'nome':'Aparar unhas',
        'data': moment().format('DD-MM-YYYY')
    });
    atualizarBancoDeDados()
    console.log(`O serviço de aparar unhas foi realizado no ${pet.nome}.`);
}

const atualizarBancoDeDados = () => {
    jsonPet = JSON.stringify(pets, null, 2);
    fs.writeFile("pets.json", jsonPet , (err) => {
        if (err) throw err;
    });
}

const anosDeIdade = (pet) => {
    if(pet.idade <= 1) {
        return 'ano';
    } else{
        return 'anos';
    }
}

// vacinarPet(pets[7]);
// vacinacaoPets();
// adicionarPet({nome: 'Bangela', tipo: 'gato', idade: 4, 
// raca:'vira-lata', peso: 2, tutor: 'Carlos',
// contato: '81 9876-1234', vacinado: true, });
// darBanhoPet(pets[7]);
// tosarPet(pets[7]);
// apararUnhasPet(pets[7]);
// console.log(pets);
listarPets();

