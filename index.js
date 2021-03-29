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
    for (let pet of bancoDeDados.pets) {
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
    console.log(`Olá, iremos cuidar do ${pet.nome}`)
    servico;
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
// atenderCliente(bancoDeDados.pets[8], apararUnhasPet(bancoDeDados.pets[8]))
listarPets();
