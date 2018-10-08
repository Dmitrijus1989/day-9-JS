  function calculate() {
    let enteredNumber = Number(document.getElementById("enteredNumber").value);
    if (enteredNumber % 2 === 0) {
      document.getElementById('result').textContent = ("lyginis");
    } else {
      document.getElementById('result').textContent = ("nelygibinis");
    }
  }
/*------------------------------------------------------------------------------*/
function calculate1() {
  let enteredNumber1 = Number(document.getElementById('enteredNumber1').value);
  if (enteredNumber1 <= 0) {
    document.getElementById('result1').textContent = ("not a group");
  } else if (enteredNumber1 == 1) {
    document.getElementById('result1').textContent = ("solo");
  } else if (enteredNumber1 == 2) {
    document.getElementById('result1').textContent = ("duet");
  } else if (enteredNumber1 == 3) {
    document.getElementById('result1').textContent = ("trio");
  } else if (enteredNumber1 == 4) {
    document.getElementById('result1').textContent = ("quartet");
  } else if (enteredNumber1 > 4) {
    document.getElementById('result1').textContent = ("this is a large group");
  }
}
/*-----------------------------------------------------------------------------*/
