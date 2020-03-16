const getElement = document.querySelector.bind(document);

const button = getElement('#btn-send');
const inputCep = getElement('#input-user');

const street = getElement('#street');
const complement = getElement('#complement');
const neighborhood = getElement('#neighborhood');
const city = getElement('#city');
const state = getElement('#state');


button.addEventListener('click', function(event){
    event.preventDefault();

    getAdress();

    inputCep.value = '';

})

const getAdress = () => {
    const cep = getElement('#input-user').value;

    fetch('https://viacep.com.br/ws/'+ cep +'/json/')
    .then(response => response.json())
    .then(data =>{
        street.append(data.logradouro)
        complement.append(data.complemento)
        neighborhood.append(data.bairro)
        city.append(data.localidade)
        state.append(data.uf)

    })
    .catch(error => console.log(error))
}