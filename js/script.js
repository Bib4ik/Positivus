// let jora = 2;
// let kola = 10;
// let kerus = 20;
//
// const koko = fapepe(jora, kerus);
//
// console.log(koko);
//
// function fapepe(a, b) {
//
//     if (a > b) {
//         return a - b;
//     } else {
//         return a + b;
//     }
//
// }

// const fapepe = document.querySelector('#fapepe');
//
// const btn = document.querySelector('.btn');

// const fapepe = document.querySelector('span');

// fapepe.addEventListener('click', () => {
//     alert('JS работает 😎');
// });

let count = 0;

const counter = document.querySelector('#counter');
const fapepe = document.querySelector('#fapepe');
const shneina = document.querySelector('.shneina');

shneina.addEventListener('click', (e) => {
    count--;
    updateCounter();
})

fapepe.addEventListener('click', () => {
    count++;
    updateCounter();
});

function updateCounter() {
    counter.textContent = count;

    if (count === 0) {
        counter.classList.remove('red', 'green');
    } else if (count > 0) {
        counter.classList.remove('red');
        counter.classList.add('green');
    } else {
        counter.classList.remove('green');
        counter.classList.add('red');
    }
}
