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
    cb.checked = 'checked'
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
    if (todoItems.length === 0) {
        $('.toggle-all').checked = true
    } else {
        $('.toggle-all').checked = false
    }
}
async function main() {
    try {
        const items = await fetchData()
        showAllItems(items)
    // click to a in ul filters to show active items
    $('.filters-all').addEventListener('click', async function(e) {
        const items = await fetchData()
        $('.todo-list').innerHTML = ''
        showAllItems(items)
    })
    $('.filters-active').addEventListener('click', async function(e) {
        const items = await fetchData()
        $('.todo-list').innerHTML = ''
        showTodoItems(items)
    })
    $('.filters-completed').addEventListener('click',async function(e) {
        const items = await fetchData()
        $('.todo-list').innerHTML = ''
        showCompletedItems(items)
    })

    } catch (error) {
        alert("Loading failed")
    }
}
$('#my-form').addEventListener('submit', async function(e) {
    e.preventDefault()
    const title = $('.new-todo').value
    if(title != '') {
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
    }
})

// click on clear completed to delete all completed items
$('.clear-completed').addEventListener('click', async function(e) {
    const items = await fetchData()
    const [todoItems,completedItems] = filteredAllItems(items)
    completedItems.map(async item => {
        const res = await axios.delete(`https://63c61ff54ebaa802853ff786.mockapi.io/api/todoItems/${item.id}`)
        if (res.status == 200) {
            $('.todo-list').innerHTML = ''
            showAllItems(items)
        } else {
            alert('fail')
        }
    })
})
// click on input checkbox in view to change status active to completed 
$('.todo-list').addEventListener('click', async function(e) {
    if (e.target.className === 'toggle') {
        // if input checked 
        if(e.target.checked === false){
            const id = e.target.parentElement.parentElement.id
            const res = await axios.put(`https://63c61ff54ebaa802853ff786.mockapi.io/api/todoItems/${id}`, {
                status: 'active'
            })
            if (res.status == 200) {
                $('.todo-list').innerHTML = ''
                const items = await fetchData()
                showAllItems(items)
            } else {
                alert('fail')
            }
        }
        else {
            const id = e.target.parentElement.parentElement.id
            const res = await axios.put(`https://63c61ff54ebaa802853ff786.mockapi.io/api/todoItems/${id}`, {
                status: 'completed'
            })
            if (res.status == 200) {
                $('.todo-list').innerHTML = ''
                const items = await fetchData()
                showAllItems(items)
            } else {
                alert('fail')
            }
        }
    }
})
// if input toggle-all checked to all items status is completed
$('.toggle-all').addEventListener('click', async function(e) {
    const items = await fetchData()
    if (e.target.checked === true) {
        items.map(async item => {
            const res = await axios.put(`https://63c61ff54ebaa802853ff786.mockapi.io/api/todoItems/${item.id}`, {
                status: 'completed'
            })
            if (res.status == 200) {
                $('.todo-list').innerHTML = ''
                showAllItems(items)
            } else {
                alert('fail')
            }
        })
    } else {
        items.map(async item => {
            const res = await axios.put(`https://63c61ff54ebaa802853ff786.mockapi.io/api/todoItems/${item.id}`, {
                status: 'active'
            })
            if (res.status == 200) {
                $('.todo-list').innerHTML = ''
                showAllItems(items)
            } else {
                alert('fail')
            }
        })
    }
}) 
main()

    