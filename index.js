   const numerosecreto = Math.floor(Math.random() * (100 - 1)) + 1
    console.log(numerosecreto);

let tentativas = 5


 
function chutar() {
const numerodousuario = Number(document.getElementById("numero").value);    

if (numerodousuario < 0) {
    alert("numero não pode ser negativo")
return
}


if (numerodousuario === numerosecreto) {
 document.getElementById("msg").textContent = "Parabéns você acertou!!";
 return
}

else {
tentativas = tentativas - 1;
document.getElementById("tentativas").textContent = tentativas;
}
 if (tentativas == 0) {
    document.getElementById("msg").textContent = "Você perdeu 😢 o numero era: " + numerosecreto
    setTimeout(() => location.reload(), 2000);
return
 }
if (numerodousuario > numerosecreto) {
    document.getElementById("msg").textContent = "É menor";
    
}
else  {
  document.getElementById("msg").textContent = "É maior";  
}

}
    
