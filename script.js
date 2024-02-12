const subhanAllahDisplay = document.getElementById('subhanAllahDisplay');
const subhanAllahIncrimentBtn = document.getElementById('subhanAllahIncrimentBtn');
const subhanAllahDecrimentBtn = document.getElementById('subhanAllahDecrimentBtn');


const alhamdulillahDisplay = document.getElementById('alhamdulillahDisplay');
const alhamdulillahIncrementBtn = document.getElementById('alhamdulillahIncrementBtn');
const alhamdulillahDecrementBtn = document.getElementById('alhamdulillahDecrementBtn');


const AllahuAkberDisplay = document.getElementById('AllahuAkberDisplay');
const AllahuAkberIncrementBtn = document.getElementById('AllahuAkberIncrementBtn');
const AllahuAkberDecrementBtn = document.getElementById('AllahuAkberDecrementBtn');


const resetbtn = document.getElementById('resetbtn');


let subhanAllahInitialValue = 0;
let alhamdulillahInitialValue = 0;
let AllahuAkberInitialValue = 0;


subhanAllahIncrimentBtn.addEventListener('click', function () {
  if (subhanAllahInitialValue === 33) {
    return alert("SubhanAllah complete. Please fillup another one..");
  }


  subhanAllahInitialValue += 1;
  subhanAllahDisplay.innerText = subhanAllahInitialValue;
})

subhanAllahDecrimentBtn.addEventListener('click', function () {
  if (subhanAllahInitialValue <= 0) {
    return alert('You can not add negetive value');
  }

  subhanAllahInitialValue -= 1;
  subhanAllahDisplay.innerText = subhanAllahInitialValue;
})


alhamdulillahIncrementBtn.addEventListener('click', function () {
  if (alhamdulillahInitialValue === 33) {
    return alert('Alhamdulillah complete. Please fillup another one..');
  }

  alhamdulillahInitialValue += 1;
  alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
})

alhamdulillahDecrementBtn.addEventListener('click', function () {
  if (alhamdulillahInitialValue <= 0) {
    return alert('You can not add negetive value');
  }


  alhamdulillahInitialValue -= 1;
  alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
})

AllahuAkberIncrementBtn.addEventListener('click', function () {
  if (AllahuAkberInitialValue === 34) {
    return alert('AllahuAkber complete. Please fillup another one..')
  }


  AllahuAkberInitialValue += 1;
  AllahuAkberDisplay.innerText = AllahuAkberInitialValue;
})

AllahuAkberDecrementBtn.addEventListener('click', function () {
  if (AllahuAkberInitialValue <= 0) {
    return alert('You can not add negetive value');
  }


  AllahuAkberInitialValue -= 1;
  AllahuAkberDisplay.innerText = AllahuAkberInitialValue;
})



// reset button
resetbtn.addEventListener('click', function () {
  subhanAllahDisplay.innerText = 0;
  alhamdulillahDisplay.innerText = 0;
  AllahuAkberDisplay.innerText = 0;

  subhanAllahInitialValue = 0;
  alhamdulillahInitialValue = 0;
  AllahuAkberInitialValue = 0;
})