const checkComprar = document.getElementById("checkComprar");
const checkPix = document.getElementById("checkPix");
const checkBoleto = document.getElementById("checkBoleto");
const checkCartao = document.getElementById("checkCartao");
const botaoConfirmar = document.getElementById("botaoConfirmar");
const resultado = document.getElementById("resultado");
const resultadoPagar = document.getElementById("resultadoPagar");

botaoConfirmar.onclick = function(){
    if (checkComprar.checked && checkPix.checked){
        resultado.textContent = `Compra confirmada, realizada via pix!`;
    }else if(checkComprar.checked && checkBoleto.checked){
        resultado.textContent = `Compra confirmada, realizada via boleto!`;
    }else if(checkComprar.checked && checkCartao.checked){
        resultado.textContent = `Compra confirmada, realizada via cartão de crédito!`;
    }else{
        resultado.textContent = `Compra não confirmada.`
    }

    if (checkBoleto.checked && checkPix.checked){
        resultado.textContent = `Compra inválida`;
    }else if (checkBoleto.checked && checkCartao.checked){
        resultado.textContent = `Compra inválida`;
    }else if (checkCartao.checked && checkPix.checked){
        resultado.textContent = `Compra inválida`;
    }else if (checkCartao.checked && checkPix.checked && checkBoleto.checked){
        resultado.textContent = `Compra inváida`;
    }
}