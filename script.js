function carregar() {
  let msg = window.document.getElementById("msg");
  let img = window.document.getElementById("imagem");
  let data = new Date();
  let hora = data.getHours();

  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 5 && hora < 12) {
    img.src = "./images/manha-300w.jpg";
    document.body.style.background = "#e2cd9f";
    //Bom dia
  } else if (hora >= 12 && hora < 18) {
    //Boa tarde
    img.src = "./images/tarde-300w.jpg";
    document.body.style.background = "#b9846f";
  } else {
    //Boa Noite
    img.src = "./images/noite-300w.png";
    document.body.style.background = "#515154";
  }
}
