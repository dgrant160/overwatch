

fetch('http://98.177.49.68:3000/details/pc/us/Dragon-111428')
.then(response => response.json())
  .then(data => {
    document.getElementById('1stslide').placeholder = data.data.quickplay["top-heroes"][0].name;
    document.getElementById('2ndslide').placeholder = data.data.quickplay["top-heroes"][1].name;
    document.getElementById('3rdslide').placeholder = data.data.quickplay["top-heroes"][2].name;
    console.log(data.data.quickplay["top-heroes"][0]);
  });