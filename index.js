
const input = document.querySelector('#greet');
console.log(input);
const button = document.querySelector('[type="submit"]');
console.log(button);

button.addEventListener('click', onButtonClick);

function onButtonClick(event) {
    console.log(input.value);
    const value = input.value;
    input.value = 'Hello, ' + value;
    }


/////////////////////////////////////////////////////////////////////////////////////////

const buttonReverse = document.querySelector('.button');


buttonReverse.addEventListener('click', onButtonClick2);

function onButtonClick2(event) {
        const input1 = document.getElementById('input1').value;
        const input2 = document.getElementById('input2').value;

        document.getElementById('input1').value = input2;
        document.getElementById('input2').value = input1;
    }
    

/////////////////////////////////////////////////////////////////////////////////////////////
const calcBtn = document.querySelector('.calc-btn');
const container = document.querySelector('.container');


calcBtn.addEventListener('click', onCalcBtnClick);

function onCalcBtnClick(event) {
    const inputA = Number(document.getElementById('inputA').value);
    const inputB = Number(document.getElementById('inputB').value);
    const resultSquare = inputA * inputB;
    const resultPerimetr = (inputA + inputB) * 2;

    if(resultSquare && resultPerimetr) {
        container.innerHTML = `<p>Площa прямокутника: ${resultSquare} &#13216</p>
        <p>Периметр прямокутника: ${resultPerimetr} см </p>`;
        }
        else{
            container.innerHTML = `<p> Ввеедіть число </p>`;
        }

    }
   
 

//////////////////////////////////////////////////////////////////////////////////////////////////////
const calcBtnHipotenuse = document.querySelector('.calc-btn-hipotenuse');
const katetA = document.querySelector('#katetA');
const katetB = document.querySelector('#katetB');
const containerHipotenuse = document.querySelector('.container-hipotenuse');



calcBtnHipotenuse.addEventListener('click', onCalcBtnHipotenuseClick);

function onCalcBtnHipotenuseClick(event) {
    const katetAValue = Number(katetA.value);
    const katetBValue = Number(katetB.value);
    const resultHipotenuse = Math.sqrt(katetAValue * katetAValue + katetBValue * katetBValue).toFixed(0);
    if(katetAValue && katetBValue) {
    containerHipotenuse.innerHTML = `<p>Гiпотенуза: ${resultHipotenuse} см</p>`;
}
else{
    containerHipotenuse.innerHTML = `<p> Введіть число </p>`;
}
}

//////////////////////////////////////////////////////////////////////////////////////////////////////

const calcBtnCircle = document.querySelector('.calc-btn-circle');
const inputCircle = document.querySelector('#circle');
const containerCircle = document.querySelector('.container-circle');

calcBtnCircle.addEventListener('click', onCalcBtnCircleClick);

function onCalcBtnCircleClick(event) {
    const inputCircleValue = Number(inputCircle.value);
    const resultCircle = (Math.PI * inputCircleValue * inputCircleValue).toFixed(3);
    if(inputCircleValue) {
    containerCircle.innerHTML = `<p>Площa круга: ${resultCircle} &#13216</p>`;
}
else{
    containerCircle.innerHTML = `<p> Введіть число </p>`;
}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const calcBtnSpeed = document.querySelector('.calc-btn-speed');
const inputTime = document.querySelector('#time');
const inputDistanse = document.querySelector('#distanse');
const containerSpeed = document.querySelector('.container-speed');

calcBtnSpeed.addEventListener('click', onCalcBtnSpeedClick);

function onCalcBtnSpeedClick(event) {
    const inputTimeValue = Number(inputTime.value) / 60 / 60;  
    const inputDistanseValue = Number(inputDistanse.value) / 1000; 
    const resultSpeed = (inputDistanseValue / inputTimeValue).toFixed(3);
    if(inputTimeValue && inputDistanseValue) {
    containerSpeed.innerHTML = `<p>Швидкість руху: ${resultSpeed} км/год</p>`;
}
else{
    containerSpeed.innerHTML = `<p> Введіть число </p>`;
}
}


//////////////////////////////////////////////////////////////////////////////////////////////////////
const inputColor = document.querySelector('#color');
const containerColor = document.querySelector('.container-color');

inputColor.addEventListener('input', onInputColor); 

function onInputColor(event) {
    const color = inputColor.value;
    containerColor.style.backgroundColor = color;
    containerColor.innerHTML = `${color}</p>`;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

const selectCities = document.querySelector('#cities');
const containerCities = document.querySelector('.container-cities');

selectCities.addEventListener('change', onSelectCities);

function onSelectCities(event) {
    const city = selectCities.value;
    containerCities.style.backgroundImage = `url(./images/${city}.jpg)`;
    containerCities.style.backgroundSize = 'cover';
    containerCities.style.backgroundPosition = 'center';
    containerCities.style.width = '50%';
    containerCities.style.height = '400px';
}