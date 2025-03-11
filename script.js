const message = `
  Meu amor por você cresce a cada segundo,
  Como as estrelas que brilham no céu profundo.
  Seu sorriso ilumina até os dias mais escuros,
  Meu coração pulsa por você, em passos puros.

  Em você, encontro paz e uma razão para sonhar,
  Cada momento ao seu lado é o que quero guardar.
  Você é meu mundo, minha inspiração e minha luz,
  Meu coração, para sempre, a você se conduz.

  Prometo te amar em cada novo amanhecer,
  Ser seu porto seguro, nunca te esquecer.
  Nosso amor é eterno, como o céu e o mar,
  Para sempre, com você, eu quero estar.
`;

document.getElementById("revealButton").addEventListener("click", () => {
  const textElement = document.getElementById("message");
  textElement.innerHTML = message.replace(/\n/g, "<br>");
  textElement.style.opacity = 1;

  // Exibe a pergunta após a mensagem ser revelada...
  document.getElementById("question").classList.remove("hidden");
});

document.getElementById("noButton").addEventListener("click", () => {
  // Remove o botão "Não" ao clicar nele
  document.getElementById("noButton").style.display = "none";
});

document.getElementById("yesButton").addEventListener("click", () => {
  alert("Você aceitou! ❤️");
});

// torça para ela aceitar
