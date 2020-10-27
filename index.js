 fetch('http://98.177.49.68:3000/details/pc/us/Dragon-111428')
 .then(response => response.json())
   .then(data => console.log(data));

// fetch('http://98.177.49.68:3000/details/pc/us/Dragon-111428')
// .then(response => response.json())
//   .then(data => {
//     document.getElementById('Damage').innerHTML = JSON.stringify(data);
//   });

//Search bar
const getBtn = document.getElementById('get-btn')
const postBtn = document.getElementById('post-btn')

const getData = () =>{
  var answer = document.getElementById('playerName').nodeValue;
  console.log(answer);
  var tops ="http://98.177.49.68:3000/details/pc/us/" + answer;
  sendHttpRequest('GET', tops);
  document.getElementById('Eliminations').innerHTML = data.quickplay.best.eliminations;
};

getBtn.addEventListener('click', getData);