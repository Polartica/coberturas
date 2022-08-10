fetch("https://github.com/Polartica/coberturas/blob/main/TrioVerde.csv")
.then(response => response.arrayBuffer())
.then(ab => {
  // do stuff with `ArrayBuffer` representation of file
  console.log(ab)
})
.catch(err => console.log(err));