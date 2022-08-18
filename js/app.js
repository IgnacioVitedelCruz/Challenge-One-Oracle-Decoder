class TextoAnimado{
    constructor(id,objetivo){
        this.texto = document.getElementById(id);
        this.objetivo = document.getElementById(objetivo);
        this.letras = this.texto.innerText.split("");

        this.texto.innerText = '';

        this.letras.forEach((letra) =>{
            let caracter = letra === ' ' ? '&nbsp;' : letra;

            this.texto.innerHTML = this.texto.innerHTML + `
                <div>
                    <span>${caracter}</span>
                    <span class= "segunda-linea">${caracter}</span>
                </div>
            `;
        });

        this.objetivo.addEventListener('mouseenter', () =>{
            let cuenta = 0;
            const intervalo = setInterval(()=>{
                if(cuenta< this.texto.children.length){
                    this.texto.children[cuenta].classList.add('animacion');
                    cuenta += 1;
                }else{
                    clearInterval(intervalo);
                }
            },30)
        });


        this.objetivo.addEventListener('mouseleave', () =>{
            let cuenta = 0;
            const intervalo = setInterval(()=>{
                if(cuenta< this.texto.children.length){
                    this.texto.children[cuenta].classList.remove('animacion');
                    cuenta += 1;
                }else{
                    clearInterval(intervalo);
                }
            },30)
        });
        this.objetivo.addEventListener('touchmove', () =>{
            let cuenta = 0;
            const intervalo = setInterval(()=>{
                if(cuenta< this.texto.children.length){
                    this.texto.children[cuenta].classList.remove('animacion');
                    cuenta += 1;
                }else{
                    clearInterval(intervalo);
                }
            },30)
        });
        
        this.objetivo.addEventListener('touchstart', () =>{
            let cuenta = 0;
            const intervalo = setInterval(()=>{
                if(cuenta< this.texto.children.length){
                    this.texto.children[cuenta].classList.add('animacion');
                    cuenta += 1;
                }else{
                    clearInterval(intervalo);
                }
            },30)
        });


    }
}

var letrasCifrar = ['e','i','a','o','u'];
var palabrasCifrar = ['enter','imes','ai','ober','ufat'];


function cifrar(){
    var msn = document.getElementById("mensaje").value;
    if(msn != ""){
        for(var i=0; i< letrasCifrar.length;i++){
            msn = msn.replace(letrasCifrar[i],palabrasCifrar[i]);
        }
        document.getElementById("resultado").value = msn;
        document.getElementById("mensaje").value = "";
    }

}
function descifrar(){
    var msn = document.getElementById("mensaje").value;
    if(msn != ""){
        for(var i=0; i< letrasCifrar.length;i++){
            msn = msn.replace(palabrasCifrar[i],letrasCifrar[i]);
        }
        console.log(msn)
        document.getElementById("resultado").value = msn;
        document.getElementById("mensaje").value = "";
    }

}
function voltearmsn(){
    var textarea1 = document.getElementById("resultado");
    var textarea2 = document.getElementById("mensaje");
    var valor1 = textarea1.value;
    if(valor1 != ""){
        textarea1.value = textarea2.value;
        textarea2.value = valor1;
    }
}
function copiar(){
    var contenido = document.getElementById("resultado").value;
    navigator.clipboard.writeText(contenido);
    exito();
    mostrarAlerta();
}
function mostrarAlerta() {
    divAlerta.classList.remove('invisible');
    divAlerta.classList.add('visible');
    setTimeout(ocultarAlerta, 1500);
}
var divAlerta = document.getElementById('alerta');
    
function exito() {
    divAlerta.innerText = '¡¡Código copiado al portapapeles!!';
    divAlerta.classList.add('alert-success');
}
function ocultarAlerta() {
    divAlerta.innerText = '';
    divAlerta.classList.remove('alert-success', 'alert-warning', 'alert-danger', 'visible');
    divAlerta.classList.add('invisible');
}
var btnVoltear = document.getElementById("btn-invertir");
btnVoltear.addEventListener("click",voltearmsn);


var btnCifrar = document.querySelector("#btn-cifrar");
btnCifrar.addEventListener("click",cifrar);

var btndecifrar = document.querySelector("#btn-descifrar");
btndecifrar.addEventListener("click",descifrar);

var btncopiar = document.querySelector("#btn-copiar");
btncopiar.addEventListener("click",copiar);

new TextoAnimado('titulo', 'encabezado');







