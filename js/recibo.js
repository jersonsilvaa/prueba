function cargar(){
    fetch('./registro.json')
    .then(response =>response.json())
    .then(datos=>{
        console.log(datos)
        console.log(datos[1])
    })
}