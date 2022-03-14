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
            return ["Inventory Management System", "Creation of a API REST, capable to do selling forecast of products and an automatic inventory estimate."];
        case 1:
            return ["Libras Translator", "Reserch Project in Lavid(Lab of Digital Video Applications) for translation of LIBRAS(brazilian sign language) into natural language."];
        case 2:
            return ["Dungeon Scrolls", "Application of a Role Player data manager and monster generator for Android devices."];
        case 3:
            return ["Web-Numerical Calculus", "Creation of a website, for a demonstration of numerical calculation methods."];
    }
}

function letterAnimation(title){
    var text = document.getElementById('projectDescription');
    var newDom = '<a href = "projects/' + title.replace(/ /g, '') + '.html" style="text-decoration: none" >';
    var animationDelay = 6;

    //Montagem da tag com classificacao de chars
    //Title
    for(let i = 0; i < title.length; i++)
    {
        newDom += '<span class="title">' + (title[i] == ' ' ? '&nbsp;' : title[i])+ '</span>';
    }
    newDom += "<br>"

    //Body
    var aux = text.innerText.split(' ')
    aux.forEach((item, index) => {
        newDom += '<span class="word">' + item + '</span>' + ' ';
    })

    newDom += "</a>"

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
    document.getElementById("Project" + stateModule.getState()).style = "font-weight:700";

    text = ProjectText(stateModule.getState()); //Position 0 - Title, Position 1 - Description
    document.getElementById("projectDescription").innerHTML = text[1]
    letterAnimation(text[0]);
}