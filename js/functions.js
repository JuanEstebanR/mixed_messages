import { randomColor, randomNumber as random_1 } from "/modules/random_color.js";
import { randomNumber as random, randomWords, generateMessage} from "/modules/messages.js";




const display_Mensaje = document.getElementById("main_heading");
const botonGenerar = document.getElementById("boton-uno");



const generarMensaje = () => {
    display_Mensaje.innerHTML = generateMessage(random());
};



botonGenerar.addEventListener("click", generarMensaje);