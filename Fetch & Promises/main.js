/**Calling Data From API Using Fetch Object */
function AjaxCall() {
    let url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url, { method: 'GET' })
        .then((response) => {
            return response.json()
        })
        .then((resJson) => {
            let user = document.getElementById('users')
            let primBtn = document.getElementById('primInput')
            primBtn.setAttribute('disabled', '')

            for (let i = 0; i < resJson.length; i++) {
                user.innerHTML += `<option value="${resJson[i].name}">${resJson[i].name}</option>`
            }

            let show = document.getElementById('show')
            let domData = document.getElementById('data')
            show.removeAttribute('disabled','')

            show.onclick = () => {
                domData.innerHTML = `User ID Is : ${resJson[user.selectedIndex].id}
                & Email is : ${resJson[user.selectedIndex].email}
                & Phone Number Is :${resJson[user.selectedIndex].phone} `
            }
        })
        .catch(err => err)
}
/** Sending Data Using HttpReq Method 'POST' */
function AjaxPost() {
    let url = 'https://jsonplaceholder.typicode.com/posts'
    let bodyy = {
        title: prompt('Enter Your Name'),
        body: prompt('Enter Color'),
        userId: 2
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(bodyy), 
        headers:{'content-type' : 'application/json'}})
        .then((response) => {
            return response.json()
        })
        .then((res) => {
            let msg = document.getElementById('suc')
            msg.innerHTML = `Information Added Successfully!<br> 
            Name : ${res.title}<br>
            Color : ${res.body}<br>
            ID : ${res.userId}<br>
            `
            console.log(res)
        })
        

}
