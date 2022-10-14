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
    }

    dispFlex.style.display = 'flex';

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
    else {
        console.log('Ok'); /* Por hora */
    }

}