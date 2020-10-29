  fetch('http://98.177.49.68:3000/details/pc/us/Dragon-111428')
   .then(response => response.json())
     .then(data => console.log(data));


  // fetch('http://98.177.49.68:3000/details/pc/us/Dragon-111428')
  // .then(response => response.json())
  //   .then(data => {
  //     document.getElementById("1stslide").placeholder = data.data.quickplay["top-heroes"][0];
  //     document.getElementById("2ndslide").placeholder = data.data.quickplay["top-heroes"][1];
  //     document.getElementById("3rdslide").placeholder = data.data.quickplay["top-heroes"][2];
  //     console.log(data.data.quickplay["top-heroes"][0]);
  //   });


//  fetch('http://98.177.49.68:3000/details/pc/us/Dragon-111428')
//  .then(response => response.json())
//   .then(data => {
//     document.getElementById('Damage').innerHTML = JSON.stringify(data);
//   });

//Search bar
const getBtn = document.getElementById('get-btn')
const postBtn = document.getElementById('post-btn')

const getData = () =>{
  var answer = document.getElementById('playerName');
  console.log(answer);
  fetch('http://98.177.49.68:3000/details/pc/us/' + answer.value)
  .then(response => response.json())
   .then(data => {
    document.getElementById('Eliminations').placeholder = data.data.quickplay.best.eliminations;
    document.getElementById('Damage').placeholder = data.data.quickplay.best["all-damage-done"];
    document.getElementById('Healing').placeholder = data.data.quickplay.best["healing-done"];
    document.getElementById('Streak').placeholder = data.data.quickplay.best["kill-streak"];
  });
};
 
getBtn.addEventListener('click', getData);