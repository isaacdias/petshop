const nomePetshop = "PETSHOP AVANADE";
const moment = require('moment');
const fs = require('fs');
let bandoDeDados = fs.readFileSync('./pets.json');

bancoDeDados = JSON.parse(bandoDeDados);


const listarPets = () => {
    
    for (let pet of bancoDeDados.pets){
        console.log(`${pet.nome}, ${pet.idade} ${anosDeIdade(pet)} , ${pet.tipo}, raça ${pet.raca}.`);

        for (const servico of pet.servicos) {
            console.log(`Serviço: ${servico.nome} | Realizado em: ${servico.data}`);
        }
        pet.vacinado ? console.log('Está vacinado!') : console.log('Não vacinado!');
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
    let petsVacinados = 0

    bancoDeDados.pets.map(pet => {
        if (!pet.vacinado) {
            vacinarPet(pet)
            petsVacinados++
        }
    })
    console.log(`${petsVacinados} pets foram vacinados!`)
}

const adicionarPet = novoPet => {
    if (typeof novoPet == 'object') {

        if (!novoPet.servicos) {
            novoPet.servicos = [];
        }
        bancoDeDados.pets.push(novoPet);
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

const atenderCliente = (pet, servico) => {
    console.log(`Olá, seja bem vindo, iremos cuidar do ${pet.nome}`)
    servico;
    console.log('Obrigado, volte sempre.')
}

const buscarPet = (pet) => {
    const petEncontrado = bancoDeDados.pets.find(petAtual => petAtual.nome == pet.nome)
    if (petEncontrado) {
        console.log(petEncontrado);
    }
    else{
        console.log('Não encontrado')
    }
}

const filtrarPet = (tipoPet) => {
    const tiposDePets = bancoDeDados.pets.filter(pet => pet.tipo == tipoPet)
    console.log(`${tipoPet}s`)
    console.log('')
    for (let pet of tiposDePets) {
        console.log(`${pet.nome}.`);
    }
}

const atualizarBancoDeDados = () => {
    jsonPet = JSON.stringify(bancoDeDados, null, 2);
    fs.writeFileSync("pets.json", jsonPet , (err) => {
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



// vacinarPet(bancoDeDados.pets[9]);
// vacinacaoPets();
// adicionarPet({nome: 'pluto', tipo: 'cachorro', idade: 4, 
// raca:'vira-lata', peso: 2, tutor: 'Carlos',
// contato: '81 9876-1234', vacinado: true, });
// darBanhoPet(bancoDeDados.pets[9]);
// tosarPet(bancoDeDados.pets[9]);
// apararUnhasPet(bancoDeDados.pets[9]);
// atenderCliente(bancoDeDados.pets[7], apararUnhasPet(bancoDeDados.pets[7]))
// buscarPet(bancoDeDados.pets[0]);
filtrarPet('cachorro')
// listarPets();
