const card = document.getElementById("tarotCard");

card.addEventListener("click", () => {
  const opened = card.classList.toggle("is-open");
  card.setAttribute("aria-expanded", String(opened));
  card.setAttribute(
    "aria-label",
    opened ? "Tarot kartını kapat, ön yüzü gör" : "Tarot kartını aç, iletişim bilgilerini gör"
  );
});

// Kartın arkasındaki bağlantılar tıklanabilir kalır; kartı kapatma hareketi
// yalnızca kart yüzeyine yapılan tıklamayla gerçekleşir.
card.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", event => event.stopPropagation());
});
