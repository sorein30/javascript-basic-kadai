const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  setTimeout(() => {
    const txt = document.querySelector("#text");
    txt.textContent = "ボタンをクリックしました";
  }, 2000);
});
