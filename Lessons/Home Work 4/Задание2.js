function cart(basketAmount, countGoods, promo = null){
    let totalAmount = basketAmount;

    if (promo === 'ДАРИМ300' && basketAmount < 300) {
        totalAmount = 0;
        console.log('ДАРИМ300' + totalAmount);
    } else if (promo === 'ДАРИМ300') {
        totalAmount -= 300;
        console.log('ДАРИМ300 ' + totalAmount);
    }

    if (countGoods >= 10) {
        const countFiveProcent = totalAmount/100*5;
        totalAmount -= countFiveProcent;
        console.log('больше 10 товаров ' + totalAmount)
    }

    if (basketAmount > 50000) {
        const countTwentyProcent = totalAmount/100*20;
        const countDifference = totalAmount - 50000;
        totalAmount = countDifference - countTwentyProcent;
        console.log('больше 50 000р ' + totalAmount);
    }

    if (promo === 'СКИДКА15' && basketAmount >= 20000) {
        const countFiftenProcent = totalAmount/100*15;
        totalAmount -= countFiftenProcent;
        console.log('СКИДКА15 ' + totalAmount);
    }
    console.log('Стоимость равна ' + totalAmount);
};

cart(49000, 12, 'СКИДКА15');