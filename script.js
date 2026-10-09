document.addEventListener('DOMContentLoaded', () => {
  const yesBtn = document.getElementById('yesBtn');
  const againBtn = document.getElementById('againBtn');
  const question = document.getElementById('question');
  const subtext = document.getElementById('subtext');

  // Option 1 : "Oui, je te pardonne" (AVEC confettis)
  if (yesBtn) {
    yesBtn.onclick = function() {
      const buttonsContainer = document.querySelector('.buttons');
      if (buttonsContainer) buttonsContainer.style.display = 'none';

      const heartIcon = document.querySelector('.heart-icon');
      if (heartIcon) heartIcon.style.display = 'none';

      if (question) question.textContent = "Merci \u{1FAF6}.";
      if (subtext) subtext.textContent = "Et merci d'avoir répondu franchement.";

      // Confettis uniquement pour cette option
      if (typeof confetti === 'function') {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      }
    };
  }

  // Option 2 : "Je réfléchis" (SANS confettis)
  if (againBtn) {
    againBtn.onclick = function() {
      const buttonsContainer = document.querySelector('.buttons');
      if (buttonsContainer) buttonsContainer.style.display = 'none';

      const heartIcon = document.querySelector('.heart-icon');
      if (heartIcon) heartIcon.style.display = 'none';

      if (question) question.textContent = "C'est compris.";
      if (subtext) subtext.textContent = "Prends le temps qu'il te faut.";

      // Aucun code de confetti ici
    };
  }
});