// ==========================
// INICIO APP
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  console.log("App cargada 🚀");

  initSearch();
  initCards();
  updateFooter();
});


// ==========================
// BUSCADOR
// ==========================
function initSearch() {
  const input = document.querySelector(".search input");

  if (!input) return;

  input.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();

    if (value.includes("caro")) {
      showToast("💡 Tip: resaltá el valor, no el precio");
    }

    if (value.includes("deportes")) {
      showToast("⚽ Ofrecé el plan con pack deportes");
    }

    if (value.includes("comparar")) {
      showToast("📊 Usá el comparador para cerrar mejor");
    }
  });
}


// ==========================
// CARDS INTERACTIVAS
// ==========================
function initCards() {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.add("active");

      setTimeout(() => {
        card.classList.remove("active");
      }, 200);
    });
  });
}


// ==========================
// TOAST (mensaje flotante)
// ==========================
function showToast(message) {
  let toast = document.querySelector(".toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}


// ==========================
// FOOTER DINÁMICO
// ==========================
function updateFooter() {
  const footer = document.getElementById("footer-text");
  const year = new Date().getFullYear();

  if (footer) {
    footer.textContent = `Directv Ventas © ${year}`;
  }
}
