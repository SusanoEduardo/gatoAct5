
function app() {
    
    var canvas = document.getElementById("canvas");
                                                    //Atributos de Canvas
    canvas.setAttribute("width", 500);
    canvas.setAttribute("height", 500);
                                                    //Estilos de Canvas
    canvas.style.border = "solid 2px black"
    canvas.style.background = "#FF0028"

                                                    //Contexto del Canvas
    var context = canvas.getContext("2d");
                                                    //Objeto del juego del gato
    const gato =
    {
         estados:[
            [0,0,0],
            [0,0,0],
            [0,0,0],
        ],
                                                    //funcion de lineas punteadas
        punteado: function () {
            var puntosA = 100;
            var puntosB = 500;

            context.strokeStyle = "#000000";

            for (var n = 0; n < 4; n++) {
                context.setLineDash([4, 14]);

                context.beginPath();
                context.moveTo(0, puntosA);
                context.lineTo(500, puntosA);
                context.stroke(); 

                context.beginPath();
                context.moveTo(puntosA, 0);
                context.lineTo(puntosA, puntosB);
                context.stroke();

                puntosA = puntosA + 100;
                puntosB = puntosB + 100;
            }
        },
                                                    //funcion de pintar el gato
        escenario: function () {
            var gato = 200;

            for (a = 0; a < 2; a++) {

                context.setLineDash([]);
                context.lineWidth=3;
                context.beginPath();
                context.moveTo(200,100);
                context.lineTo(200,400);
                context.moveTo(300,100);
                context.lineTo(300,400);
                context.moveTo(100,200);
                context.lineTo(400,200);
                context.moveTo(100,300);
                context.lineTo(400,300);
                context.stroke();
                

                gato = gato + 100;

            }
        },
        
        seleccionar: function(e){
            var X= e.offsetX;
            var Y= e.offsetY;
            var coordenadas = document.getElementById("coordenadas");
            
            var img = new Image();
            img.src = "gato.png";
            //img.src = "raton.png";
            coordenadas.innerHTML=`${X},${Y}`;
 
                        //fila 1
        if (X >=100 && X <=200 && Y >=100 && Y <=200 && gato.estados[0][0]==0)
        {
            context.drawImage(img, 100,100);      
        }   
        else if(gato.estados[0][0]==0)
        {
            context.clearRect(105,105,90,90);   
        }  
          
        if(X>200 & X<=300 & Y>100 & Y<200 && gato.estados[0][1]==0)
        {
            context.drawImage(img,200,100);
        }
        else if(gato.estados[0][1]==0)
        {
            context.clearRect(205,105,90,90);   
        }

        if(X>300 & X<=400 & Y>100 & Y<200 && gato.estados[0][2]==0)
        {
            context.drawImage(img,300,100);
        }
        else if(gato.estados[0][2]==0)
        {
            context.clearRect(305,105,90,90);   
        }

                        //fila 2
        if(X>100 & X<=200 & Y>200 & Y<300 && gato.estados[1][0]==0)
        {
            context.drawImage(img,100,200);
        }
        else if(gato.estados[1][0]==0)
        {
            context.clearRect(105,205,90,90);   
        }

        if(X>200 & X<=300 & Y>200 & Y<300 && gato.estados[1][1]==0)
        {
            context.drawImage(img,200,200);
        }
        else if(gato.estados[1][1]==0)
        {
            context.clearRect(205,205,90,90);   
        }

        if(X>300 & X<=400 & Y>200 & Y<300 && gato.estados[1][2]==0)
        {
            context.drawImage(img,300,200);
        }
        else if(gato.estados[1][2]==0)
        {
            context.clearRect(305,205,90,90);   
        }

                        //fila 3
        if(X>100 & X<=200 & Y>300 & Y<400 && gato.estados[2][0]==0)
        {
            context.drawImage(img,100,300);
        }
        else if(gato.estados[2][0]==0)
        {
            context.clearRect(105,305,90,90);   
        }

        if(X>200 & X<=300 & Y>300 & Y<400 && gato.estados[2][1]==0)
        {
            context.drawImage(img,200,300);
        }
        else if(gato.estados[2][1]==0)
        {
            context.clearRect(205,305,90,90);   
        }

        if(X>300 & X<=400 & Y>300 & Y<400 && gato.estados[2][2]==0)
        {
            context.drawImage(img,300,300);
        }
        else if(gato.estados[2][2]==0)
        {
            context.clearRect(305,305,90,90);   
        }

        
        

    },
    activarEstados: function(e)
    {
        var X =e.offsetX;
        var Y =e.offsetY;

        var img = new Image();
        img.src = "gato.png";

                            //fila 1
        if (X >=100 && X <=200 && Y >=100 && Y <=200 && gato.estados[0][0]==0)
        {
            gato.estados[0][0]=1;
            context.drawImage(img,300,300);
        }   

        if(X>200 & X<=300 & Y>100 & Y<200 && gato.estados[0][1]==0)
        {
            gato.estados[0][1]=1;
            context.drawImage(img,200,100);
        }
        
        if(X>300 & X<=400 & Y>100 & Y<200 && gato.estados[0][2]==0)
        {
            gato.estados[0][2]=1;
            context.drawImage(img,300,100);
        }
        
                            //fila 2
        if(X>100 & X<=200 & Y>200 & Y<300 && gato.estados[1][0]==0)
        {
            gato.estados[1][0]=1;
            context.drawImage(img,100,200);
        }
        
        if(X>200 & X<=300 & Y>200 & Y<300 && gato.estados[1][1]==0)
        {
            gato.estados[1][1]=1;
            context.drawImage(img,200,200);
        }
        
        if(X>300 & X<=400 & Y>200 & Y<300 && gato.estados[1][2]==0)
        {
            gato.estados[1][2]=1;
            context.drawImage(img,300,200);
        }

                            //fila 3
        if(X>100 & X<=200 & Y>300 & Y<400 && gato.estados[2][0]==0)
        {
            gato.estados[2][0]=1;
            context.drawImage(img,100,300);
        }
        
        if(X>200 & X<=300 & Y>300 & Y<400 && gato.estados[2][1]==0)
        {
            gato.estados[2][1]=1;
            context.drawImage(img,200,300);
        }
        
        if(X>300 & X<=400 & Y>300 & Y<400 && gato.estados[2][2]==0)
        {
            gato.estados[2][2]=1;
            context.drawImage(img,300,300);
        }

        },

        
        play: function (pintarPunteado = false) {
            if (pintarPunteado)
                this.punteado();
                this.escenario();
        }

    }

    
    canvas.addEventListener("mousemove", gato.seleccionar);  
    canvas.addEventListener("mousedown", gato.activarEstados); 
                                                    //activar/desactivar punteado
    //gato.play();
    gato.play(true);
    
}

window.onload = function () {
    app();
    
}


