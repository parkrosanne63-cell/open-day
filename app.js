document
  .querySelectorAll("[data-menu]")
  .forEach(
    (b) =>
      (b.onclick = () =>
        document.querySelector(".menu").classList.toggle("open")),
  );
document
  .querySelectorAll("[data-close]")
  .forEach(
    (b) => (b.onclick = () => b.closest(".mask").classList.remove("open")),
  );
const f = document.getElementById("from"),
  t = document.getElementById("to");
if (f && t) {
  const PRICE = 100,
    fmt = (d) =>
      new Date(d).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
  const upd = () => {
    if (!f.value || !t.value) return;
    const n = Math.round((new Date(t.value) - new Date(f.value)) / 864e5) + 1;
    if (n < 1) return;
    if (n > 30) {
      document.getElementById("bad").classList.add("open");
      return;
    }
    document.getElementById("s-from").textContent = fmt(f.value);
    document.getElementById("s-to").textContent = fmt(t.value);
    document.getElementById("s-n").textContent = n + " days";
    document.getElementById("s-total").textContent = n * PRICE + " DA";
  };
  f.onchange = t.onchange = upd;
  upd();
}
