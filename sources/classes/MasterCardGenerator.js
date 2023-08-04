class MasterCardGenerator {
  constructor() {
    this.generate = () => {
      let masterCardDigits = [5];
      let masterCardDigSum = 5;

      for (let a = 0; a < 14; a++) {
        let r = Math.floor(10 * Math.random());

        if (a % 2 !== 0) {
          masterCardDigits.push(r);
          masterCardDigSum += r;
        } else {
          r *= 2;
          if (r > 9) {
            r -= 9;
          }
          masterCardDigits.push(r);
          masterCardDigSum += r;
        }
      }

      let t = (10 - (masterCardDigSum % 10)) % 10;

      masterCardDigits.push(t);

      return masterCardDigits.join("");
    };
  }
}

module.exports = MasterCardGenerator;
