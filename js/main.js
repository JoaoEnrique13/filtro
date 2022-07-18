function myFunction() {
    //variaveis
    var filter, divPesquisaAssistidos, divPesquisaNaoFinalizados, divPesquisaLista, cardAssistidos, cardNaoFinalizados, cardLista, textoPesquisa, txtValue;
    filter = document.getElementById("search").value.toUpperCase();//pegar texto do campo de pesquisa
    divPesquisaAssistidos = document.getElementById("divPesquisa");//div quem contém os cards assistidos
    divPesquisaNaoFinalizados = document.getElementById("divPesquisa2");//div quem contém os cards nao finalizados
    divPesquisaLista = document.getElementById("divPesquisa3");//div quem contém os cards Minha Lista
    cardAssistidos = divPesquisa.querySelectorAll(".card");//card Assistidos
    cardNaoFinalizados = divPesquisa2.querySelectorAll(".card");//card nao finalizados
    cardLista = divPesquisa3.querySelectorAll(".card");//card lista

    //PESQUISAR EM ASSISTIDOS
    for (i = 0; i < cardAssistidos.length; i++) {//pesquisar todos os elementos
        textoPesquisa = cardAssistidos[i].querySelectorAll(".txt-pesquisa")[0];
        txtValue = textoPesquisa.textContent;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            cardAssistidos[i].style.display = "block";//caso a pesquisa seja encontrada
            document.querySelector(".classificacao-assistidos").style.display= "block"
        } else {
            cardAssistidos[i].style.display = "none";//caso a pesquisa não seja encontrada
            document.querySelector(".classificacao-assistidos").style.display= "none"
        }
    }

    //PESQISAR EM NÃO FINALIZADOS
    for (i = 0; i < cardNaoFinalizados.length; i++) {//pesquisar todos os elementos
        textoPesquisa = cardNaoFinalizados[i].querySelectorAll(".txt-pesquisa")[0];
        txtValue = textoPesquisa.textContent;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            cardNaoFinalizados[i].style.display = "block";//caso a pesquisa seja encontrada
            document.querySelector(".classificacao-finalizados").style.display= "block"
        } else {
            cardNaoFinalizados[i].style.display = "none";//caso a pesquisa não seja encontrada
            document.querySelector(".classificacao-finalizados").style.display= "none"
        }
    }

    //PESQISAR EM MINHA LISTA
    for (i = 0; i < cardLista.length; i++) {//pesquisar todos os elementos
        textoPesquisa = cardLista[i].querySelectorAll(".txt-pesquisa")[0];
        txtValue = textoPesquisa.textContent;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            cardLista[i].style.display = "block";//caso a pesquisa seja encontrada
            document.querySelector(".classificacao-lista").style.display= "block"
        } else {
            cardLista[i].style.display = "none";//caso a pesquisa não seja encontrada
            document.querySelector(".classificacao-lista").style.display= "none"
        }
    }
}