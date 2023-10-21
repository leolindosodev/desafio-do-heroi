const form = document.querySelector('form');
const resp = document.querySelector('#outResp')



form.addEventListener("submit", (e) =>{
e.preventDefault();

     const nickName = form.inName.value;
     const nivel = Number(form.inLevel.value);

     if((nickName && nivel) === ""){
         alert("O campo Nickname e nível precisam ser preenchidos!!")
         return
     }

     if(nivel <= 1000) {
        resp.innerHTML = `O Herói de nome ${nickName} está no nível de Ferro`
        form.inName.value = "";
        form.inLevel.value = "";
        form.inName.focus();
     } else if ( nivel >= 1001 && nivel <= 2000) {
        resp.innerHTML = `O Herói de nome ${nickName} está no nível de Bronze`
        form.inName.value = "";
        form.inLevel.value = "";
        form.inName.focus();
     } else if (nivel >= 2001 && nivel <= 5000) {
        resp.innerHTML = `O Herói de nome ${nickName} está no nível de Prata`
        form.inName.value = "";
        form.inLevel.value = "";
        form.inName.focus();
     } else if (nivel >= 6001 && nivel <= 7000) {
        resp.innerHTML = `O Herói de nome ${nickName} está no nível de Ouro`
        form.inName.value = "";
        form.inLevel.value = "";
        form.inName.focus();
     } else if (nivel >= 7001 && nivel <= 8000) {
        resp.innerHTML = `O Herói de nome ${nickName} está no nível de Platina`
        form.inName.value = "";
        form.inLevel.value = "";
        form.inName.focus();
     } else if (nivel >= 8001 && nivel <= 9000) {
        resp.innerHTML = `O Herói de nome ${nickName} está no nível de Ascendente`
        form.inName.value = "";
        form.inLevel.value = "";
        form.inName.focus();
     } else if (nivel >= 9001 && nivel <= 10000) {
        resp.innerHTML = `O Herói de nome ${nickName} está no nível de Imortal`
        form.inName.value = "";
        form.inLevel.value = "";
        form.inName.focus();
     } else if (nivel >= 10001) {
        resp.innerHTML = `O Herói de nome ${nickName} está no nível de Radiante`
        form.inName.value = "";
        form.inLevel.value = "";
        form.inName.focus();
     } else {
        alert('Erro, valor incorreto');
        form.inName.value = "";
        form.inLevel.value = "";
        form.inName.focus();
     }
})



