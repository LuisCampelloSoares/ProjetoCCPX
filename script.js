const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const aniversario = '29 jan 2024'

function countDown(){
    const dataaniver = new Date(aniversario)
    const hoje = new Date()
    const segtotal = (dataaniver - hoje)/1000;
    const finalDias= Math.floor(segtotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segtotal / 60 / 60) % 24;
    const finalMinutos= Math.floor(segtotal / 60) % 60;
    const finalSeguntos = Math.floor(segtotal) %60;
    dia.innerHTML = finalDias + 'D';
    hora.innerHTML = finalHoras + 'H';
    minuto.innerHTML = finalMinutos + 'M'
    segundo.innerHTML = finalSeguntos + 'S'
}
countDown()
setInterval(countDown, 1000)