// Array 1 (verbos inspiradores)
const inspirationalVerbs = [
    "Cree",
    "Sueña",
    "Logra",
    "Inspira",
    "Persiste",
    "Conquista",
    "Triunfa",
    "Empodera",
    "Supera",
    "Transforma"
];

// Array 2 (adjetivos positivos)
const positiveAdjectives = [
    "Increíble",
    "Valiente",
    "Audaz",
    "Resiliente",
    "Dedicada",
    "Optimista",
    "Apasionada",
    "Ambiciosa",
    "Empoderada",
    "Fuerte"
];

// Array 3 (sustantivos)
const nouns = [
    "Éxito",
    "Oportunidades",
    "Posibilidades",
    "Sueños",
    "Metas",
    "Desafíos",
    "Trayectoria",
    "Crecimiento",
    "Excelencia",
    "Victoria"
];

const mensajes = new Object();

const randomNumber = () => {
    return Math.floor(Math.random() * (inspirationalVerbs.length - 1))
}


const randomWords = () => {
    const verb = inspirationalVerbs[randomNumber()]
    const adj = positiveAdjectives[randomNumber()]
    const noun = nouns[randomNumber()]

    return [verb, adj, noun]
}

const generateMessage = () => {
    
    return `${randomWords()[0]} en tu camino hacia el ${randomWords()[1]}, ¡inspira con tu espíritu ${randomWords()[2]} y conquista sin límites`
}



export {randomNumber, randomWords, generateMessage}