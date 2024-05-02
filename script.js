const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    console.log("Peso:", weight);
    console.log("Altura:", height);

    const bmi = weight / (height * height);

    console.log("IMC:", bmi);

    const value = document.getElementById('value');
    value.textContent = bmi.toFixed(2);

    let description = '';
    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5) {
        description = 'Cuidado! Você está abaixo do peso! Podemos te ajudar com o ganho de massa, procure a Smart Fit mais próxima.';
    } else if (bmi >= 18.5 && bmi <= 25) {
        description = ' Você esta no peso ideal!Para continuar assim e de forma saudavel, procure a Smart Fit mais próxima.';
    } else if (bmi > 25 && bmi <= 30) {
        description = 'Cuidado! Você esta com sobrepeso! Mas, podemos te ajudar com isso. Procure a Smart Fit mais próxima.';
    } else if (bmi > 30 && bmi <= 35) {
        description = 'Cuidado! Você esta com obesidade moderada! Procure um de nossos nutricionistas na Smart Fit mais próxima.';
    } else if (bmi > 35 && bmi <= 40) {
        description = 'Cuidado! Você esta com obesidade Severa! Procure um de nossos nutricionistas na Smart Fit mais próxima.';
    } else {
        description = 'Cuidado! Você esta com obesidade Morbida! Procure um de nossos nutricionistas na Smart Fit mais próxima.';
    }

    // Formatação do BMI como uma string antes de substituir o ponto por vírgula
    const bmiFormatted = bmi.toFixed(2).replace('.', ',');
    value.textContent = bmiFormatted;

    document.getElementById('description').textContent = description;
});






