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
    document.getElementById('time1').placeholder = data.data.quickplay["top-heroes"][0]["time-played"];
    document.getElementById('time2').placeholder = data.data.quickplay["top-heroes"][1]["time-played"];
    document.getElementById('time3').placeholder = data.data.quickplay["top-heroes"][2]["time-played"];
    document.getElementById('time4').placeholder = data.data.quickplay["top-heroes"][3]["time-played"];
    document.getElementById('hero1').innerHTML = data.data.quickplay["top-heroes"][0].name;
    document.getElementById('hero2').innerHTML = data.data.quickplay["top-heroes"][1].name;
    document.getElementById('hero3').innerHTML = data.data.quickplay["top-heroes"][2].name;
    document.getElementById('hero4').innerHTML = data.data.quickplay["top-heroes"][3].name;

    
});
}
getBtn.addEventListener('click', getData)