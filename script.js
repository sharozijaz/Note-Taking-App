const btn = document.getElementById("add-btn");

const newTab = btn.addEventListener("click", addNew);

function addNew() {
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `<div class="text-element">
<textarea id="text-element">Hello</textarea>
</div>`;
  document.querySelector(".text-box").appendChild(newDiv);
}
