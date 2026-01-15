var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;

    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
// Collapsible code toggle (already exists)
const codeButtons = document.querySelectorAll(".toggle-code");

codeButtons.forEach(button => {
  button.addEventListener("click", () => {
    const code = button.nextElementSibling;
    if (code.style.display === "block") {
      code.style.display = "none";
      button.textContent = "Show Code";
    } else {
      code.style.display = "block";
      button.textContent = "Hide Code";
    }
  });
});

// Copy code button
const copyButtons = document.querySelectorAll(".copy-code");

copyButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Find the closest parent code-box
    const codeBox = button.closest(".code-box");
    if (!codeBox) return;

    // Find the <code> inside the code-box
    const code = codeBox.querySelector("code");
    if (!code) return;

    // Copy the code content
    navigator.clipboard.writeText(code.textContent)
      .then(() => {
        button.textContent = "Copied!";
        setTimeout(() => {
          button.textContent = "Copy Code";
        }, 1500);
      })
      .catch(err => {
        console.error("Failed to copy text: ", err);
        button.textContent = "Failed 😢";
        setTimeout(() => {
          button.textContent = "Copy Code";
        }, 1500);
      });
  });
});
code.style.backgroundColor = "#065f46"; // dark green highlight
setTimeout(() => code.style.backgroundColor = "#0f172a", 500);
