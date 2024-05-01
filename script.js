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
});






