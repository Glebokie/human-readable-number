module.exports = function toReadable (number) {
  let numToStr = String(number);
  let str = '';
  let result;
  // Функциональное выражения для расчета чисел от 0 до 9
  // Начало
  let toUnit = function(n) {
    for(i = 0; i < n.length - 1 ; i++);
    if (n[i] === '0') {
    str = `${str}zero`;
    }
    else if (n[i] === '1') {
    str = `${str}one`;
    }
    else if (n[i] === '2') {
    str = `${str}two`;
    }
    else if (n[i] === '3') {
    str = `${str}three`;
    }
    else if (n[i] === '4') {
    str = `${str}four`;
    }
    else if (n[i] === '5') {
    str = `${str}five`;
    }
    else if (n[i] === '6') {
    str = `${str}six`;
    }
    else if (n[i] === '7') {
    str = `${str}seven`;
    }
    else if (n[i] === '8') {
    str = `${str}eight`;
    }
    else if (n[i] === '9') {
    str = `${str}nine`;
    }
    return str;
  }
// Конец
// Функциональное выражения для расчета чисел от 10 до 19
  // Начало
  let toTen = function(n) {
    for(i = 0; i < n.length - 1 ; i++);
    /////////// Проверка если первое число 1
    if (n[0] === '1') { 
      for(i = 1; i < n.length - 1 ; i++);
    if (n[i] === '0') {
    str = `${str}ten`;
    }
    else if (n[i] === '1') {
    str = `${str}eleven`;
    }
    else if (n[i] === '2') {
    str = `${str}twelve`;
    }
    else if (n[i] === '3') {
    str = `${str}thirteen`;
    }
    else if (n[i] === '4') {
    str = `${str}fourteen`;
    }
    else if (n[i] === '5') {
    str = `${str}fifteen`;
    }
    else if (n[i] === '6') {
    str = `${str}sixteen`;
    }
    else if (n[i] === '7') {
    str = `${str}seventeen`;
    }
    else if (n[i] === '8') {
    str = `${str}eighteen`;
    }
    else if (n[i] === '9') {
    str = `${str}nineteen`;
    }
    return str;  
    }
    ////// Конец проверки если первое число 1
    ////// Если первое число 2
    if (n[0] === '2') { 
      for(i = 1; i < n.length - 1 ; i++);
    if (n[i] === '0') {
    str = `${str}twenty`;
    }
    else if (n[i] !== '0') {
    str = `${str}twenty ${toUnit(n)}`;
    }
    return str;  
    }
    ////// Если первое число 3
    if (n[0] === '3') { 
      for(i = 1; i < n.length - 1 ; i++);
    if (n[i] === '0') {
    str = `${str}thirty`;
    }
    else if (n[i] !== '0') {
    str = `${str}thirty ${toUnit(n)}`;
    }
    return str;  
    }
 ////// Конец проверки если первое число 3
     ////// Если первое число 4
    if (n[0] === '4') { 
      for(i = 1; i < n.length - 1 ; i++);
    if (n[i] === '0') {
    str = `${str}forty`;
    }
    else if (n[i] !== '0') {
    str = `${str}forty ${toUnit(n)}`;
    }
    return str;  
    }
 ////// Конец проверки если первое число 4
       ////// Если первое число 5
    if (n[0] === '5') { 
      for(i = 1; i < n.length - 1 ; i++);
    if (n[i] === '0') {
    str = `${str}fifty`;
    }
    else if (n[i] !== '0') {
    str = `${str}fifty ${toUnit(n)}`;
    }
    return str;  
    }
 ////// Конец проверки если первое число 5
      ////// Если первое число 6
    if (n[0] === '6') { 
      for(i = 1; i < n.length - 1 ; i++);
    if (n[i] === '0') {
    str = `${str}sixty`;
    }
    else if (n[i] !== '0') {
    str = `${str}sixty ${toUnit(n)}`;
    }
    return str;  
    }
 ////// Конец проверки если первое число 6
      ////// Если первое число 7
    if (n[0] === '7') { 
      for(i = 1; i < n.length - 1 ; i++);
    if (n[i] === '0') {
    str = `${str}seventy`;
    }
    else if (n[i] !== '0') {
    str = `${str}seventy ${toUnit(n)}`;
    }
    return str;  
    }
 ////// Конец проверки если первое число 7
      ////// Если первое число 8
    if (n[0] === '8') { 
      for(i = 1; i < n.length - 1 ; i++);
    if (n[i] === '0') {
    str = `${str}eighty`;
    }
    else if (n[i] !== '0') {
    str = `${str}eighty ${toUnit(n)}`;
    }
    return str;  
    }
 ////// Конец проверки если первое число 8
       ////// Если первое число 9
    if (n[0] === '9') { 
      for(i = 1; i < n.length - 1 ; i++);
    if (n[i] === '0') {
    str = `${str}ninety`;
    }
    else if (n[i] !== '0') {
    str = `${str}ninety ${toUnit(n)}`;
    }
    return str;  
    }
 ////// Конец проверки если первое число 9
    return str; 
  }
// Конец
// Функциональное выражения для расчета чисел от 100 до 999
  // Начало
  let toHundreds = function(n) {
    for(i = 0; i < n.length - 1 ; i++);
    ////// Если первое число 1
    let nUpdate = '1';
    if (n[0] === nUpdate) { 
      for(i = 1; i < n.length - 1 ; i++);
    if (n[2] !== '0' && n[1] === '0') {
    str = `${str}one hundred ${toUnit(n.substring(2))}`;
    }
    else if (n[i] !== '0') {
    str = `${str}one hundred ${toTen(n.substring(1))}`;
    }
    else if (n[1] !== '0' && n[2] === '0') {
        str = `${str}one hundred ${toTen(n.substring(1))}`;
        }
    else if (n[i] === '0') {
    str = `${str}one hundred`;
    }
    return str;  
    }
    ////// Конец проверки если первое число 1
     ////// Если первое число 2
    if (n[0] === '2') { 
      for(i = 1; i < n.length - 1 ; i++);
    if (n[2] !== '0' && n[1] === '0') {
    str = `${str}two hundred ${toUnit(n.substring(2))}`;
    }
    else if (n[i] !== '0') {
    str = `${str}two hundred ${toTen(n.substring(1))}`;
    }
    else if (n[1] !== '0' && n[2] === '0') {
        str = `${str}two hundred ${toTen(n.substring(1))}`;
        }
    else if (n[i] === '0') {
    str = `${str}two hundred`;
    }
    return str;  
    }
    ////// Конец проверки если первое число 2
     ////// Если первое число 3
    if (n[0] === '3') { 
      for(i = 1; i < n.length - 1 ; i++);
    if (n[2] !== '0' && n[1] === '0') {
    str = `${str}three hundred ${toUnit(n.substring(2))}`;
    }
    else if (n[i] !== '0') {
    str = `${str}three hundred ${toTen(n.substring(1))}`;
    }
    else if (n[1] !== '0' && n[2] === '0') {
        str = `${str}three hundred ${toTen(n.substring(1))}`;
        }
    else if (n[i] === '0') {
    str = `${str}three hundred`;
    }
    return str;  
    }
    ////// Конец проверки если первое число 3
     ////// Если первое число 4
    if (n[0] === '4') { 
      for(i = 1; i < n.length - 1 ; i++);
    if (n[2] !== '0' && n[1] === '0') {
    str = `${str}four hundred ${toUnit(n.substring(2))}`;
    }
    else if (n[i] !== '0') {
    str = `${str}four hundred ${toTen(n.substring(1))}`;
    }
    else if (n[1] !== '0' && n[2] === '0') {
        str = `${str}four hundred ${toTen(n.substring(1))}`;
        }
    else if (n[i] === '0') {
    str = `${str}four hundred`;
    }
    return str;  
    }
    ////// Конец проверки если первое число 4
     ////// Если первое число 5
    if (n[0] === '5') { 
      for(i = 1; i < n.length - 1 ; i++);
    if (n[2] !== '0' && n[1] === '0') {
    str = `${str}five hundred ${toUnit(n.substring(2))}`;
    }
    else if (n[i] !== '0') {
    str = `${str}five hundred ${toTen(n.substring(1))}`;
    }
    else if (n[1] !== '0' && n[2] === '0') {
        str = `${str}five hundred ${toTen(n.substring(1))}`;
        }
    else if (n[i] === '0') {
    str = `${str}five hundred`;
    }
    return str;  
    }
    ////// Конец проверки если первое число 5
     ////// Если первое число 6
    if (n[0] === '6') { 
      for(i = 1; i < n.length - 1 ; i++);
    if (n[2] !== '0' && n[1] === '0') {
    str = `${str}six hundred ${toUnit(n.substring(2))}`;
    }
    else if (n[i] !== '0') {
    str = `${str}six hundred ${toTen(n.substring(1))}`;
    }
    else if (n[1] !== '0' && n[2] === '0') {
        str = `${str}six hundred ${toTen(n.substring(1))}`;
        }
    else if (n[i] === '0') {
    str = `${str}six hundred`;
    }
    return str;  
    }
    ////// Конец проверки если первое число 6
     ////// Если первое число 7
    if (n[0] === '7') { 
      for(i = 1; i < n.length - 1 ; i++);
    if (n[2] !== '0' && n[1] === '0') {
    str = `${str}seven hundred ${toUnit(n.substring(2))}`;
    }
    else if (n[i] !== '0') {
    str = `${str}seven hundred ${toTen(n.substring(1))}`;
    }
    else if (n[1] !== '0' && n[2] === '0') {
        str = `${str}seven hundred ${toTen(n.substring(1))}`;
        }
    else if (n[i] === '0') {
    str = `${str}seven hundred`;
    }
    return str;  
    }
    ////// Конец проверки если первое число 7
     ////// Если первое число 8
    if (n[0] === '8') { 
      for(i = 1; i < n.length - 1 ; i++);
    if (n[2] !== '0' && n[1] === '0') {
    str = `${str}eight hundred ${toUnit(n.substring(2))}`;
    }
    else if (n[i] !== '0') {
    str = `${str}eight hundred ${toTen(n.substring(1))}`;
    }
    else if (n[1] !== '0' && n[2] === '0') {
        str = `${str}eight hundred ${toTen(n.substring(1))}`;
        }
    else if (n[i] === '0') {
    str = `${str}eight hundred`;
    }
    return str;  
    }
    ////// Конец проверки если первое число 8
     ////// Если первое число 9
    if (n[0] === '9') { 
      for(i = 1; i < n.length - 1 ; i++);
    if (n[2] !== '0' && n[1] === '0') {
    str = `${str}nine hundred ${toUnit(n.substring(2))}`;
    }
    else if (n[i] !== '0') {
    str = `${str}nine hundred ${toTen(n.substring(1))}`;
    }
    else if (n[1] !== '0' && n[2] === '0') {
        str = `${str}nine hundred ${toTen(n.substring(1))}`;
        }
    else if (n[i] === '0') {
    str = `${str}nine hundred`;
    }
    return str;  
    }
    ////// Конец проверки если первое число 9
    return str; 
  }
// Конец
// Проверка если строка длинной в один символ
// Начало
if (numToStr.length == 1) {
result = toUnit(numToStr)
}
// Конец
// Проверка если строка длинной в два символа
else if (numToStr.length == 2) {
result = toTen(numToStr)
}
// Конец
// Проверка если строка длинной в три символа
else if (numToStr.length == 3) {
result = toHundreds(numToStr)
}
// Конец
return result;
}
