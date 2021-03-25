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

const adicionarPet = (nome, tipo, Idade, raca, peso, tutor, contato, 
    vacinado, servicos) => {
    novoPet = {nome, tipo, Idade, raca, peso, tutor, contato,
         vacinado, servicos};
    pets.push(novoPet);
 }


// listarPets();
// vacinarPet(pets[0]);
vacinacaoPets();
