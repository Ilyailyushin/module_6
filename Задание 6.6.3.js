let arr = [];

for (let i = 0; i <= 5; i += 1) {
    var command = prompt('Введите команду');
    var arrays = command.split(' ');
    
    var index = arrays[0];
    var name = arrays[1];
    arr.push(i);
    }
console.log(arr);