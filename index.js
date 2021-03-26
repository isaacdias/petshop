const bandoDeDados = require('./pets.json');
const fs = require('fs');
const nomePetshop = "PETSHOP AVANADE";

pets = bandoDeDados;


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
        jsonPet = JSON.stringify(pets, null, 2);
        fs.writeFile("pets.json", jsonPet , (err) => {
            if (err) throw err;
            console.log(`o pet ${novoPet.nome} foi cadastrado!`);
         });
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

// vacinarPet(pets[0]);
// vacinacaoPets();
adicionarPet({nome: 'snoop', tipo: 'cachoro', idade: 1, 
raca:'pastor alemão', peso: 15, tutor: 'marina',
contato: '81 9876-1234', vacinado: true, });
// darBanhoPet(pets[3]);
// tosarPet(pets[3]);
// apararUnhasPet(pets[3]);
// console.log(pets);
listarPets();

