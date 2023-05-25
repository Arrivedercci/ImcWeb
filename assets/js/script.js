const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const imc = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    document.getElementById('infos').classList.remove('hidden');

    if (imc < 18.5) {
        description = 'Cuidado! ' + name + ', você está abaixo do peso!'
    }
    else if (imc >= 18.5 && imc <= 25) {
        description = name + ' , você está no peso ideal!'
    }
    else if (imc >= 25 && imc <= 30) {
        description = 'Cuidado! ' + name + ', você está com sobrepeso!'
    }
    else if (imc >= 30 && imc <= 35) {
        description = 'Cuidado! ' + name + ', você está com obesidade moderada!'
    }
    else if (imc >= 35 && imc <= 40) {
        description = 'Cuidado! ' + name + ', você obesidade severa!'
    }
    else {
        description = 'Cuidado! ' + name + ', você está com obesidade morbida!'
    }

    value.textContent = imc.replace('.', ',');
    document.getElementById('description').textContent = description;
}
);
