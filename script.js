const form = document.querySelector('form')
const list = document.querySelector('ul')


// ADD TO DO ITEM
const addTodoItem = todo => {
    const text = `<li><input type="checkbox">${todo}<button>Delete</button></li>`
    list.innerHTML += text
}

list.addEventListener("click", event => {

  if (event.target.tagName === 'BUTTON'){
    event.target.parentElement.remove()
  }  
  else if (event.target.tagName === 'INPUT'){
    debugger
    event.target.parentElement
    event.target.parentElement.classList.toggle('checked')
  }
})


form.addEventListener("submit", event => {
    event.preventDefault()
    const input = form.todo
    const todo = input.value.trim()
    
    if (todo.length){
        addTodoItem(todo)
        input.value = ''
    }
})