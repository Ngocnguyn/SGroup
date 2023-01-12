    const axios = require('axios');

    // const fetchData = () => {
    //     axios.get("https://631b4048fae3df4dcff94f47.mockapi.io/api/foods").then((response) => {
    //         const data = response.data
    //         //Return data have isExpensive = true with filter()
    //         const filteredData = data.filter((item) => {
    //             return item.isExpensive == true;
    //         });
    //         console.log(filteredData)
    //     }).catch((err) => {
    //         console.log("co loi~")
    //     });
    // }   
    // fetchData()
    // 1. get food ==> Neu food la tao  thi in ra uong nuoc tao
                    // Neu food la pizza thi in ra an pizza
    const fetchData = () => {
        axios.get("https://631b4048fae3df4dcff94f47.mockapi.io/api/foods")
        .then((response) => {
            // if response.name = pizza consolog "an pizza"
            // if response.name = nước táo consolog "uống nước táo"
            const data = response.data;
            data.forEach((food,index) => {
                if(food.name === 'pizza'){
                    console.log(`${index+1}: an pizza`)
                }
                else if(food.name === 'nước táo'){
                    console.log(`${index+1}: uống nước táo`)
                }
            });
        })
        .catch((err) => {
            console.log("co loi~")
        });
    }
    fetchData()
    // 2. todo = [], inProgress = [], done =[]
    // fetch todoItems = [] from api
    // example for a todoItem:{id:1, title:"Learn React",status:"todo|in-progress|done"}
    const fetchTodoData = () => {
        axios.get("https://631b4048fae3df4dcff94f47.mockapi.io/api/todoItems")
        .then((response) => {
            const todo = response.data.filter(item => item.status === 'todo')
            const inProgress = response.data.filter(item => item.status === 'in-progress')
            const done = response.data.filter(item => item.status === 'done')

            console.log("todo item la:")
            todo.forEach((item,index) => {
                console.log(`${index+1}: ${item.title}`)
            })
            console.log("in-progress item la:")
            inProgress.forEach((item,index) => {
                console.log(`${index+1}: ${item.title}`)
            })

            console.log("done item la:")
            done.forEach((item,index) => {
                console.log(`${index+1}: ${item.title}`)
            })

        })
        .catch((err) => {
            console.log("co loi~")
        });
    }
    fetchTodoData();


    