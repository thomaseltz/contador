// AGUARDA ATÉ QUE O CONTEÚDO DA PÁG. ESTEJA TOTALMENTE CARREGADO 
document.addEventListener("DOMContentLoaded", () => {

    // SELECIONA TODOS ELEMENTOS COM A CLASSE "CONTADOR" 
    const contadores = document.querySelectorAll(".contador");

    // ITERA SOBRE CADA ELEMENTO DE CONTADORES APLICANDO A ANIMAÇÃO DA CONTAGEM 
    contadores.forEach(contador => {

        // VALOR INICIAL DO CONTADOR 
        contador.innerText = "0";

        // FUNÇÃO QUE FAZ O CONTADOR AUMENTAR GRADATIVAMENTE ATÉ O data-alvo
        const atualizarContador = () => {
            const alvo = +contador.getAttribute("data-alvo");

            // INNER TEXT MANDA ELE PAARA O HTML
            const contagem = +contador.innerText;

            // DEFINE O INCREMENTO QUE É UMA FUNÇÃO DO VALOR ALVO PARA GARANTIR UMA ROLAGEM SUAVE 
            const incremento = alvo / 2000

            if (contagem < alvo) {
                contador.innerText = Math.ceil(contagem + incremento);
                setTimeout(atualizarContador, 20);

            } else {
                contador.innerText = alvo

            }
        };
        atualizarContador();

    })
    
})
