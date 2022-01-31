$(document).ready(function(){
    $("form").submit(function(event){
    event.preventDefault();
    
    let pok = $("#hero").val();
     
    $.ajax({
           url:"https://www.superheroapi.com/api.php/10226252212067525/"+ pok,
           success: function(data){

            if(pok > 732 || pok < 0 || !isNaN(pok)== false){
                alert("ingesar solo numeros del 1 al 732")
            }

 // Card de datos

              let nombre = data.name;
              let img = data.image.url;
              let conexiones = data.connections['group-affiliation'];
              let publicado = data.biography.publisher;
              let ocupacion =data.work.occupation;
              let publicacion = data.biography['first-appearance'];
              let altura = data.appearance.height;
              let peso = data.appearance.weight;
              let alianza = data.biography.aliases;

              
    
              $("#info").html(`
              <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                      <div class="col-md-5" >
                        <img src="${img}" class="img-fluid rounded-start  mt-4" alt="..." >
                      </div>
                      <div class="col-md-7">
                        <div class="card-body">
                          <h5 class="card-title">Nombre: ${nombre}</h5>
                          <p class="card-text"> conexiones :${conexiones}</p>
                          <p class="card-text">Publicado por: ${publicado}</p>
                          <hr>
                          <p class="card-text">Ocupacion: ${ocupacion}</p>
                          <hr>
                          <p class="card-text">Primera aparicion: ${publicacion}</p>
                          <hr>
                          <p class="card-text">Altura: ${altura}</p>
                          <hr>
                          <p class="card-text">Peso: ${peso}</p>
                          <hr>
                          <p class="card-text">Alianzas: ${alianza}</p>
                          
                        </div>
                      </div>
                    </div>
                  </div> 
                `);
                 
//  Grafico CanvasJS

                 let inteligencia = data.powerstats.intelligence;
                 let fuerza = data.powerstats.strength;
                 let velocidad = data.powerstats.speed;
                 let durability = data.powerstats.durability;
                 let poder = data.powerstats.power;
                 let combate = data.powerstats.combat;
                

                    var options = {
                        title: {
                            text: "Estadisticas de poder para "+ nombre
                        },
                        subtitles: [{
                            text: ""
                        }],
                        animationEnabled: true,
                        data: [{
                            type: "pie",
                            startAngle: 40,
                            toolTipContent: "<b>{label}</b>: {y}%",
                            showInLegend: "true",
                            legendText: "{label}",
                            indexLabelFontSize: 16,
                            indexLabel: "{label} - {y}",
                            dataPoints: [
                                { y: inteligencia, label: "Inteligencia" },
                                { y: fuerza, label: "fuerza" },
                                { y: velocidad, label: "Velocidad" },
                                { y: durability, label: "Durabilidad" },
                                { y: poder, label: "poder" },
                                { y: combate, label: "combate" },
                          
                            ]
                        }]
                    };
                    $("#grafico").CanvasJSChart(options);
                    options.render();
                    
                    



           
    
           },
           error: function(data) {
            alert("error 404")
           
            }




    })
    
    })
    
    })
    
    