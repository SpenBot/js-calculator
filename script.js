

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

let calculator = {

  currentValue: "0",
  value1: null,
  value2: null,
  operation: null,

  display: document.getElementById("numDisplay"),

  button1: document.getElementById('one'),
  button2: document.getElementById('two'),
  button3: document.getElementById('three'),
  button4: document.getElementById('four'),
  button5: document.getElementById('five'),
  button6: document.getElementById('six'),
  button7: document.getElementById('seven'),
  button8: document.getElementById('eight'),
  button9: document.getElementById('nine'),
  button0: document.getElementById('zero'),

  buttonClear: document.getElementById('allClear'),
  buttonEquals: document.getElementById('equals'),

  buttonMult: document.getElementById('multiply'),
  buttonDiv: document.getElementById('divide'),
  buttonAdd: document.getElementById('add'),
  buttonSub: document.getElementById('subtract'),



//////////// Add Event Listeners to Buttons ////////////

  addNumberEvents: function () {
    this.button1.addEventListener('click', this.addNumToVal )
    this.button2.addEventListener('click', this.addNumToVal )
    this.button3.addEventListener('click', this.addNumToVal )
    this.button4.addEventListener('click', this.addNumToVal )
    this.button5.addEventListener('click', this.addNumToVal )
    this.button6.addEventListener('click', this.addNumToVal )
    this.button7.addEventListener('click', this.addNumToVal )
    this.button8.addEventListener('click', this.addNumToVal )
    this.button9.addEventListener('click', this.addNumToVal )
    this.button0.addEventListener('click', this.addNumToVal )
  },

  addClearEvent: function () {
    this.buttonClear.addEventListener('click', this.clearVal.bind(calculator))
  },

  addOperationsEvents: function () {
    this.buttonMult.addEventListener('click', this.inputOperation )
    this.buttonDiv.addEventListener('click', this.inputOperation )
    this.buttonAdd.addEventListener('click', this.inputOperation )
    this.buttonSub.addEventListener('click', this.inputOperation )
  },

  addEqualsEvent: function () {
    this.buttonEquals.addEventListener('click', this.inputEquals)
  },

  addAllClickEvents: function () {
    this.addNumberEvents()
    this.addClearEvent()
    this.addOperationsEvents()
    this.addEqualsEvent()
  },






//////////// Callback Functions for Event Listeners ////////////

  addNumToVal: function () {
    if (calculator.currentValue == "0") {
      calculator.currentValue = this.innerHTML
    } else {
      calculator.currentValue = calculator.currentValue + this.innerHTML
    }

    calculator.displayCurrentValue()
  },

  inputOperation: function () {
    calculator.operation = this.innerHTML
    calculator.value1 = calculator.currentValue
    calculator.clearVal()
  },

  inputEquals: function () {
    calculator.value2 = calculator.currentValue

    if (calculator.operation == "+") {
      calculator.currentValue = ( Number(calculator.value1) + Number(calculator.value2) )
      calculator.displayCurrentValue()
    } else if (calculator.operation == "-") {
      calculator.currentValue = ( Number(calculator.value1) - Number(calculator.value2) )
      calculator.displayCurrentValue()
    } else if (calculator.operation == "/") {
      calculator.currentValue = ( Number(calculator.value1) / Number(calculator.value2) )
      calculator.displayCurrentValue()
    } else if (calculator.operation == "*") {
      calculator.currentValue = ( Number(calculator.value1) * Number(calculator.value2) )
      calculator.displayCurrentValue()
    }

  },

  displayCurrentValue: function () {
    this.display.innerHTML = this.currentValue
  },

  clearVal: function () {
    this.currentValue = "0"
    this.displayCurrentValue()
  },


}
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////



calculator.addAllClickEvents()
calculator.displayCurrentValue()










//////////////////////////////////////////////////////////////
