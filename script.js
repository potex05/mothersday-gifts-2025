function showModal() {
  document.getElementById("codeModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("codeModal").style.display = "none";
}

function scrollToDetails() {
  const details = document.getElementById("details");
  if (details) {
    details.scrollIntoView({ behavior: "smooth" });
  }
}
