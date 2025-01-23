const isMomHappy = true;

//Promise
const willGetNewPhone = new Promise((resolve, reject) => {
  if (isMomHappy) {
    const phone = {
      brand: 'samsung',
      color: 'black',
    };
    resolve(phone);
  } else {
    const reason = new Error('Mom is not happy');
    reject(reason);
  }
});

console.log(willGetNewPhone);
