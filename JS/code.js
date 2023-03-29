function f1() {
    this.document.title = 'ОПАСНОСТЬ',
    setTimeout(f2,1500)
};

function f2() {
    this.document.title = 'Попытка взлома'
    setInterval(f1, 1500)
};

f2()

setInterval(function(){
    document.querySelector('text').innerText = 'пройди в тюрягу, там место освободилось';
}, 5000)
























// var seqRunner = function(deeds) {
//     return deeds.reduce(function(p, deed) {
//         return p.then(function() {
//             // Выполняем следующую функцию только после того, как отработала
//             // предыдущая.
//             return deed();
//         });
//     }, Promise.resolve()); // Инициализируем очередь выполнения.
// }

// function f1() {
//     console.log('f1')
// };

// function f2() {
//     console.log('зачем это?')
// };

// function final() {
//     console.log('не знаю')
// };

// f1();
// f2();

// seqRunner([f1, f2]).then(funcrfinal());

// setTimeout(function(){
//     document.title = 'ОПАСНОСТЬ'; 
//     document.title = 'Попытка взлома';
//     }, 700);