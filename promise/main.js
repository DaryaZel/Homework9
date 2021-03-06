
let wrapper = document.getElementById('wrapper');

function httpGet(url) {

    return new Promise(function (resolve, reject) {

        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onload = function () {
            if (this.status == 200) {
                debugger
                resolve(this.response);
            } else {
                var error = new Error(this.statusText);
                reject(error);
            }
        };

        xhr.onerror = function () {
            reject(new Error("Network Error"));
        };

        xhr.send();
    });

}
btn.onclick = () => {
    httpGet('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            console.log(response);
            let user = JSON.parse(response);
            return user;
        })
        .then(user => {
            let array = [];
            for (let i = 0; i < user.length; i++) {
                array.push(`<div>` + user[i].name + `</div>`);
            }
            wrapper.innerHTML = array.join('')
        })
        .catch.catch(er => {
            console.log(er.message);
         });
}
//promise используется при необходимости выполнения кода асинхронно. Промис это объект у которго есть три состояния, начальное это состояние pending""ожидание",
// в последствии выполнения объект принимает состояние "выполнено успешно" и вызывает соответсвующий колбэк или состояние "выполнено с ошибкой".
//У промиса есть метод then, который в качестве аргумента принимает колбэк функцию исходя из состояния которое принял промис в ходе выполнения.
//Также есть метод catch, который принимает в качестве аргумента функцию при неуспешном выполнении промиса.
//Как я поняла самый сок промиса в том, что можно использовать методы then catch , что помогает избежать громоздкого когда при callback-hell  с огромной вложенностью
