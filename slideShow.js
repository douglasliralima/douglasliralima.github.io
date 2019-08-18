var stateModule = (function () {
    var state = 0; // Private Variable

    var pub = {};// public object - returned at end of module

    pub.changeState = function (newstate) {
        state = newstate;
    };

    pub.getState = function() {
        return state;
    }

    return pub; // expose externally
}());

function ProjectText(ProjectNumber){
    switch(ProjectNumber){
        case 0:
            return ["Selling Forecaster", "Criação de uma API REST, capaz de realizar a previsão de vendas de produto e estimativa automática de estoque."];
        case 1:
            return ["Libras Translator", "Projeto de pesquisa no Lavid para a tradução de libras para linguagem natural."];
        case 2:
            return ["Dungeon Scrolls", "Gerenciador de mesas de RPG e gerador de monstros para dispositivos Android."];
        case 3:
            return ["Web-Numerical Calculus", "Criação de um site, a pedido do Prof. Gustavo Peixoto, para a demonstração dos métodos de calculo numérico."];
        case 4:
            return ["Data Structure Visualization", "Aplicação desktop, a pedido do Prof. Thiago Maritan, para a demonstração gráfica dos algoritmos fundamentais de estrutura de dados"];
    }
}

function letterAnimation(title){
    var text = document.getElementById('projectDescription');
    var newDom = '<a href = "projects/' + title.replace(/ /g, '') + '.html" >';
    var animationDelay = 6;

    //Montagem da tag com classificacao de chars
    //Title
    for(let i = 0; i < title.length; i++)
    {
        newDom += '<span class="title">' + (title[i] == ' ' ? '&nbsp;' : title[i])+ '</span>';
    }
    newDom += "<br>"

    //Body
    for(let i = 0; i < text.innerText.length; i++)
    {
        newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
    }
    newDom += "</a>"
    console.log(newDom)
    //Adicionado o tempo de animação nos chars
    text.innerHTML = newDom;
    var length = text.children.length;

    for(let i = 0; i < length; i++)
    {
        text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
    }
}

function vai(nProj){
    projetos = new Array(nProj);
    for(var i = 0; i < nProj; i++){
        document.getElementById("Project" + i).style = "font-weight:300";
    }

    stateModule.changeState((stateModule.getState() + 1) % nProj); //Circular array
    document.getElementById("Project" + stateModule.getState()).style = "font-weight:700";
    
    text = ProjectText(stateModule.getState()); //Position 0 - Title, Position 1 - Description
    document.getElementById("projectDescription").innerHTML = text[1]
    letterAnimation(text[0]);
    /**
    stateModule.changeState(stateModule.getState()++)
    console.log(stateModule.getState())
     */
}

function vem(nProj){
    projetos = new Array(nProj);
    for(var i = 0; i < nProj; i++){
        document.getElementById("Project" + i).style = "font-weight:300";
    }

    var novoValor = ((stateModule.getState() - 1) % nProj);
    if (novoValor < 0){
        stateModule.changeState(nProj - 1);
    }else {
        stateModule.changeState(Math.abs((stateModule.getState() - 1) % nProj));
    }
    document.getElementById("Project" + stateModule.getState()).style = "font-weight:700";

    text = ProjectText(stateModule.getState()); //Position 0 - Title, Position 1 - Description
    document.getElementById("projectDescription").innerHTML = text[1]
    letterAnimation(text[0]);
}

function pula(nProj, idProj){
    projetos = new Array(nProj);
    for(var i = 0; i < nProj; i++){
        document.getElementById("Project" + i).style = "font-weight:300";
    }

    stateModule.changeState(idProj)
    console.log(stateModule.getState())
    document.getElementById("Project" + stateModule.getState()).style = "font-weight:700";

    text = ProjectText(stateModule.getState()); //Position 0 - Title, Position 1 - Description
    document.getElementById("projectDescription").innerHTML = text[1]
    letterAnimation(text[0]);
}