function scrollToDetails() {
  const target = document.querySelector('.ticket-info');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

function showModal() {
  document.getElementById('codeModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('codeModal').style.display = 'none';
}
