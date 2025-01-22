
//Evento para redondear banderas

let banderas = document.getElementsByClassName("bandera");
for (let i = 0; i < banderas.length; i++) {
    // Añadimos el evento mouseover a cada imagen
    banderas[i].addEventListener('mouseover', function() {
        banderas[i].style.borderRadius = "50%";
        banderas[i].style.transform = "scale(1.5)";
    });

    // Añadimos el evento mouseout a cada imagen
    banderas[i].addEventListener('mouseout', function() {
        banderas[i].style.borderRadius = "0%";
        banderas[i].style.transform = "scale(1)";
    });
}

//Eventos para los circulos del index "temario"
let niveles = document.getElementsByClassName("grid-item");

for (let i = 0; i < niveles.length; i++) {
    niveles[i].addEventListener('mouseover', function() {
        niveles[i].style.transform = "scale(1.5)";
    });

    niveles[i].addEventListener('mouseout', function() {
        niveles[i].style.transform = "scale(1)";
    });
}





//constante para almacenar el nivel
const nivelI = document.getElementById("nivelI");
const nivelA = document.getElementById("nivelA");
const nivelF = document.getElementById("nivelF");
const nivelM = document.getElementById("nivelM");
const nivelP = document.getElementById("nivelP");


//Recuperamos los campos a modificar de la tabla
//Constantes para idiomas
const ingles = document.getElementById('idiomaIngles');
const aleman = document.getElementById('idiomaAleman');
const frances = document.getElementById('idiomaFrances');
const mandarin = document.getElementById('idiomaMandarin');
const portugues = document.getElementById('idiomaPortugues');

//constantes para temarios
const tem_ingles = document.getElementById('temarioIngles');
const tem_aleman = document.getElementById('temarioAleman');
const tem_frances = document.getElementById('temarioFrances');
const tem_mandarin = document.getElementById('temarioMandarin');
const tem_portugues = document.getElementById('temarioPortugues');


//Evento de click para el NIVEL A1
document.getElementById('a1').addEventListener('click', function (){

        //Hacemos el fetch para nivel A1

    //Conexión con archivos JSON para el index "temarios"
        fetch('/json/temarioA1.json')
            .then(response => response.json())
            .then(data => {


                //ingles
                nivelI.textContent = data[0].nivel;
                ingles.textContent = data[0].idiomaIngles;
                tem_ingles.textContent = data[0].temarioIngles;


                //aleman
                nivelA.textContent = data[1].nivel;
                aleman.textContent = data[1].idiomaAleman;
                tem_aleman.textContent = data[1].temarioAleman;

                //frances
                nivelF.textContent = data[2].nivel;
                frances.textContent = data[2].idiomaFrances;
                tem_frances.textContent = data[2].temarioFrances;


                //mandarin
                nivelM.textContent = data[3].nivel;
                mandarin.textContent = data[3].idiomaMandarin;
                tem_mandarin.innerHTML = data[3].temarioMandarin;


                //portugues
                nivelP.textContent = data[4].nivel;
                portugues.textContent = data[4].idiomaPortugues;
                tem_portugues.innerHTML = data[4].temarioPortugues;



            })
            .catch(error => console.error('Error al cargar el archivo JSON:', error));

})


//Evento de click para el NIVEL A2
document.getElementById('a2').addEventListener('click', function (){


    //Hacemos el fetch para nivel A2

    fetch('/json/temarioA2.json')
        .then(response => response.json())
        .then(data => {

            //ingles
            nivelI.textContent = data[0].nivel;
            ingles.textContent = data[0].idiomaIngles;
            tem_ingles.textContent = data[0].temarioIngles;


            //aleman
            nivelA.textContent = data[1].nivel;
            aleman.textContent = data[1].idiomaAleman;
            tem_aleman.textContent = data[1].temarioAleman;

            //frances
            nivelF.textContent = data[2].nivel;
            frances.textContent = data[2].idiomaFrances;
            tem_frances.textContent = data[2].temarioFrances;


            //mandarin
            nivelM.textContent = data[3].nivel;
            mandarin.textContent = data[3].idiomaMandarin;
            tem_mandarin.innerHTML = data[3].temarioMandarin;


            //portugues
            nivelP.textContent = data[4].nivel;
            portugues.textContent = data[4].idiomaPortugues;
            tem_portugues.innerHTML = data[4].temarioPortugues;




        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));

})


//Evento de click para el NIVEL B1
document.getElementById('b1').addEventListener('click', function (){


//Hacemos el fetch para nivel B1

fetch('/json/temarioB1.json')
    .then(response => response.json())
    .then(data => {

        //ingles
        nivelI.textContent = data[0].nivel;
        ingles.textContent = data[0].idiomaIngles;
        tem_ingles.textContent = data[0].temarioIngles;


        //aleman
        nivelA.textContent = data[1].nivel;
        aleman.textContent = data[1].idiomaAleman;
        tem_aleman.textContent = data[1].temarioAleman;

        //frances
        nivelF.textContent = data[2].nivel;
        frances.textContent = data[2].idiomaFrances;
        tem_frances.textContent = data[2].temarioFrances;


        //mandarin
        nivelM.textContent = data[3].nivel;
        mandarin.textContent = data[3].idiomaMandarin;
        tem_mandarin.innerHTML = data[3].temarioMandarin;


        //portugues
        nivelP.textContent = data[4].nivel;
        portugues.textContent = data[4].idiomaPortugues;
        tem_portugues.innerHTML = data[4].temarioPortugues;



    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));

})

//Evento de click para el NIVEL B2
document.getElementById('b2').addEventListener('click', function (){


//Hacemos el fetch para nivel B2

    fetch('/json/temarioB2.json')
        .then(response => response.json())
        .then(data => {

            //ingles
            nivelI.textContent = data[0].nivel;
            ingles.textContent = data[0].idiomaIngles;
            tem_ingles.textContent = data[0].temarioIngles;


            //aleman
            nivelA.textContent = data[1].nivel;
            aleman.textContent = data[1].idiomaAleman;
            tem_aleman.textContent = data[1].temarioAleman;

            //frances
            nivelF.textContent = data[2].nivel;
            frances.textContent = data[2].idiomaFrances;
            tem_frances.textContent = data[2].temarioFrances;


            //mandarin
            nivelM.textContent = data[3].nivel;
            mandarin.textContent = data[3].idiomaMandarin;
            tem_mandarin.innerHTML = data[3].temarioMandarin;


            //portugues
            nivelP.textContent = data[4].nivel;
            portugues.textContent = data[4].idiomaPortugues;
            tem_portugues.innerHTML = data[4].temarioPortugues;



        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));

})

//Evento de click para el NIVEL C1
document.getElementById('c1').addEventListener('click', function (){


//Hacemos el fetch para nivel C1

    fetch('/json/temarioC1.json')
        .then(response => response.json())
        .then(data => {

            //ingles
            nivelI.textContent = data[0].nivel;
            ingles.textContent = data[0].idiomaIngles;
            tem_ingles.textContent = data[0].temarioIngles;


            //aleman
            nivelA.textContent = data[1].nivel;
            aleman.textContent = data[1].idiomaAleman;
            tem_aleman.textContent = data[1].temarioAleman;

            //frances
            nivelF.textContent = data[2].nivel;
            frances.textContent = data[2].idiomaFrances;
            tem_frances.textContent = data[2].temarioFrances;


            //mandarin
            nivelM.textContent = data[3].nivel;
            mandarin.textContent = data[3].idiomaMandarin;
            tem_mandarin.innerHTML = data[3].temarioMandarin;


            //portugues
            nivelP.textContent = data[4].nivel;
            portugues.textContent = data[4].idiomaPortugues;
            tem_portugues.innerHTML = data[4].temarioPortugues;



        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));

})


//Evento de click para el NIVEL C2
document.getElementById('c2').addEventListener('click', function (){


//Hacemos el fetch para nivel C2

    fetch('/json/temarioC2.json')
        .then(response => response.json())
        .then(data => {

            //ingles
            nivelI.textContent = data[0].nivel;
            ingles.textContent = data[0].idiomaIngles;
            tem_ingles.textContent = data[0].temarioIngles;


            //aleman
            nivelA.textContent = data[1].nivel;
            aleman.textContent = data[1].idiomaAleman;
            tem_aleman.textContent = data[1].temarioAleman;

            //frances
            nivelF.textContent = data[2].nivel;
            frances.textContent = data[2].idiomaFrances;
            tem_frances.textContent = data[2].temarioFrances;


            //mandarin
            nivelM.textContent = data[3].nivel;
            mandarin.textContent = data[3].idiomaMandarin;
            tem_mandarin.innerHTML = data[3].temarioMandarin;


            //portugues
            nivelP.textContent = data[4].nivel;
            portugues.textContent = data[4].idiomaPortugues;
            tem_portugues.innerHTML = data[4].temarioPortugues;



        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));

})


