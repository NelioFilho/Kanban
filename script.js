document.querySelectorAll('.kanban-card').forEach(card =>{
    card.addEventListener('dragstart', e =>{
        e.currentTarget.classList.add('dragging');
    })

    card.addEventListener('dragend', e =>{
        e.currentTarget.classList.remove('dragging');
    })
})

document.querySelectorAll('.kanban-cards').forEach(column =>{
    column.addEventListener('dragover', e =>{
        e.preventDefault();
        e.currentTarget.classList.add('cards-hover');
    })

    column.addEventListener('dragleave', e =>{
        e.currentTarget.classList.remove('cards-hover');
    })

    column.addEventListener('drop', e =>{
        e.currentTarget.classList.remove('cards-hover');

        const dragCard = document.querySelector('.kanban-card.dragging')
        e.currentTarget.appendChild(dragCard);
    })
})

const input = document.getElementById('priorityInput');
const list = document.getElementById('priorityList');

input.addEventListener('click', () => {
  list.style.display = list.style.display === 'block' ? 'none' : 'block';
});

document.querySelectorAll('.option').forEach(option => {
  option.addEventListener('click', () => {
    input.value = option.textContent;
    list.style.display = 'none';
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.custom-dropdown')) {
    list.style.display = 'none';
  }
});


//Add new card
const addCardBtn = document.querySelector('.add-card');
const newCard = document.querySelector('.new-card');
const boxCard = document.querySelector('.box-new-card');

addCardBtn.addEventListener('click', () => {
    newCard.classList.toggle('show');
    boxCard.classList.toggle('show');
    
    //fechar card
    const closeCardBtn = document.querySelector('.close-card');
    
    closeCardBtn.addEventListener('click', () => {
        newCard.classList.remove('show');
        boxCard.classList.remove('show');
    });
});

