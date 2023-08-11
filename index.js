function onload() {
  scaleload();
  document.getElementById('t6').innerText = '0';
  document.getElementById('n6').value = 0;
  document.getElementById('r1').checked = true;
  document.getElementById('pr11').checked = true;
  document.getElementById('pr21').checked = true;
  document.getElementById('pr31').checked = true;
  document.getElementById('pr41').checked = true;
  document.getElementById('pr51').checked = true;
  document.getElementById('pn1').value = 0;
  document.getElementById('pn2').value = 0;
  document.getElementById('pn3').value = 0;
  document.getElementById('pn4').value = 0;
  document.getElementById('pn5').value = 0;
  realsetup();
}

function adjust(numb) {
  document.getElementById('t' + numb).innerText = document.getElementById('n' + numb).value;
}

function mancala(start) {
  if (confirm("Are you sure you want to do mancala action?")) {
    value = document.getElementById('t' + start).innerText;
    if (value > 5) {
      document.getElementById('t6').innerText = Number(document.getElementById('t6').innerText) + (value - 5);
      document.getElementById('n6').value = Number(document.getElementById('n6').value) + (value - 5);
      value = 5;
    }
    document.getElementById('t' + start).innerText = '0';
    document.getElementById('n' + start).value = '0';
    pos = start + 1;
    for (let i = 0; i < value; i++) {
      if (pos == 6) {
        pos = 1;
      }
      document.getElementById('t' + pos).innerText = Number(document.getElementById('t' + pos).innerText) + 1;
      document.getElementById('n' + pos).value = Number(document.getElementById('n' + pos).value) + 1;
      pos = pos + 1;
    } 
  }
}

function realsetup() {
  drop = -1;
  shuffle(['1','2','3','4','5']).forEach((element) => {
    drop = drop + 1;
    document.getElementById('t' + element).innerText = '' + drop;
    document.getElementById('n' + element).value = '' + drop;
  });
}
function reset() {
  if (confirm("Are you sure you want to reset?")) {
    document.getElementById('t6').innerText = '0';
    document.getElementById('n6').value = 0;
    document.getElementById('r1').checked = true;
    document.getElementById('pr11').checked = true;
    document.getElementById('pr21').checked = true;
    document.getElementById('pr31').checked = true;
    document.getElementById('pr41').checked = true;
    document.getElementById('pr51').checked = true;
    document.getElementById('pn1').value = 0;
    document.getElementById('pn2').value = 0;
    document.getElementById('pn3').value = 0;
    document.getElementById('pn4').value = 0;
    document.getElementById('pn5').value = 0;
    realsetup();
  }
}
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function scaleload() {
	scale1 = (window.innerWidth-16)/document.getElementById("main").offsetWidth;
	scale2 = (window.innerHeight-16)/(document.getElementById("main").offsetHeight);

	scale = Math.min(scale1,scale2);

	//scale = 0.7;

	scalestring = 'scale(' + scale + ')';


	document.getElementById("main").style.transform = scalestring;
	document.getElementById("main").style.opacity = '1';   
}

function setup() {
  if (confirm("Are you sure you want to setup for the next round?")) {
    if (document.getElementById('r3').checked == true) {alert("Cannot advance round past 3");}
    else {
      if (document.getElementById('r1').checked == true) {
        document.getElementById('r2').checked = true;
      } else {document.getElementById('r3').checked = true;}
      
        currentvalues = [0,0,0,0,0];
        currentvalues[0] = Number(document.getElementById('t1').innerText);
        currentvalues[1] = Number(document.getElementById('t2').innerText);
        currentvalues[2] = Number(document.getElementById('t3').innerText);
        currentvalues[3] = Number(document.getElementById('t4').innerText);
        currentvalues[4] = Number(document.getElementById('t5').innerText);
        highvalue = Math.max(...currentvalues)
        console.log(highvalue);
        for (let i = 1; i < 6; i++) {
          valu = Number(document.getElementById('t' + i).innerText);
          if (valu < highvalue) {
            document.getElementById('t' + i).innerText = valu + 1;
            document.getElementById('n' + i).value = valu + 1;
          }
        }
      
    }
  }
}