const randomNumber = () => {
    return Math.floor(Math.random() * 255);
}

const randomColor = () => {
    const r = randomNumber();
    const g = randomNumber();
    const b = randomNumber();

    return [r, g, b];
}



export {randomColor, randomNumber};