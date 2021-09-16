
// Array classe e studenti
const classe40 = [
    {
        "nome": "Studente",
        "cognome": "uno"
    },
    {
        "nome": "Studente",
        "cognome": "due"
    },
    {
        "nome": "Studente",
        "cognome": "tre"
    },
    {
        "nome": "Studente",
        "cognome": "quattro"
    },
];

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