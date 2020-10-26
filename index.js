fetch('http://98.177.49.68:3000/details/pc/us/Dragon-111428')
.then(response => response.json())
  .then(data => console.log(data));
