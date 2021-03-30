const nomePetshop = "PETSHOP AVANADE";
const moment = require('moment');
const fs = require('fs');
let bandoDeDados = fs.readFileSync('./pets.json');

bancoDeDados = JSON.parse(bandoDeDados);


const listarPets = () => {
    
    const petsList = bancoDeDados.pets.forEach(pet => {
        console.log(`${pet.nome}, ${pet.idade} ${anosDeIdade(pet)} , ${pet.tipo}, raça ${pet.raca}.`);
                
        for (const servico of pet.servicos) {
            console.log(`Serviço: ${servico.nome} | Realizado em: ${servico.data}`);
        }
        pet.vacinado ? console.log('Está vacinado!') : console.log('Não vacinado!');
        console.log('-----------------------------')
    });
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
        return petsVacinados;
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
    clientePremium(pet)
}

const tosarPet = (pet) => {
    pet.servicos.push({
        'nome':'Tosa',
        'data': moment().format('DD-MM-YYYY')
    });
    atualizarBancoDeDados()
    console.log(`O serviço de tosa foi realizado no ${pet.nome}.`);
    clientePremium(pet)
}

const apararUnhasPet = (pet) => {
    pet.servicos.push({
        'nome':'Aparar unhas',
        'data': moment().format('DD-MM-YYYY')
    });
    atualizarBancoDeDados()
    console.log(`O serviço de aparar unhas foi realizado no ${pet.nome}.`);
    clientePremium(pet)
}

const atenderCliente = (pet, servico) => {
    console.log(`Olá, seja bem vindo, iremos cuidar do ${pet.nome}`)
    servico;
    console.log('Obrigado, volte sempre.')
}

const buscarPet = (nomePet) => {

    let petEncontrado = bancoDeDados.pets.find((pet) => {
        return pet.nome == nomePet;
    });

    return petEncontrado ? petEncontrado : `Nenhum pet encontrado com nome ${nomePet}`;
}

const filtrarPet = (tipoPet) => {
    const tiposDePets = bancoDeDados.pets.filter(pet => pet.tipo == tipoPet)
    console.log(`${tipoPet}s`)
    console.log('')
    for (let pet of tiposDePets) {
        console.log(`${pet.nome}.`);
    }
}

const clientePremium = (pet) => {
    const servicosRealizados = pet.servicos.map(servico => 1)
    let servicosNecessarios = 5
    if (servicosRealizados != 0) {
        let quantidadeServicos = servicosRealizados.reduce((acumulador, valorAtual) => {
            return acumulador + valorAtual
        })

        if(quantidadeServicos == servicosNecessarios) {
            console.log(` ${pet.nome} ganhou um serviço grátis.`)
        }else{
            console.log(`Faltando ${servicosNecessarios - quantidadeServicos} serviço(s) para ganhar o bônus.`)
        }

    }else{
        console.log(`Ainda não realizou nenhum serviço.`)
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
// adicionarPet({nome: 'Eliot', tipo: 'gato', idade: 4, 
// raca:'vira-lata', peso: 2, tutor: 'Ana',
// contato: '81 9876-1234', vacinado: false, });
// darBanhoPet(bancoDeDados.pets[8]);
// tosarPet(bancoDeDados.pets[9]);
// apararUnhasPet(bancoDeDados.pets[0]);
// atenderCliente(bancoDeDados.pets[10], apararUnhasPet(bancoDeDados.pets[10]))
// console.log(buscarPet('Marvin'));
// filtrarPet('cachorro')
// clientePremium(bancoDeDados.pets[1])
listarPets();
