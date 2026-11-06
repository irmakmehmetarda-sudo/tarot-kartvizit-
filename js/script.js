const card = document.getElementById("tarotCard");

card.addEventListener("click", () => {
  const opened = card.classList.toggle("is-open");
  card.setAttribute("aria-expanded", String(opened));
  const tarotWrap = document.querySelector(".tarot-wrap");

tarotWrap.classList.remove("is-revealing");
void tarotWrap.offsetWidth;

if (opened) {
  tarotWrap.classList.add("is-revealing");
}
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
