/* botao de menu e nav */
const botaomenu = document.querySelector(".botao-menu"),
  nav = document.querySelector(".nav");

/* ao clicar no botao, aciona a classe 'dis' e desabilita o scroll */
botaomenu.addEventListener("click", () => {
  nav.classList.toggle("dis");
  document.body.classList.toggle("overflow");
});

/* botoes da navbar */
const navbotao1 = document.querySelector(".nav-inicio"),
  navbotao2 = document.querySelector(".nav-habi"),
  navbotao3 = document.querySelector(".nav-port"),
  navbotao4 = document.querySelector(".nav-sobre"),
  navli1 = document.querySelector(".li-inicio"),
  navli2 = document.querySelector(".li-habi"),
  navli3 = document.querySelector(".li-port"),
  navli4 = document.querySelector(".li-sobre");

/* seção de cada botao */
const inicio = document.querySelector(".row"),
  habilidades = document.querySelector(".habilidades"),
  portfolio = document.querySelector(".portfolios"),
  sobre = document.querySelector(".sobre");

/*                 BOTÃO 1                 */
navbotao1.addEventListener('click', () => {
  /* seções */
  portfolio.classList.remove("sec-dis")
  sobre.classList.remove("sec-dis")
  habilidades.classList.remove("sec-dis")
  inicio.classList.add("sec-dis")

  /** botoes  */
  navbotao3.classList.remove("active");
  navbotao2.classList.remove("active");
  navbotao1.classList.add("active");
  navbotao4.classList.remove("active");

  /* li */
  navli1.classList.add("active")
  navli2.classList.remove("active")
  navli3.classList.remove("active")
  navli4.classList.remove("active")

  /* acionar a classe 'dis' e desabilitar scroll */
  nav.classList.toggle("dis");
  document.body.classList.toggle("overflow");
})

/*                 BOTÃO 2                */
navbotao2.addEventListener('click', () => {
  /* seções */
  portfolio.classList.remove("sec-dis")
  inicio.classList.remove("sec-dis")
  sobre.classList.remove("sec-dis")
  habilidades.classList.add("sec-dis")

  /** botoes */
  navbotao3.classList.remove("active");
  navbotao2.classList.add("active");
  navbotao1.classList.remove("active");
  navbotao4.classList.remove("active");

  /* li */
  navli1.classList.remove("active")
  navli2.classList.add("active")
  navli3.classList.remove("active")
  navli4.classList.remove("active")

  /* acionar a classe 'dis' e desabilitar scroll */
  nav.classList.toggle("dis");
  document.body.classList.toggle("overflow");
})

/*                 BOTÃO 3                 */
navbotao3.addEventListener('click', () => {
  /* seções */
  portfolio.classList.add("sec-dis")
  inicio.classList.remove("sec-dis")
  sobre.classList.remove("sec-dis")
  habilidades.classList.remove("sec-dis")

  /** botoes */
  navbotao3.classList.add("active");
  navbotao2.classList.remove("active");
  navbotao1.classList.remove("active");
  navbotao4.classList.remove("active");

  /* li */
  navli1.classList.remove("active")
  navli2.classList.remove("active")
  navli3.classList.add("active")
  navli4.classList.remove("active")

  /* acionar a classe 'dis' e desabilitar scroll */
  nav.classList.toggle("dis");
  document.body.classList.toggle("overflow");
})

/*                 BOTÃO 4                 */
navbotao4.addEventListener('click', () => {
  /* seções */
  portfolio.classList.remove("sec-dis")
  inicio.classList.remove("sec-dis")
  sobre.classList.add("sec-dis")
  habilidades.classList.remove("sec-dis")

  /** botoes */
  navbotao3.classList.remove("active");
  navbotao2.classList.remove("active");
  navbotao1.classList.remove("active");
  navbotao4.classList.add("active");

  /* li */
  navli1.classList.remove("active")
  navli2.classList.remove("active")
  navli3.classList.remove("active")
  navli4.classList.add("active")

  /* acionar a classe 'dis' e desabilitar scroll */
  nav.classList.toggle("dis");
  document.body.classList.toggle("overflow");
})
