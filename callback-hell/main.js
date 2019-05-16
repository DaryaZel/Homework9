

let wrapper = document.getElementById('wrapper');

function request(url, method, success, error) {
    debugger
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function (ok) {
        debugger
        success(ok);
    })
    xhr.addEventListener("error", function (er) {
        error(er);
    })

    xhr.open(method, url);
    xhr.send();
}
btn.onclick = () => {
    request('https://jsonplaceholder.typicode.com/users/1', "GET", (ok) => {
        debugger
        const output = JSON.parse(ok.currentTarget.response)
        console.log(output)
        request('https://jsonplaceholder.typicode.com/comments', "GET", (ok) => {
            const output = JSON.parse(ok.currentTarget.response)
            let array = [];
            for (let i = 0; i < output.length; i++) {
                array.push(`<div>`+[i+1]+'.' + output[i].name + `</div>`);
            }
            wrapper.innerHTML = array.join('')
            request('https://jsonplaceholder.typicode.com/usersuser/1/posts', "GET", (ok) => {
                const output = JSON.parse(ok.currentTarget.response)
                console.log(output)
            })
        })
    },
        (er) => {
            console.log(er)
        }

    )
}
// в данном случае колбэки используются для выполнения кода асинхронно, чтобы соблюдалась очередность 
// начала выполнения функиций. Например если нам нужны данные с сервера, то порядок выполнения кода важен,
// так как выполение функции по обработке данных сервера до момента их получения приведет остановке. Из-за большой вложенности фунцкий 
// и сложностью восприятия кода конструкция получила название callback-hell 