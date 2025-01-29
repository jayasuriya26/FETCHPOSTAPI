const create = async (blog) => {

    const content = document.querySelector('.content')
    const message = document.querySelector('.message')
    try{
        const url = "https://jsonplaceholder.typicode.com/posts"

        //create Header
        const headers = {
            'content-Type': 'application/json'
        }
        //create body
        const body = JSON.stringify({
            title: blog.title,
            name: blog.name,
            userid: blog.userid
        })

        //create POST Request to send
        const response = await fetch(url, {method:"POST",headers,body})

        if(!response.ok){
            throw new Error(`HTTP is error, Status : ${response.status}`)
        }

        const data = await response.json()
        console.log(data)
        content.innerHTML = `<li>${data.title} (${data.name})</li>`
    }catch(err){
        console.log(err)
        message.textContent = err
    }
}

//calling function
create({
    title:"js fetch practice",
    name:"API",
    userid: 1
})