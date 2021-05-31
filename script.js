let alphaNumbers = {
  а: 1,
  б: 2,
  в: 3,
  г: 4,
  д: 5,
  е: 6,
  ё: 7,
  ж: 8,
  з: 9,
  и: 1,
  й: 2,
  к: 3,
  л: 4,
  м: 5,
  н: 6,
  о: 7,
  п: 8,
  р: 9,
  с: 1,
  т: 2,
  у: 3,
  ф: 4,
  х: 5,
  ц: 6,
  ч: 7,
  ш: 8,
  щ: 9,
  ъ: 1,
  ы: 2,
  ь: 3,
  э: 4,
  ю: 5,
  я: 6,
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 1,
  k: 2,
  l: 3,
  m: 4,
  n: 5,
  o: 6,
  p: 7,
  q: 8,
  r: 9,
  s: 1,
  t: 2,
  u: 3,
  v: 4,
  w: 5,
  x: 6,
  y: 7,
  z: 8
}

new Vue({
  el: '#app',
  data: {
    results: {
      firstNameArray: [],
      secondNameArray: [],
      fathersNameArray: [],
      firstName2Array: [],
      secondName2Array: [],
      fathersName2Array: [],
      day: 0,
      month: 0,
      year: 0,
      ready: false,
      controlNumbers: [],
      controlNumbers2: [],
      karmicNumbers: [],
      karmicNumbers2: []
    },
    letters: [],
    controlNumbers: [11,22,33],
    karmicNumbers: [10,13,14,16,19],
    firstName: '',
    secondName: '',
    fathersName: '',
    date: "2020-11-09",
    otherName: false,
    watchDate: true,
    firstName2: '',
    secondName2: '',
    fathersName2: '',
    CHDR: 0,
    CHDR2: 0,
    CHJP: 0,
    CHV: 0,
    CHV2: 0,
    CHD: 0,
    CHD2: 0,
    CHL: 0,
    CHL2: 0,
    CHR: 0,
    CHR2: 0
  },
  mounted: function () {
    for (let letter in alphaNumbers) {
      this.letters.push(letter);
      this.letters.push(letter.toUpperCase());
    }
  },
  computed: {
    valid: function () {
      const first = this.firstName.trim();
      let valid = true;
      first.split('').forEach(letter => {
        if (!this.letters.includes(letter)) {
          valid = false;
        }
      });
      if (!valid) {
        return false;
      }
      const second = this.secondName.trim();
      second.split('').forEach(letter => {
        if (!this.letters.includes(letter)) {
          valid = false;
        }
      });
      if (!valid) {
        return false;
      }
      const father = this.fathersName.trim();
      father.split('').forEach(letter => {
        if (!this.letters.includes(letter)) {
          valid = false;
        }
      });
      if (!valid) {
        return false;
      }
      const date = this.date;
      const other = this.otherName;
      if (other) {
        const first2 = this.firstName2.trim();
        first2.split('').forEach(letter => {
          if (!this.letters.includes(letter)) {
            valid = false;
          }
        });
        if (!valid) {
          return false;
        }
        const second2 = this.secondName2.trim();
        second2.split('').forEach(letter => {
          if (!this.letters.includes(letter)) {
            valid = false;
          }
        });
        if (!valid) {
          return false;
        }
        const father2 = this.fathersName2.trim();
        father2.split('').forEach(letter => {
          if (!this.letters.includes(letter)) {
            valid = false;
          }
        });
        if (!valid) {
          return false;
        }
        return !!first && !!second && !!father && !!date && (!!first2 || !!second2 || !!father2);
      }

      return !!first && !!second && !!father && !!date;
    },
    controlNumbersString: function () {
      let string = "";
      this.results.controlNumbers.forEach((item, index) => {
        if (!index) {
          string = string + item;
        } else {
          string = string + ", " + item;
        }
      });
      if (this.results.controlNumbers2.length) {
        string = string + " ("
        this.results.controlNumbers2.forEach((item, index2) => {
          if (!index2) {
            string = string + item;
          } else {
            string = string + ", " + item;
          }
        });
        string = string + ")"
      }
      return string;
    },
    karmicNumbersString: function () {
      let string = "";
      this.results.karmicNumbers.forEach((item, index) => {
        if (!index) {
          string = string + item;
        } else {
          string = string + ", " + item;
        }
      });
      if (this.results.karmicNumbers2.length) {
        string = string + " ("
        this.results.karmicNumbers2.forEach((item, index2) => {
          if (!index2) {
            string = string + item;
          } else {
            string = string + ", " + item;
          }
        });
        string = string + ")"
      }
      return string;
    }
  },
  methods: {
    countNumbers: function () {
      if (!this.valid) {
        return;
      }
      let firstVowels,
        secondVowels,
        fatherVowels,
        firstConsonants,
        secondConsonants,
        fatherConsonants,
        first2Vowels,
        second2Vowels,
        father2Vowels,
        first2Consonants,
        second2Consonants,
        father2Consonants;
      if (this.firstName !== '') {
        console.log("Считаем основную фамилию");
        this.results.firstNameArray = this.stringToArray(this.firstName.trim());
        console.log(`Основа: ${this.results.firstNameArray}`);
        firstVowels = this.vowelsOrConsonants(this.firstName.trim().toLowerCase(), this.results.firstNameArray, true);
        console.log(`Гласные: ${firstVowels}`);
        firstConsonants = this.vowelsOrConsonants(this.firstName.trim().toLowerCase(), this.results.firstNameArray);
        console.log(`Согласные: ${firstConsonants}`);
      }
      if (this.secondName !== '') {
        console.log("Считаем основное имя");
        this.results.secondNameArray = this.stringToArray(this.secondName.trim());
        console.log(`Основа: ${this.results.secondNameArray}`);
        secondVowels = this.vowelsOrConsonants(this.secondName.trim().toLowerCase(), this.results.secondNameArray, true);
        console.log(`Гласные: ${secondVowels}`);
        secondConsonants = this.vowelsOrConsonants(this.secondName.trim().toLowerCase(), this.results.secondNameArray);
        console.log(`Согласные: ${secondConsonants}`);
      }
      if (this.fathersName !== '') {
        console.log("Считаем основное отчество");
        this.results.fathersNameArray = this.stringToArray(this.fathersName.trim());
        fatherVowels = this.vowelsOrConsonants(this.fathersName.trim().toLowerCase(), this.results.fathersNameArray, true);
        fatherConsonants = this.vowelsOrConsonants(this.fathersName.trim().toLowerCase(), this.results.fathersNameArray);
      }
      if (this.watchDate) {
        this.results.day = parseInt(this.date.split('-')[2]);
        this.results.month = parseInt(this.date.split('-')[1]);
        this.results.year = parseInt(this.date.split('-')[0]);
      }
      console.log("Считаем ЧЖП:");
      this.results.CHJP = this.splitAndAdd(this.splitAndAdd(this.results.day) + this.splitAndAdd(this.results.month) + this.splitAndAdd(this.results.year));
      console.log(`${this.results.day} + ${this.results.month} + ${this.results.year} = ... = ${this.results.CHJP}`);
      this.results.CHDR = this.results.day;
      this.results.CHDR2 = this.splitAndAdd(this.results.day);
      console.log(`Считаем ЧДР: ${this.results.CHDR} (${this.results.day} = ${this.results.CHDR2})`);
      console.log("Считаем ЧВ (основное имя):");
      this.results.CHV = this.splitAndAdd(
        this.splitAndAdd(this.sunOfIntString(this.results.firstNameArray))
        +
        this.splitAndAdd(this.sunOfIntString(this.results.secondNameArray))
        +
        this.splitAndAdd(this.sunOfIntString(this.results.fathersNameArray)));
      console.log(`${this.results.firstNameArray} + ${this.results.secondNameArray} + ${this.results.fathersNameArray} = ${this.sunOfIntString(this.results.firstNameArray)} + ${this.sunOfIntString(this.results.secondNameArray)} + ${this.sunOfIntString(this.results.fathersNameArray)} = ${this.results.CHV}`);
      console.log("Считаем ЧД (основное имя):");
      this.results.CHD = this.splitAndAdd(
        this.splitAndAdd(this.sunOfIntString(firstVowels))
        +
        this.splitAndAdd(this.sunOfIntString(secondVowels))
        +
        this.splitAndAdd(this.sunOfIntString(fatherVowels)));
      console.log(`${firstVowels} + ${secondVowels} + ${fatherVowels} = ${this.sunOfIntString(firstVowels)} + ${this.sunOfIntString(secondVowels)} + ${this.sunOfIntString(fatherVowels)} = ${this.results.CHD}`);
      console.log("Считаем ЧЛ (основное имя):");
      this.results.CHL = this.splitAndAdd(
        this.splitAndAdd(this.sunOfIntString(firstConsonants))
        +
        this.splitAndAdd(this.sunOfIntString(secondConsonants))
        +
        this.splitAndAdd(this.sunOfIntString(fatherConsonants)));
      console.log(`${firstConsonants} + ${secondConsonants} + ${fatherConsonants} = ${this.sunOfIntString(firstConsonants)} + ${this.sunOfIntString(secondConsonants)} + ${this.sunOfIntString(fatherConsonants)} = ${this.results.CHL}`);
      console.log("Считаем ЧР (основное имя):");
      this.results.CHR = this.splitAndAdd(this.results.CHJP + this.results.CHV);
      console.log(`${this.results.CHJP} + ${this.results.CHV} = ... = ${this.results.CHR}`);
      if (this.otherName) {
        this.firstName2 = this.firstName2 !== "" ? this.firstName2 : this.firstName;
        this.secondName2 = this.secondName2 !== "" ? this.secondName2 : this.secondName;
        this.fathersName2 = this.fathersName2 !== "" ? this.fathersName2 : this.fathersName;
        this.results.firstName2Array = this.stringToArray(this.firstName2.trim());
        this.results.secondName2Array = this.stringToArray(this.secondName2.trim());
        this.results.fathersName2Array = this.stringToArray(this.fathersName2.trim());
        first2Vowels = this.vowelsOrConsonants(this.firstName2.trim().toLowerCase(), this.results.firstName2Array, true);
        first2Consonants = this.vowelsOrConsonants(this.firstName2.trim().toLowerCase(), this.results.firstName2Array);
        second2Vowels = this.vowelsOrConsonants(this.secondName2.trim().toLowerCase(), this.results.secondName2Array, true);
        second2Consonants = this.vowelsOrConsonants(this.secondName2.trim().toLowerCase(), this.results.secondName2Array);
        father2Vowels = this.vowelsOrConsonants(this.fathersName2.trim().toLowerCase(), this.results.fathersName2Array, true);
        father2Consonants = this.vowelsOrConsonants(this.fathersName2.trim().toLowerCase(), this.results.fathersName2Array);
        console.log("Считаем ЧВ (второе имя):");
        this.results.CHV2 = this.splitAndAdd(
          this.splitAndAdd(this.sunOfIntString(this.results.firstName2Array), true)
          +
          this.splitAndAdd(this.sunOfIntString(this.results.secondName2Array), true)
          +
          this.splitAndAdd(this.sunOfIntString(this.results.fathersName2Array), true), true);
        console.log(`${this.results.firstName2Array} + ${this.results.secondName2Array} + ${this.results.fathersName2Array} = ${this.sunOfIntString(this.results.firstName2Array)} + ${this.sunOfIntString(this.results.secondName2Array)} + ${this.sunOfIntString(this.results.fathersName2Array)} = ${this.results.CHV}`);
        this.this.results.CHD2 = this.splitAndAdd(
          this.splitAndAdd(this.sunOfIntString(first2Vowels), true)
          +
          this.splitAndAdd(this.sunOfIntString(second2Vowels), true)
          +
          this.splitAndAdd(this.sunOfIntString(father2Vowels), true),true);
        this.results.CHL2 = this.splitAndAdd(
          this.splitAndAdd(this.sunOfIntString(first2Consonants), true)
          +
          this.splitAndAdd(this.sunOfIntString(second2Consonants), true)
          +
          this.splitAndAdd(this.sunOfIntString(father2Consonants), true), true);
        this.results.CHR2 = this.splitAndAdd(this.results.CHJP + this.results.CHV2);
      }
      this.results.ready = true;

    },
    vowelsOrConsonants(string = "", array = [], vowels = false) {
      const vowelsList = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я", "e", "y", "i", "o", "a"];
      let resultArray = [];
      string.toLowerCase().split('').forEach((item, index) => {
        if (vowels) {
          if (vowelsList.includes(item)) {
            resultArray.push(array[index]);
          }
        } else {
          if (!vowelsList.includes(item)) {
            resultArray.push(array[index]);
          }
        }
      });
      return resultArray;
    },
    sunOfIntString: function (numberString = []) {
      let sum = 0;
      numberString.forEach(item => {
        sum += item;
      })
      return sum;
    },
    splitAndAdd: function (inNumber = 0, secondary = false) {
      console.log(`Разбор числа ${inNumber}`);
      let newNumber;
      if (this.controlNumbers.includes(inNumber)) {
        if (secondary) {
          console.log(`${inNumber} добавлен в список Управляющих чисел (второе имя)`);
          this.results.controlNumbers2.push(inNumber);
        } else {
          console.log(`${inNumber} добавлен в список Управляющих чисел (основное имя)`);
          this.results.controlNumbers.push(inNumber);
        }
        return inNumber;
      }
      if (this.karmicNumbers.includes(inNumber)) {
        if (secondary) {
          console.log(`${inNumber} добавлен в список Кармических чисел (второе имя)`);
          this.results.karmicNumbers2.push(inNumber);
        } else {
          console.log(`${inNumber} добавлен в список Кармических чисел (основное имя)`);
          this.results.karmicNumbers.push(inNumber);
        }
      }
      if (inNumber < 10) {
        return inNumber;
      } else if (inNumber > 999) {
        newNumber = Math.floor(inNumber / 1000) + Math.floor((inNumber / 100) % 10) + Math.floor((inNumber / 10) % 10) + Math.floor(inNumber % 10);
      } else if (inNumber > 99) {
        newNumber = Math.floor((inNumber / 100) % 10) + Math.floor((inNumber / 10) % 10) + Math.floor(inNumber % 10);
      } else {
        newNumber = Math.floor((inNumber / 10) % 10) + Math.floor(inNumber % 10);
      }
      return this.splitAndAdd(newNumber, secondary);
    },
    stringToArray: function (stringValue = "") {
      let array = [];
      for (let i = 0; i < stringValue.length; i++) {
        array.push(this.getNumberFromChar(stringValue[i]));
      }
      return array;
    },
    getNumberFromChar: function (char = "") {
      return alphaNumbers[char.toLowerCase()];
    },
    reset: function () {
      this.results = {
        firstNameArray: [],
          secondNameArray: [],
          fathersNameArray: [],
          firstName2Array: [],
          secondName2Array: [],
          fathersName2Array: [],
          day: 0,
          month: 0,
          year: 0,
          ready: false,
          controlNumbers: [],
          controlNumbers2: [],
          karmicNumbers: [],
          karmicNumbers2: []
      }
      this.firstName = '';
      this.secondName = '';
      this.fathersName = '';
      this.date = "1993-09-15";
      this.firstName2 = '';
      this.secondName2 = '';
      this.fathersName2 = '';
      this.otherName = false;
      this.watchDate = true;
      this.letters = [];
      this.CHDR = 0;
      this.CHDR2 = 0;
      this.CHJP = 0;
      this.CHV = 0;
      this.CHV2 = 0;
      this.CHD = 0;
      this.CHD2 = 0;
      this.CHL = 0;
      this.CHL2 = 0;
      this.CHR = 0;
      this.CHR2 = 0;
    }
  }
});
