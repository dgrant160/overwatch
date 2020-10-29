// fetch('http://98.177.49.68:3000/details/pc/us/Dragon-111428')
// .then(response => response.json())
//  .then(data => console.log(data));

const getBtn = document.getElementById('get-btn')
const postBtn = document.getElementById('post-btn')
const getData = () =>{
  var answer = document.getElementById('playerName');
  console.log(answer);
  fetch('http://98.177.49.68:3000/details/pc/us/' + answer.value)
  .then(response => response.json())
   .then(data => {
     console.log(data);
    document.getElementById('TotalDamage').placeholder = data.data.quickplay.combat["all-damage-done"];
    document.getElementById('TotalDeaths').placeholder = data.data.quickplay.combat.deaths;
    document.getElementById('TotalEliminations').placeholder = data.data.quickplay.combat.eliminations;
    document.getElementById('TotalHealing').placeholder = data.data.quickplay.assists["healing-done"];

    
});
}
getBtn.addEventListener('click', getData)