const roadMines = [true, false, false, false, false, false, false, false, true];
let tankPosition = 0;
let tankDamage = 0;

while (tankPosition < roadMines.length && tankDamage < 2) {
  console.log(`Танк переместился на ${tankPosition + 1}`);

  if (roadMines[tankPosition]) {
    if (tankDamage === 0) {
      console.log('Танк повреждён');
    } else {
      console.log('Танк уничтожен');
    }
    tankDamage++;
  }

  tankPosition++;
}

if (tankDamage === 0) {
  console.log('Танк прошёл без повреждений');
}