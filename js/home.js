const roleLine = document.querySelector('[data-role-line]');
if (roleLine) {
  const roles = ['Software Engineer', 'Data Analyst', 'Thoughtful Builder'];
  let roleIndex = 0;
  window.setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    roleLine.textContent = roles[roleIndex];
  }, 2800);
}
