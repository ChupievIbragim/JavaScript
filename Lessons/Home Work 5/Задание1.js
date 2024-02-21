function filterObjectsByProperty(array, propertyName, propertyValue) {
    return array.filter(obj => obj[propertyName] === propertyValue);
}

let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
];

let result = filterObjectsByProperty(objects, 'name', 'Иван');
console.log(result);