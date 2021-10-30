const path = require('path')

console.log(__filename)   //абсолютный путь
console.log(path.basename(__filename))   //имя файла
console.log(path.dirname(__filename))  // папка
console.log(path.extname(__filename))  //расширение файла

console.log(path.parse(__filename))  //файл как объект, в принципе можно просто строку

console.log(path.join(__dirname, 'test', 'second.html'))  //пример генерации пути к нов файлу. просто строка
console.log(path.resolve(__dirname, './test', '/second.html')) //то же самое, только еще и абсолютный путь указывать. 

//документация на node - docs