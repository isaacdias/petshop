const nomePetshop = "PETSHOP AVANADE";
const moment = require('moment');
const fs = require('fs');
let bandoDeDados = fs.readFileSync('./pets.json');

bancoDeDados = JSON.parse(bandoDeDados);


const listarPets = () => {
    
    const petsList = bancoDeDados.pets.forEach(pet => {
        let {nome, idade, tipo, raca, vacinado, servicos} = pet
        console.log(`${nome}, ${idade} ${anosDeIdade(pet)} , ${tipo}, raça ${raca}.`);
                
        for (const servico of servicos) {
            let {nome, data} = servico
            console.log(`Serviço: ${nome} | Realizado em: ${data}`);
        }
        vacinado ? console.log('Está vacinado!') : console.log('Não vacinado!');
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

const adicionarPet = (...novosPets) => {
    novosPets.forEach((novoPet) => {
        bancoDeDados.pets.push(novoPet);
    })

    atualizarBancoDeDados();
    novosPets.forEach((pet) => {
        console.log(`${pet.nome} foi adicionado com sucesso!`);
    })
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
    servico(pet);
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
    let nServicos = pet.servicos.length;

    if (nServicos >= 5) {
        console.log(
            `Olá, ${pet.nome}! Você ganhou um serviço grátis.!`
        );
    } else {
        console.log(
            `Olá, ${pet.nome}! Você ainda não tem serviços gratis disponiveis!`
        );
    }
};

const contatoTutor = (pet) => {
    let {nome, tutor, contato} = pet;
    
    return `Tutor: ${tutor}, Contato: ${contato}, Pet: ${nome}`;
}

const filtrarTutor = (nomeTutor) => {
    let petsTutor = bancoDeDados.pets.filter((pet) => {
        return pet.tutor == nomeTutor;
    });
    
    console.log(`Pets do tutor ${nomeTutor}:`)
    petsTutor.forEach((pet) => {
        console.log(`${contatoTutor(pet)}`)
    })
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
// atenderCliente(bancoDeDados.pets[1], apararUnhasPet)
// console.log(buscarPet('Marvin'));
// filtrarPet('cachorro')
// clientePremium(bancoDeDados.pets[1]);
// console.log(contatoTutor(bancoDeDados.pets[0]));
// filtrarTutor('Isaac');
// listarPets();
