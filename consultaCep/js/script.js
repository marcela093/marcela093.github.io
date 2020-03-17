const getElement = document.querySelector.bind(document);

const form = getElement('.form__container');
const inputCep = getElement('#input-user');

form.addEventListener('submit', function(event){
    event.preventDefault();

    getAdress();
    
    inputCep.value = '';

});

const getAdress = () => {
    const cep = getElement('#input-user').value;

    const street = getElement('#street');
    const complement = getElement('#complement');
    const neighborhood = getElement('#neighborhood');
    const city = getElement('#city');
    const state = getElement('#state');


    fetch('https://viacep.com.br/ws/'+ cep +'/json/')
    .then(response => response.json())
    .then(data =>{
        street.append(data.logradouro);
        complement.append(data.complemento);
        neighborhood.append(data.bairro);
        city.append(data.localidade);
        state.append(data.uf);
    })
    .catch(error => console.log(error));
}