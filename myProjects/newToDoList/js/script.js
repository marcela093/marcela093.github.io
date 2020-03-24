const getAllElements = document.querySelector.bind(document);

const form = getAllElements('.list__content');
const input = getAllElements('.input-user');


form.addEventListener('submit', function(event){
    event.preventDefault();
    
    validation = inputValidation();
    
    form.reset();
});

function inputValidation(){
    const error = getAllElements('.error');
    if(input.value.trim() === ''){
        error.textContent = 'Digite uma tarefa válida';
    }else{
        error.textContent = '';
        createAndDeleteItens();
    }
}

function createAndDeleteItens(){
    const ul = getAllElements('.list__item');

    let itemsList = document.createElement('li');
    itemsList.classList.add('item');
    ul.appendChild(itemsList);

    const selectOptions = document.getElementById('options');
    let optionsValue = document.createElement('p');
    optionsValue.textContent = selectOptions.value;
    optionsValue.classList.add('options-label');
    itemsList.appendChild(optionsValue);
    

    let itemContent = document.createElement('p');
    itemContent.textContent = input.value;
    itemContent.setAttribute('class', 'item-style');
    itemsList.appendChild(itemContent);

    
    itemContent,itemsList.addEventListener('dblclick', function(){
        itemContent.classList.add('check');
        itemsList.classList.add('check-div');
    });

    const btnDelete = document.createElement('button');
    btnDelete.textContent = 'x';
    btnDelete.classList.add('btn-delete-item');
    itemsList.appendChild(btnDelete);

    btnDelete.addEventListener('click', function(){
        itemsList.classList.add('delete-item');
    });

    const deleteAll = getAllElements('.delete-all__container');
    deleteAll.addEventListener('click', function(){
        itemsList.classList.add('all-done-delete');
    });

    const allDone = getAllElements('.all-done__container');
    allDone.addEventListener('click', function(){
        itemContent.classList.add('check');
        itemsList.classList.add('check-div');
    });
}