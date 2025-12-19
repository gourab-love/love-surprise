fetch("data.json")
  .then(res => res.json())
  .then(data => {
    const text = document.getElementById("text");
    const tree = document.getElementById("tree");

    let i = 0;

    function showText() {
      text.innerText = data.messages[i];
      i++;

      if (i < data.messages.length) {
        setTimeout(showText, 3500);
      } else {
        setTimeout(() => {
          tree.classList.remove("hidden");
        }, 3000);
      }
    }

    showText();
  });

