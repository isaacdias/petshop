let petObj = { 
    nome: 'Marvin',
    idade: 7,
    tipo: 'Gato'
};

// convertendo para JSON
petsJson = JSON.stringify(petObj);
console.log(petsJson);

// convertendo para objeto
console.log(JSON.parse(petsJson));

//  desestruturacao

let pessoa = {
    nome: 'Isaac',
    idade: '33',
    profissao: 'dev',
    contato: '8198765432',
    habilidades: ['nodejs', 'django', 'html']
}

let {nome, contato} = pessoa;
console.log(`${nome} - ${contato}`)

