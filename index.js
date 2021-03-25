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
        vacinado : true,
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
        vacinado : true,
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
        vacinado : true,
        servicos : ['banho']
    }
];

const listarPets = () => {
    for (let pet of pets){
        console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`);
    }
} 

listarPets();

// console.log(pets);