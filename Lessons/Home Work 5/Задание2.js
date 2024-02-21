function createDropdownSelect(data, selectedValue) {
    const selectElement = document.createElement("select");

    // Проверяем тип данных и формируем список option соответственно
    if (Array.isArray(data)) {
        // Если входные данные - массив примитивных значений
        data.forEach((value, index) => {
            const optionElement = document.createElement("option");
            optionElement.value = value;
            optionElement.textContent = value;
            if ((index === 0 && selectedValue === undefined) || value === selectedValue) {
                optionElement.selected = true;
            }
            selectElement.appendChild(optionElement);
        });
    } else if (typeof data === 'object' && data !== null) {
        // Если входные данные - объект с произвольными свойствами
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const optionElement = document.createElement("option");
                optionElement.value = key;
                optionElement.textContent = data[key];
                if (key === selectedValue) {
                    optionElement.selected = true;
                }
                selectElement.appendChild(optionElement);
            }
        }
    }

    return selectElement;
}