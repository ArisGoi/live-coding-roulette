
// Array classe e studenti
const classe40 = [
    {
        "nome": "Aris",
        "cognome": "Goi"
    },
    {
        "nome": "Michele",
        "cognome": "Amoruso"
    },
    {
        "nome": "Simone",
        "cognome": "Morieri"
    },
    {
        "nome": "Dario",
        "cognome": "D'Agnelli"
    },
    {
        "nome": "Massimigliano",
        "cognome": "Pignataro"
    },
    {
        "nome": "Alessandro",
        "cognome": "Amara"
    },
    {
        "nome": "Valentina",
        "cognome": "Cantarelli"
    },
    {
        "nome": "Gianluca",
        "cognome": "Napoletano"
    },
    {
        "nome": "Mario",
        "cognome": "Fantasia"
    },
    {
        "nome": "Marco",
        "cognome": "Porcaro"
    },
    {
        "nome": "Hemil",
        "cognome": "Zanatta"
    },
    {
        "nome": "Elena",
        "cognome": "Catani"
    },
    {
        "nome": "Giordano Francesco",
        "cognome": "Rinaldi"
    },
    {
        "nome": "Francesco",
        "cognome": "Laurora"
    },
    {
        "nome": "Nicola",
        "cognome": "Felice"
    },
    {
        "nome": "Pasquale",
        "cognome": "Petito"
    },
    {
        "nome": "Mauro",
        "cognome": "Tomasoni"
    },
    {
        "nome": "Ottavio",
        "cognome": "Giudici"
    },
    {
        "nome": "Marika",
        "cognome": "Klimenko"
    },
    {
        "nome": "Elia",
        "cognome": "Raguso"
    },
    {
        "nome": "Alessandro",
        "cognome": "Nessi"
    },
    {
        "nome": "Ilario",
        "cognome": "Cocco"
    },
    {
        "nome": "Davide",
        "cognome": "Bajo"
    },
    {
        "nome": "Manfredi",
        "cognome": "Piraino"
    },
    {
        "nome": "Andrea",
        "cognome": "Geraci"
    },
    {
        "nome": "Federico",
        "cognome": "Lovaglio"
    },
    {
        "nome": "Emanuela",
        "cognome": "Mocci"
    },
    {
        "nome": "Simone",
        "cognome": "Severini"
    },
    {
        "nome": "Leonardo",
        "cognome": "Barone"
    },
    {
        "nome": "Lorenzo",
        "cognome": "Orrù"
    },
    {
        "nome": "Andrea",
        "cognome": "Fiorentino"
    },
    {
        "nome": "Angelo",
        "cognome": "Bennici"
    },
    {
        "nome": "Davide",
        "cognome": "Bernardini"
    },
];
console.log(classe40);

let winner = document.getElementById('winner');

function chunkString(str, length) {
    return str.match(new RegExp('.{1,' + length + '}', 'g'));
  };

document.getElementById('run').addEventListener('click',
    () => {
        let randomNumber = Math.floor(Math.random() * classe40.length);

        let {nome, cognome} = classe40[randomNumber];

        // separo il nome per il blip
        const first4name = chunkString(nome, 2);
        let lastNamePart = "";
        for( let i = 2; i < first4name.length; i++) {
            lastNamePart += first4name[i]
        }

        // separo il cognome per il blip
        const first4cognome = chunkString(cognome, 1);
        let lastCognomePart = "";
        for( let i = 2; i < first4cognome.length; i++) {
            lastCognomePart += first4cognome[i]
        }

        // Stampo in html
        winner.innerHTML = `
        <span>${first4name[0]}</span><span>${first4name[1]}</span>${lastNamePart} 
        ${first4cognome[0]}<span>${first4cognome[1]}</span>${lastCognomePart}
        `
    }
);