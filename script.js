let alphaNumbers = [
  { name: "а", number: 1 },
  { name: "б", number: 2 },
  { name: "в", number: 3 },
  { name: "г", number: 4 },
  { name: "д", number: 5 },
  { name: "е", number: 6 },
  { name: "ё", number: 7 },
  { name: "ж", number: 8 },
  { name: "з", number: 9 },
  { name: "и", number: 1 },
  { name: "й", number: 2 },
  { name: "к", number: 3 },
  { name: "л", number: 4 },
  { name: "м", number: 5 },
  { name: "н", number: 6 },
  { name: "о", number: 7 },
  { name: "п", number: 8 },
  { name: "р", number: 9 },
  { name: "с", number: 1 },
  { name: "т", number: 2 },
  { name: "у", number: 3 },
  { name: "ф", number: 4 },
  { name: "х", number: 5 },
  { name: "ц", number: 6 },
  { name: "ч", number: 7 },
  { name: "ш", number: 8 },
  { name: "щ", number: 9 },
  { name: "ъ", number: 1 },
  { name: "ы", number: 2 },
  { name: "ь", number: 3 },
  { name: "э", number: 4 },
  { name: "ю", number: 5 },
  { name: "я", number: 6 },
  { name: "a", number: 1 },
  { name: "b", number: 2 },
  { name: "c", number: 3 },
  { name: "d", number: 4 },
  { name: "e", number: 5 },
  { name: "f", number: 6 },
  { name: "g", number: 7 },
  { name: "h", number: 8 },
  { name: "i", number: 9 },
  { name: "j", number: 1 },
  { name: "k", number: 2 },
  { name: "l", number: 3 },
  { name: "m", number: 4 },
  { name: "n", number: 5 },
  { name: "o", number: 6 },
  { name: "p", number: 7 },
  { name: "q", number: 8 },
  { name: "r", number: 9 },
  { name: "s", number: 1 },
  { name: "t", number: 2 },
  { name: "u", number: 3 },
  { name: "v", number: 4 },
  { name: "w", number: 5 },
  { name: "x", number: 6 },
  { name: "y", number: 7 },
  { name: "z", number: 8 }
];

new Vue({
  el: "#app",
  data: {
    results: {
      nameArray: [],
      secondNameArray: [],
      patronymicArray: [],
      name2Array: [],
      secondName2Array: [],
      patronymic2Array: [],
      day: 0,
      month: 0,
      year: 0,
      ready: false,
      controlNumbers: [],
      controlNumbers2: [],
      karmicNumbers: [],
      karmicNumbers2: [],
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
    letters: [],
    controlNumbers: [11, 22, 33],
    karmicNumbers: [10, 13, 14, 16, 19],
    name: "Михаил",
    secondName: "Сорокин",
    patronymic: "Валерьевич",
    date: "1987-12-11",
    otherName: false,
    watchDate: true,
    name2: "",
    secondName2: "",
    patronymic2: "",
    isLogMode: false,
    headerClickCounter: 0,
    headerClickTime: 0,
    logString: "",
    savedList: [],
    isSavedListShow: false,
    psycoMatrix: {
      character: "",
      energy: "",
      interest: "",
      health: "",
      sex: "",
      work: "",
      luck: "",
      duty: "",
      intelligence: ""
    }
  },
  computed: {
    valid: function() {
      const first = this.name.trim();
      let valid = true;
      first.split("").forEach(letter => {
        if (!this.letters.includes(letter)) {
          valid = false;
        }
      });
      if (!valid) {
        return false;
      }
      const second = this.secondName.trim();
      second.split("").forEach(letter => {
        if (!this.letters.includes(letter)) {
          valid = false;
        }
      });
      if (!valid) {
        return false;
      }
      const father = this.patronymic.trim();
      father.split("").forEach(letter => {
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
        const first2 = this.name2.trim();
        first2.split("").forEach(letter => {
          if (!this.letters.includes(letter)) {
            valid = false;
          }
        });
        if (!valid) {
          return false;
        }
        const second2 = this.secondName2.trim();
        second2.split("").forEach(letter => {
          if (!this.letters.includes(letter)) {
            valid = false;
          }
        });
        if (!valid) {
          return false;
        }
        const father2 = this.patronymic2.trim();
        father2.split("").forEach(letter => {
          if (!this.letters.includes(letter)) {
            valid = false;
          }
        });
        if (!valid) {
          return false;
        }
        return (
          !!first &&
          !!second &&
          !!father &&
          !!date &&
          (!!first2 || !!second2 || !!father2)
        );
      }

      return !!first && !!second && !!father && !!date;
    },
    controlNumbersString: function() {
      let string = "";
      this.results.controlNumbers.forEach((item, index) => {
        if (!index) {
          string = string + item;
        } else {
          string = string + ", " + item;
        }
      });
      if (this.results.controlNumbers2.length) {
        string = string + " (";
        this.results.controlNumbers2.forEach((item, index2) => {
          if (!index2) {
            string = string + item;
          } else {
            string = string + ", " + item;
          }
        });
        string = string + ")";
      }
      return string;
    },
    karmicNumbersString: function() {
      let string = "";
      this.results.karmicNumbers.forEach((item, index) => {
        if (!index) {
          string = string + item;
        } else {
          string = string + ", " + item;
        }
      });
      if (this.results.karmicNumbers2.length) {
        string = string + " (";
        this.results.karmicNumbers2.forEach((item, index2) => {
          if (!index2) {
            string = string + item;
          } else {
            string = string + ", " + item;
          }
        });
        string = string + ")";
      }
      return string;
    },
    isSaved: function () {
      if (this.savedList && this.secondName && this.name && this.patronymic) {
        return !!this.savedList.find(item => item.header === `${this.secondName} ${this.name} ${this.patronymic}`);
      }
    }
  },
  mounted: function() {
    this.letters = [
      ...alphaNumbers.map(item => item.name),
      ...alphaNumbers.map(item => item.name.toUpperCase())
    ];
    this.savedList = JSON.parse(localStorage.getItem("savedPeoples")) || [];
  },
  methods: {
    countNumbers: function() {
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
        this.results.nameArray = this.stringToArray(this.name.trim());
        firstVowels = this.vowelsOrConsonants(
          this.name.trim().toLowerCase(),
          this.results.nameArray,
          true
        );
        firstConsonants = this.vowelsOrConsonants(
          this.name.trim().toLowerCase(),
          this.results.nameArray
        );
        this.results.secondNameArray = this.stringToArray(
          this.secondName.trim()
        );
        secondVowels = this.vowelsOrConsonants(
          this.secondName.trim().toLowerCase(),
          this.results.secondNameArray,
          true
        );
        secondConsonants = this.vowelsOrConsonants(
          this.secondName.trim().toLowerCase(),
          this.results.secondNameArray
        );
        this.results.patronymicArray = this.stringToArray(
          this.patronymic.trim()
        );
        fatherVowels = this.vowelsOrConsonants(
          this.patronymic.trim().toLowerCase(),
          this.results.patronymicArray,
          true
        );
        fatherConsonants = this.vowelsOrConsonants(
          this.patronymic.trim().toLowerCase(),
          this.results.patronymicArray
        );
      if (this.watchDate) {
        this.results.day = parseInt(this.date.split("-")[2]);
        this.results.month = parseInt(this.date.split("-")[1]);
        this.results.year = parseInt(this.date.split("-")[0]);
        this.results.CHJP = this.splitAndAdd(
          this.splitAndAdd(this.results.day) +
          this.splitAndAdd(this.results.month) +
          this.splitAndAdd(this.results.year)
        );
        this.results.CHDR = this.results.day;
        this.results.CHDR2 = this.splitAndAdd(this.results.day);
      }
      this.results.CHV = this.splitAndAdd(
        this.splitAndAdd(this.sumOfIntString(this.results.nameArray)) +
        this.splitAndAdd(this.sumOfIntString(this.results.secondNameArray)) +
        this.splitAndAdd(this.sumOfIntString(this.results.patronymicArray))
      );
      this.results.CHD = this.splitAndAdd(
        this.splitAndAdd(this.sumOfIntString(firstVowels)) +
        this.splitAndAdd(this.sumOfIntString(secondVowels)) +
        this.splitAndAdd(this.sumOfIntString(fatherVowels))
      );
      this.results.CHL = this.splitAndAdd(
        this.splitAndAdd(this.sumOfIntString(firstConsonants)) +
        this.splitAndAdd(this.sumOfIntString(secondConsonants)) +
        this.splitAndAdd(this.sumOfIntString(fatherConsonants))
      );
      this.results.CHR = this.splitAndAdd(this.results.CHJP + this.results.CHV);
      if (this.otherName) {
        this.name2 = this.name2 !== "" ? this.name2 : this.name;
        this.secondName2 =
          this.secondName2 !== "" ? this.secondName2 : this.secondName;
        this.patronymic2 =
          this.patronymic2 !== "" ? this.patronymic2 : this.patronymic;
        this.results.name2Array = this.stringToArray(this.name2.trim());
        this.results.secondName2Array = this.stringToArray(
          this.secondName2.trim()
        );
        this.results.patronymic2Array = this.stringToArray(
          this.patronymic2.trim()
        );
        first2Vowels = this.vowelsOrConsonants(
          this.name2.trim().toLowerCase(),
          this.results.name2Array,
          true
        );
        first2Consonants = this.vowelsOrConsonants(
          this.name2.trim().toLowerCase(),
          this.results.name2Array
        );
        second2Vowels = this.vowelsOrConsonants(
          this.secondName2.trim().toLowerCase(),
          this.results.secondName2Array,
          true
        );
        second2Consonants = this.vowelsOrConsonants(
          this.secondName2.trim().toLowerCase(),
          this.results.secondName2Array
        );
        father2Vowels = this.vowelsOrConsonants(
          this.patronymic2.trim().toLowerCase(),
          this.results.patronymic2Array,
          true
        );
        father2Consonants = this.vowelsOrConsonants(
          this.patronymic2.trim().toLowerCase(),
          this.results.patronymic2Array
        );
        this.results.CHV2 = this.splitAndAdd(
          this.splitAndAdd(this.sumOfIntString(this.results.name2Array), true) +
          this.splitAndAdd(
            this.sumOfIntString(this.results.secondName2Array),
            true
          ) +
          this.splitAndAdd(
            this.sumOfIntString(this.results.patronymic2Array),
            true
          ),
          true
        );
        this.results.CHD2 = this.splitAndAdd(
          this.splitAndAdd(this.sumOfIntString(first2Vowels), true) +
          this.splitAndAdd(this.sumOfIntString(second2Vowels), true) +
          this.splitAndAdd(this.sumOfIntString(father2Vowels), true),
          true
        );
        this.results.CHL2 = this.splitAndAdd(
          this.splitAndAdd(this.sumOfIntString(first2Consonants), true) +
          this.splitAndAdd(this.sumOfIntString(second2Consonants), true) +
          this.splitAndAdd(this.sumOfIntString(father2Consonants), true),
          true
        );
        this.results.CHR2 = this.splitAndAdd(
          this.results.CHJP + this.results.CHV2
        );
      }
      let first = 0;
      console.log(this.date);
      const numberArray = this.getDateNumbers(this.date);
      console.log(numberArray);
      numberArray.forEach(item => {
        first += item;
      });
      console.log(first);
      const second = this.sumAndCheck(first);
      console.log(second);
      const third = Math.abs(first - numberArray[0]*2);
      console.log(third);
      const fourth = this.sumAndCheck(third);
      console.log(fourth);
      const fullNumberArray = [...numberArray.map(item => `${item}`), ...first.toString().split(''),...second.toString().split(''),...third.toString().split(''),...fourth.toString().split(''), ].join('');
      console.log(fullNumberArray);

      fullNumberArray.split('').forEach(item => {
        if (item === "1") {
          this.psycoMatrix.character = this.addItem(this.psycoMatrix.character, item);
        } else if (item === "2") {
          this.psycoMatrix.energy = this.addItem(this.psycoMatrix.energy, item);
        } else if (item === "3") {
          this.psycoMatrix.interest = this.addItem(this.psycoMatrix.interest, item);
        } else if (item === "4") {
          this.psycoMatrix.health = this.addItem(this.psycoMatrix.health, item);
        } else if (item === "5") {
          this.psycoMatrix.sex = this.addItem(this.psycoMatrix.sex, item);
        } else if (item === "6") {
          this.psycoMatrix.work = this.addItem(this.psycoMatrix.work, item);
        } else if (item === "7") {
          this.psycoMatrix.luck = this.addItem(this.psycoMatrix.luck, item);
        } else if (item === "8") {
          this.psycoMatrix.duty = this.addItem(this.psycoMatrix.duty, item);
        } else if (item === "9") {
          this.psycoMatrix.intelligence = this.addItem(this.psycoMatrix.intelligence, item);
        }
      });
      
      this.results.ready = true;
    },
    addItem(mainString = "", cymbol = "") {
        return `${mainString}${cymbol}`;
    },
    getDateNumbers(dateString = "") {
      return dateString.split('-').map(item => {
        if (item[0] === "0") {
          return item[1];
        }
        return item;
      }).reverse().join('').split('').map(item => parseInt(item));
    },
    sumAndCheck(number) {
      if (number <= 12) {
        return number;
      } else if (number > 999) {
        newNumber =
          Math.floor(number / 1000) +
          Math.floor((number / 100) % 10) +
          Math.floor((number / 10) % 10) +
          Math.floor(number % 10);
      } else if (number > 99) {
        newNumber =
          Math.floor((number / 100) % 10) +
          Math.floor((number / 10) % 10) +
          Math.floor(number % 10);
      } else {
        newNumber =
          Math.floor((number / 10) % 10) + Math.floor(number % 10);
      }
      return this.sumAndCheck(newNumber);
    },
    vowelsOrConsonants(string = "", array = [], vowels = false) {
      const vowelsList = [
        "а",
        "е",
        "ё",
        "и",
        "о",
        "у",
        "ы",
        "э",
        "ю",
        "я",
        "e",
        "y",
        "i",
        "o",
        "a"
      ];
      let resultArray = [];
      string
        .toLowerCase()
        .split("")
        .forEach((item, index) => {
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
    sumOfIntString: function(numberString = []) {
      let sum = 0;
      numberString.forEach(item => {
        sum += item;
      });
      return sum;
    },
    splitAndAdd: function(inNumber = 0, secondary = false) {
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
        newNumber =
          Math.floor(inNumber / 1000) +
          Math.floor((inNumber / 100) % 10) +
          Math.floor((inNumber / 10) % 10) +
          Math.floor(inNumber % 10);
      } else if (inNumber > 99) {
        newNumber =
          Math.floor((inNumber / 100) % 10) +
          Math.floor((inNumber / 10) % 10) +
          Math.floor(inNumber % 10);
      } else {
        newNumber =
          Math.floor((inNumber / 10) % 10) + Math.floor(inNumber % 10);
      }
      return this.splitAndAdd(newNumber, secondary);
    },
    stringToArray: function(stringValue = "") {
      let array = [];
      for (let i = 0; i < stringValue.length; i++) {
        array.push(this.getNumberFromChar(stringValue[i]));
      }
      return array;
    },
    getNumberFromChar: function(char = "") {
      return alphaNumbers.find(item => item.name === char.toLowerCase()).number;
    },
    reset: function() {
      this.results = {
        nameArray: [],
          secondNameArray: [],
          patronymicArray: [],
          name2Array: [],
          secondName2Array: [],
          patronymic2Array: [],
          day: 0,
          month: 0,
          year: 0,
          ready: false,
          controlNumbers: [],
          controlNumbers2: [],
          karmicNumbers: [],
          karmicNumbers2: [],
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
      };
      this.name = "";
        this.secondName = "";
        this.patronymic = "";
        this.date = "2020-11-09";
        this.otherName = false;
        this.watchDate = true;
        this.name2 = "";
        this.secondName2 = "";
        this.patronymic2 = "";
    },
    clickHeader: function() {
      const now = new Date().getTime();
      if (now - this.headerClickTime > 500) {
        this.headerClickCounter = 0;
        this.headerClickTime = now;
        return;
      }
      this.headerClickTime = now;
      this.headerClickCounter++;
      if (this.headerClickCounter === 2) {
        this.isLogMode = !this.isLogMode;
        this.headerClickCounter = 0;
        this.headerClickTime = now;
      }
    },
    saveLocally: function () {
      if (!this.isSaved) {
        const value = {
          header: `${this.secondName} ${this.name} ${this.patronymic}`,
          name: this.name,
          secondName: this.secondName,
          patronymic: this.patronymic
        }
        if (this.otherName) {
          value.name2 = this.name2;
          value.secondName2 = this.secondName2;
          value.patronymic2 = this.patronymic2;
        }
        if (this.watchDate) {
          value.date = this.date;
        }
        const list = JSON.parse(localStorage.getItem("savedPeoples")) || [];
        localStorage.setItem("savedPeoples", JSON.stringify([...list, value]));
        this.savedList = JSON.parse(localStorage.getItem("savedPeoples")) || [];
      }
    },
    loadSavedItem: function (item) {
      this.name = item.name;
      this.secondName = item.secondName;
      this.patronymic = item.patronymic;
      if (item.name2) {
        this.name2 = item.name2;
        this.secondName2 = item.secondName2;
        this.patronymic2 = item.patronymic2;
        this.otherName = true;
      }
      if (item.date) {
        this.date = item.date;
        this.watchDate = true;
      }
      this.countNumbers();
      this.isSavedListShow = false;

    }
  }
});
