const ingressos = []; 

function highlightCard(selector){
    var element = document.querySelector(selector);
    element.classList.toggle("card-highlight");
}   
function checkKeyBoardCode(){    
    document.addEventListener( 'keydown', function(event){
    var nome = event.key
    var code = event.code
    alert(`A tecla digitada foi ${nome} e o codigo é ${code}`)
    })
}
function addKeyBoardEventListenner(){
    document.addEventListener('keydown', function(event){
    var ingresso1 = document.getElementById('quinta');
    var ingresso2 = document.getElementById('sexta');
    var ingresso3 = document.getElementById('sabado');
    var ingresso4 = document.getElementById('domingo');

    var code = event.code;
    if(code === 'Digit1') {
        ingresso1.classList.toggle("card-highlight");
        ingresso2.classList.remove("card-highlight");
        ingresso3.classList.remove("card-highlight");
        ingresso4.classList.remove("card-highlight");
    }
    if(code === 'Digit2') {
        ingresso1.classList.remove("card-highlight");
        ingresso2.classList.toggle("card-highlight");
        ingresso3.classList.remove("card-highlight");
        ingresso4.classList.remove("card-highlight");
    }
    if(code === 'Digit3') {
        ingresso1.classList.remove("card-highlight");
        ingresso2.classList.remove("card-highlight");
        ingresso3.classList.toggle("card-highlight");
        ingresso4.classList.remove("card-highlight");
    }
    if(code === 'Digit4') {
        ingresso1.classList.remove("card-highlight");
        ingresso2.classList.remove("card-highlight");
        ingresso3.classList.remove("card-highlight");
        ingresso4.classList.toggle("card-highlight");
    }
    })
}

function cardSelect(selector) {
    var element = document.querySelector(selector);
    element.classList.toggle("card-selected");
    if (ingressos.includes(selector)) {
      ingressos.splice(ingressos.indexOf(selector), 1); 
    } else {
      ingressos.push(selector);
    }
  }

function showSelectedCard(){
    if(ingressos.lenght > 0 ) alert('Ingressos selecionados:' + ingressos.length);
    
}
showSelectedCard();
addKeyBoardEventListenner();




