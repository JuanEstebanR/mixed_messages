// Array 1 (verbos inspiradores)
const inicio = ['¡Tú puedes ', 'No te rindas jamas puedes ', 'Sigue adelante para ', 'Confía en ti para'];
var medio = ['superar cualquier obstáculo, ', 'alcanzar tus metas, ', 'lograr tus sueños, ', 'ser exitoso, '];
var final = ['si te lo propones!', 'con perseverancia.', 'y no dejes que nadie te detenga.', 'y verás los resultados.'];


//const mensajes = new Object();

const randomNumber = () => {
    return Math.floor(Math.random() * (inicio.length))
}


const randomWords = () => {
    const verb = inicio[randomNumber()]
    const adj = medio[randomNumber()]
    const noun = final[randomNumber()]
    const arrayWords = [verb, adj, noun]
    return arrayWords
}

const generateMessage = () => {
   
    return `${randomWords()[0]} ${randomWords()[1]} ${randomWords()[2]}`
}



export { randomNumber, randomWords, generateMessage }