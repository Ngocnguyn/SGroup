function $(selector) {
    return document.querySelector(selector)
}

async function fetchData() {
    const { data } = await axios.get('https://63c61ff54ebaa802853ff786.mockapi.io/api/todoItems')
    return data
}

function li_activeItem(item) {
    const li = document.createElement('li')
    li.id = item.id
    const div = document.createElement('div')
    div.className = 'view'
    const cb = document.createElement('input')
    cb.type = 'checkbox'
    cb.className = 'toggle'
    const lb = document.createElement('label')
    lb.innerText = item.title
    const btn = document.createElement('button')
    btn.className = 'destroy'
    btn.id = item.id
    btn.onclick = async function(e) {
        const id = e.target.id
        const res = await axios.delete(`https://63c61ff54ebaa802853ff786.mockapi.io/api/todoItems/${id}`)
        if (res.status == 200) {
            e.target.parentElement.parentElement.remove()
        } else {
            alert('fail')
        }
    }
    div.appendChild(cb)
    div.appendChild(lb)
    div.appendChild(btn)
    li.appendChild(div)
    return li
}
function li_completedItem(item) {
    const li = document.createElement('li')
    li.className = 'completed'
    li.id = item.id
    const div = document.createElement('div')
    div.className = 'view'
    const cb = document.createElement('input')
    cb.type = 'checkbox'
    cb.className = 'toggle'
    cb.checked = true
    const lb = document.createElement('label')
    lb.innerText = item.title
    const btn = document.createElement('button')
    btn.className = 'destroy'
    btn.id = item.id
    btn.onclick = async function(e) {
        const id = e.target.id
        const res = await axios.delete(`https://63c61ff54ebaa802853ff786.mockapi.io/api/todoItems/${id}`)
        if (res.status == 200) {
            e.target.parentElement.parentElement.remove()
        } else {
            alert('fail')
        }
    }
    div.appendChild(cb)
    div.appendChild(lb)
    div.appendChild(btn)
    li.appendChild(div)
    return li
}


function filteredAllItems(items) {
    const todoItems = items.filter(item => item.status === 'active')
    const completedItems = items.filter(item => item.status === 'completed')
    return [todoItems,completedItems]
}
function showTodoItems(items) {
    const ul_todoItems = $('.todo-list')
    const [todoItems,completedItems] = filteredAllItems(items)   
    todoItems.map(item => {
        ul_todoItems.appendChild(li_activeItem(item))
    })
    const number = todoItems.length
    $('.todo-number').innerText = number
    const number2 = completedItems.length
    if(number2 > 0){
        $('.clear-completed').style.display = 'block'
    }
}
function showCompletedItems(items) {
    const ul_todoItems = $('.todo-list')
    const [todoItems,completedItems] = filteredAllItems(items)   
    completedItems.map(item => {
        ul_todoItems.appendChild(li_completedItem(item))
    })
    showCount(items)
}
function showAllItems(items) {
    const ul_todoItems = $('.todo-list')
    const [todoItems,completedItems] = filteredAllItems(items)
    todoItems.map(item => {
        ul_todoItems.appendChild(li_activeItem(item))
    })
    completedItems.map(item => {
        ul_todoItems.appendChild(li_completedItem(item))
    })
    showCount(items)
}
function showCount(items) {
    const [todoItems,completedItems] = filteredAllItems(items)
    const number = todoItems.length
    $('.todo-number').innerText = number
    const number2 = completedItems.length
    if(number2 > 0){
        $('.clear-completed').style.display = 'block'
    }
}
async function main() {
    try {
        const items = await fetchData()
        showAllItems(items)
    // click to a in ul filters to show active items
    $('.filters-all').addEventListener('click', function(e) {
        $('.todo-list').innerHTML = ''
        showAllItems(items)
    })
    $('.filters-active').addEventListener('click', function(e) {
        $('.todo-list').innerHTML = ''
        showTodoItems(items)
    })
    $('.filters-completed').addEventListener('click', function(e) {
        $('.todo-list').innerHTML = ''
        showCompletedItems(items)
    })

    } catch (error) {
        alert("Loading failed")
    }
}
main()
// type to new-todo to submit data input to api
$('#my-form').addEventListener('submit', async function(e) {
    e.preventDefault()
    const title = $('.new-todo').value
    const data = {
        title: title,
        status: "active"
    }
    console.log(title)
    const res = await axios.post('https://63c61ff54ebaa802853ff786.mockapi.io/api/todoItems', data)
    if (res.status == 201) {
        $('.new-todo').value = ''
        $('.todo-list').innerHTML = ''
        const items = await fetchData()
        showAllItems(items)
    } else {
        alert('fail')
    }
})

// click on clear completed to delete all completed items
$('.clear-completed').addEventListener('click', async function(e) {
    const items = await fetchData()
    const [todoItems,completedItems] = filteredAllItems(items)
    completedItems.map(async item => {
        const res = await axios.delete(`https://63c61ff54ebaa802853ff786.mockapi.io/api/todoItems/${item.id}`)
        if (res.status == 200) {
            // $('.clear-completed').style.display = 'none'
            $('.todo-list').innerHTML = ''
            showAllItems(items)
        } else {
            alert('fail')
        }
    })
})



