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
        return first && second && father && date && (first2 || second2 || father2);
      }

      return first && second && father && date;
    }
  },
  mounted:function () {
    for (letter in alphaNumbers) {
      this.letters.push(letter);
      this.letters.push(letter.toUpperCase());
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
        this.results.firstNameArray = this.stringToArray(this.firstName.trim());
        firstVowels = this.vowelsOrConsonants(this.firstName, this.results.firstNameArray, true);
        firstConsonants = this.vowelsOrConsonants(this.firstName, this.results.firstNameArray);
      }
      if (this.secondName !== '') {
        this.results.secondNameArray = this.stringToArray(this.secondName.trim());
        secondVowels = this.vowelsOrConsonants(this.secondName, this.results.secondNameArray, true);
        secondConsonants = this.vowelsOrConsonants(this.secondName, this.results.secondNameArray);
      }
      if (this.fathersName !== '') {
        this.results.fathersNameArray = this.stringToArray(this.fathersName.trim());
        fatherVowels = this.vowelsOrConsonants(this.fathersName, this.results.fathersNameArray, true);
        fatherConsonants = this.vowelsOrConsonants(this.fathersName, this.results.fathersNameArray);
      }
      if (this.watchDate) {
        this.results.day = parseInt(this.date.split('-')[2]);
        this.results.month = parseInt(this.date.split('-')[1]);
        this.results.year = parseInt(this.date.split('-')[0]);
      }
      this.results.CHJP = this.splitAndAdd(this.splitAndAdd(this.results.day) + this.splitAndAdd(this.results.month) + this.splitAndAdd(this.results.year));
      if (this.otherName) {
        this.firstName2 = this.firstName2 !== "" ? this.firstName2 : this.firstName;
        this.secondName2 = this.secondName2 !== "" ? this.secondName2 : this.secondName;
        this.fathersName2 = this.fathersName2 !== "" ? this.fathersName2 : this.fathersName;
        this.results.firstName2Array = this.stringToArray(this.firstName2.trim());
        this.results.secondName2Array = this.stringToArray(this.secondName2.trim());
        this.results.fathersName2Array = this.stringToArray(this.fathersName2.trim());
        first2Vowels = this.vowelsOrConsonants(this.firstName2, this.results.firstName2Array, true);
        first2Consonants = this.vowelsOrConsonants(this.firstName2, this.results.firstName2Array);
        second2Vowels = this.vowelsOrConsonants(this.secondName2, this.results.secondName2Array, true);
        second2Consonants = this.vowelsOrConsonants(this.secondName2, this.results.secondName2Array);
        father2Vowels = this.vowelsOrConsonants(this.fathersName2, this.results.fathersName2Array, true);
        father2Consonants = this.vowelsOrConsonants(this.fathersName2, this.results.fathersName2Array);
        this.results.CHV2 = this.splitAndAdd(
          this.splitAndAdd(this.sunOfIntString(this.results.firstName2Array), true)
          +
          this.splitAndAdd(this.sunOfIntString(this.results.secondName2Array), true)
          +
          this.splitAndAdd(this.sunOfIntString(this.results.fathersName2Array), true), true);
        this.results.CHD2 = this.splitAndAdd(
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
      this.results.CHDR = this.results.day;
      this.results.CHDR2 = this.splitAndAdd(this.results.day);
      this.results.CHV = this.splitAndAdd(
        this.splitAndAdd(this.sunOfIntString(this.results.firstNameArray))
        +
        this.splitAndAdd(this.sunOfIntString(this.results.secondNameArray))
        +
        this.splitAndAdd(this.sunOfIntString(this.results.fathersNameArray)));
      this.results.CHD = this.splitAndAdd(
        this.splitAndAdd(this.sunOfIntString(firstVowels))
        +
        this.splitAndAdd(this.sunOfIntString(secondVowels))
        +
        this.splitAndAdd(this.sunOfIntString(fatherVowels)));
      this.results.CHL = this.splitAndAdd(
        this.splitAndAdd(this.sunOfIntString(firstConsonants))
        +
        this.splitAndAdd(this.sunOfIntString(secondConsonants))
        +
        this.splitAndAdd(this.sunOfIntString(fatherConsonants)));
      this.results.CHR = this.splitAndAdd(this.results.CHJP + this.results.CHV);
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
      let newNumber;
      if (this.controlNumbers.includes(inNumber)) {
        if (secondary) {
          this.results.controlNumbers2.push(inNumber);
        } else {
          this.results.controlNumbers.push(inNumber);
        }
        return inNumber;
      }
      if (this.karmicNumbers.includes(inNumber)) {
        if (secondary) {
          this.results.karmicNumbers2.push(inNumber);
        } else {
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
    }
  }
});
