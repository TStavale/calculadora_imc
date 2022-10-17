/* Switching between Divs */
const DivContainer1 = document.querySelector('.container1');
const DivContainer2 = document.querySelector('.container2');
const DivContainer3 = document.querySelector('.container3');

function change(CurrentContainer,NextContainer) {

    let dispNone;
    let dispFlex;

    if(CurrentContainer == 1){
        dispNone = DivContainer1;
    }
    else if (CurrentContainer == 2) {
        dispNone = DivContainer2;
    }
    else {
        dispNone = DivContainer3;
    }

    dispNone.style.display = 'none';

    if(NextContainer == 1){
        dispFlex = DivContainer1;
    }
    else if (NextContainer == 2) {
        dispFlex = DivContainer2;
    }
    else {
        dispFlex = DivContainer3;
        Weight.value = '';
        height.value = '';
    }

    dispFlex.style.display = 'flex';

}

/* Botão Limpar */
const btnclear = document.addEventListener ('click');
function cleaninputs (btnclear) {
    Weight.value = '';
    height.value = '';
}

/* Validate */
function validate () {
    const DivWeight = document.getElementById('Weight');
    const Divheight = document.getElementById('height');

    Weight.style.border = 'none';
    height.style.border = 'none';

    if (!Weight.value || !height.value) {
        
        if (!Weight.value && !height.value) {
            Weight.style.border = '1px solid red';
            height.style.border = '1px solid red';
        }
        else if (!Weight.value) {
            Weight.style.border = '1px solid red';
        }
        else {
            height.style.border = '1px solid red';
        }
 
    }
    /* Os Índices do IMC */
    else {
        let imc = Weight.value / (height.value * height.value);
        const result = document.getElementById('result')
        
        if (imc < 18.5) {
            console.log('Magreza | Obesidade: 0');
            result.style.color = 'yellow'
            result.innerHTML = 'Magreza | Obesidade: 0';
        }

        else if (imc >= 18.5 && imc < 25) {
            console.log('Normal | Obesidade: 0');
            result.style.color = '#00FA9A'
            result.innerHTML = 'Normal | Obesidade: 0';
        }

        else if (imc >= 25 && imc < 30) {
            console.log('Sobrepeso | Obesidade: I');
            result.style.color = 'yellow'
            result.innerHTML = 'Sobrepeso | Obesidade: I';
        }

        else if (imc >= 30 && imc < 40) {
            console.log('Obesidade | Obesidade: II');
            result.style.color = 'red'
            result.innerHTML = 'Obesidade | Obesidade: II';
        }

        else {
            console.log('Obesidade Grave | Obesidade: III');
            result.style.color = 'red'
            result.innerHTML = 'Obesidade Grave | Obesidade: III';
        }

        change(2,3);
    }

}
