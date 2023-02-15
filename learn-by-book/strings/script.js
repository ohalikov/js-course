const ucFirst = (inputString) => inputString[0].toUpperCase() + inputString.slice(1);

console.log(ucFirst('вася') == 'Вася');

// 2 задача.Проверка на спам
/*
  Напишите функцию checkSpam(str), возвращающую true, 
  если str содержит 'viagra' или 'XXX', а иначе false.
*/

const checkSpam = (text) => {
  let editText = text.toLowerCase();

  return editText.includes('viagra') || editText.includes('xxx');
};

console.log(checkSpam('buy ViAgRA now'));
console.log('------');
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));
