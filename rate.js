var btn = document.getElementsByTagName('i');
var del = document.querySelector('.del');
var box = document.querySelector('.box');
var span = document.querySelector('span');
var mesg = [
  'Very dissatisfied',
  'Unsatisfied',
  'Average',
  'Satisfied ',
  'Very satisfied',
];
var star = (overStar = 0);

for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = function () {
    var index = i + 1;
    overStar = i + 1;
    var reviseMesg = mesg[i];
    var scores = index + '\t';
    span.innerHTML = '<strong>' + scores + '</strong>' + reviseMesg;
  };

  btn[i].addEventListener('mouseover', function () {
    var index = i + 1;
    click(index);
    del.style.display = 'block';
    var scores = index;
    var reviseMesg = mesg[i];
    del.innerHTML = '<em>' + scores + mesg[i] + '</em>' + reviseMesg;
  });
  btn[i].onmouseout = function () {
    click();
    del.style.display = 'none';
  };
}

function click(over) {
  star = over || overStar;
  for (let k = 0; k < btn.length; k++) {
    if (k < star) {
      btn[k].style.color = '#e6b106';
    } else {
      btn[k].style.color = '#cccccc';
    }
  }
}
