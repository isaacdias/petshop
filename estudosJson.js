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