import { randomColor } from "/modules/random_color.js";
import { randomNumber as random, randomWords, generateMessage} from "/modules/messages.js";


const display_Mensaje = document.getElementById("main_heading");
const botonGenerar = document.getElementById("boton-uno");

const generarMensaje = () => {
    display_Mensaje.innerHTML = generateMessage(random());
    document.querySelector('body').style.backgroundColor = randomColor();
};

botonGenerar.addEventListener("click", generarMensaje);