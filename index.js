let firstPass = document.querySelector('#password');
let secondPass = document.querySelector('#confirm-pass');

let submitBtn = document.querySelector('button');
let fieldSet = document.querySelector('fieldset');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault;
  console.log(firstPass.value, secondPass.value);

  if (firstPass.value != secondPass.value) {
    firstPass.setCustomValidity("Passwords do not match");
    secondPass.setCustomValidity("Passwords do not match");
    let span = document.createElement('span');
    span.innerText = '* Passwords do not match';
    fieldSet.appendChild(span);
  } else {
    console.log('hi');
    firstPass.setCustomValidity("");
    secondPass.setCustomValidity("");
    // fieldSet.removeChild(span);
  }
})