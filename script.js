const disclaimer = document.querySelector(".disclaimer");

window.addEventListener("keydown", (event) => {
  //   console.log(event.key);
  //   console.log(event.keyCode);
  //   console.log(event.code);
  disclaimer.innerHTML = `    
<div class="eventkey"><h3>${event.key}</h3>
<small>event key</small>
</div>
<div class="eventkeycode"><h3>${event.keyCode}</h3>
<small>event keyCode</small>
</div>
<div class="eventcode"><h3>${event.code}</h3>
<small>event Code</small>
</div>`;
});
