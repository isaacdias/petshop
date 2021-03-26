const moment = require('moment');
const nomePetshop = "PETSHOP AVANADE";

let pets = [
    {
        nome : 'Marvin',
        tipo : 'gato',
        idade : 7,
        raca : 'não-definida',
        peso : 3,
        tutor : 'Isaac',
        contato : '(81) 98765-4321',
        vacinado : false,
        servicos : ['banho', 'corte-unha']
    },
    {
        nome : 'Hulk',
        tipo : 'cachorro',
        idade : 2,
        raca : 'Doberman',
        peso : 3,
        tutor : 'Carlos',
        contato : '(81) 98765-4321',
        vacinado : false,
        servicos : ['banho', 'tosa']
    },
    {
        nome : 'Thor',
        tipo : 'cachorro',
        idade : 5,
        raca : 'Pastor Alemão',
        peso : 3,
        tutor : 'Amanda',
        contato : '(81) 98765-4321',
        vacinado : false,
        servicos : ['banho']
    }
];

const listarPets = () => {
    for (let pet of pets){
        console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`);
    }
}

const vacinarPet = (pet) => {
    if (pet.vacinado === true) {
        console.log(`${pet.nome} já está vacinado`);
    }
    else{
        pet.vacinado = true;
        console.log(`${pet.nome} foi vacinado com sucesso.`)
    }
}

const vacinacaoPets = () => {
    totalVacinados = 0;
    for (let pet of pets) {
        if (pet.vacinado === false){
            pet.vacinado = true;
            totalVacinados++;
        }
    }
    console.log(`${totalVacinados} animais foram vacinados nessa campanha.`)
}

const adicionarPet = novoPet => {
    if (typeof novoPet == 'object') {

        if (!novoPet.servicos) {
            novoPet.servicos = [];
        }
        pets.push(novoPet);
    } else {
        console.log('Insira um argumento valido!');
    }
}

const darBanhoPet = pet => {
    pet.servicos.push('banho');
    console.log(`O serviço banho foi realizado no ${pet.nome}.`);
}

const tosarPet = (pet) => {
    pet.servicos.push('tosa');
    console.log(`O serviço tosa foi realizado no ${pet.nome}.`);
}

const apararUnhasPet = (pet) => {
    pet.servicos.push('aparar-unhas');
    console.log(`O serviço aparar unha foi realizado no ${pet.nome}.`);
}

// listarPets();
// vacinarPet(pets[0]);
vacinacaoPets();
adicionarPet({nome: 'doug', tipo: 'cachoro', idade: 1, 
    raca:'pastor alemão', peso: 15, tutor: 'marina',
    contato: '81 9876-1234', vacinado: true, });
darBanhoPet(pets[3]);
// tosarPet(pets[3]);
// apararUnhasPet(pets[3]);
console.log(pets);