document.addEventListener('change',(event)=>{
    //Cuando se cambia el input radio verificamos el valor y cambiamos la camiseta y el texto de color
    switch (event.target.id) {
        case 'black':
            document.getElementById('camisa').classList.remove("camisaBlanca");
            document.getElementById('camisa').classList.add("camisaNegra");
            document.getElementById('text-nombre').classList.add('text-white');
            document.getElementById('text-esquina').classList.add('text-white');
            break;
        case 'white':
            document.getElementById('camisa').classList.remove("camisaNegra");
            document.getElementById('camisa').classList.add("camisaBlanca");
            document.getElementById('text-nombre').classList.remove('text-white');
            document.getElementById('text-esquina').classList.remove('text-white');
            break;
    }
});

//Cuando se escribe en el input de title, hacemos que lo que se escriba se ponga en la zona de la camisa
document.getElementById('title').addEventListener('input',(event)=>{
    if(event.target.value.length === 0){
        //Si no hay nada en el input se pone Title por defecto
        document.getElementById('text-esquina').textContent= 'Title';
    }else if (event.target.value.length <10) {
        document.getElementById('text-esquina').textContent= event.target.value;
    }
});
//Cambiamos la ubicacion del title en la camisa dependiendo del valor del range Y
document.getElementById('coordY').addEventListener('input',(event)=>{
    document.getElementById('text-esquina').style.left= event.target.value+'px';
});
//Cambiamos la ubicacion del title en la camisa dependiendo del valor del range X
document.getElementById('coordX').addEventListener('input',(event)=>{
    document.getElementById('text-esquina').style.top= event.target.value+'px';
});

let shirtElement = document.getElementById('camisa');
shirtElement.addEventListener('dragover', (event) => {
    event.preventDefault();
});
//Evento para que la imagen de la que hagamos drag se ponga en la camisa
shirtElement.addEventListener('drop', (event) => {
    event.preventDefault();
    let nombre="";
    let imgSrc = event.dataTransfer.getData('text/plain');
    let imgCentro = document.getElementById('centro');
    let imgEsquina = document.getElementById('esquina');
    imgCentro.src = imgSrc;
    imgEsquina.src = imgSrc;
    let nombreFoto = imgSrc.split('/').pop();//Dividimos el valor de la ruta de la imagen para sacar el final y dependiendo de esto lo ponemos el nombre de personaje correcto en la camisa
    console.log(nombreFoto);
    switch (nombreFoto) {
        case "bigout.png":
            nombre="Bigout";
            break;
        case "layton.png":
            nombre="Layton";
            break;
        case "luke.png":
            nombre="Luke";
            break;
        case "paolo.png":
            nombre="Paolo";
            break;
    }
    console.log(nombre);
    document.getElementById('text-nombre').textContent = nombre;
});

document.getElementById('imagen-drag', (event) => {
    event.dataTransfer.setData('text/plain', event.target.src); 
});
