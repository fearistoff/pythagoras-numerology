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
    showInputBlock: true,
    firstName: '',
    secondName: '',
    fathersName: '',
    date: "2020-11-09",
    otherName: false,
    watchDate: true,
    firstName2: '',
    secondName2: '',
    fathersName2: '',
    firstNameArray: [],
    secondNameArray: [],
    fathersNameArray: [],
    dateArray: []
  },
  methods: {
    countNumbers: function () {
      if (this.firstName != '') {
        this.firstNameArray = this.stringToArray(this.firstName);
      }
      if (this.secondName != '') {
        this.secondNameArray = this.stringToArray(this.secondName);
      }
      if (this.fathersName != '') {
        this.fathersNameArray = this.stringToArray(this.fathersName);
      }
      if (this.watchDate) {
        this.dateArray = this.date.split('-');
      }
      console.log(this.firstNameArray, this.secondNameArray, this.fathersNameArray);
    },
    stringToArray: function (stringValue) {
      let array = [];
      for (let i = 0; i < stringValue.length; i++) {
        array.push(this.getNumberFromChar(stringValue[i]));
      }
      return array;
    },
    getNumberFromChar: function (char) {
      return alphaNumbers[char.toLowerCase()];
    },
    sumAndCheckNumbers: function (inputNumber) {
      if ([1,2,3,4].includes(inputNumber)) {

      }
    }
  }
});