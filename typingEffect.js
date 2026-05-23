
const targets = document.querySelectorAll(".typing");

async function startTyping() {
  for (const el of targets) {
    const text = el.textContent;
    el.textContent = "";

    el.textContent = "";
    el.style.visibility = "visible";

    await type(el, text);
  }
}

function type(el, text) {
  return new Promise((resolve) => {
    let i = 0;
    
    function step() {
      el.textContent += text[i];
      i++;

      if (i < text.length) {
        setTimeout(step, 50);
      } else {
        resolve();
      }
    }

    step();
  });
}

startTyping();