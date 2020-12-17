const themeSwitcher = document.getElementById('theme-switch-toggle');
const body = document.querySelector('body');
const theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

saveTheme();
themeSwitcher.addEventListener('change', onToggle);

function onToggle(evt) {
    body.classList.toggle(theme.DARK);
    body.classList.toggle(theme.LIGHT);
    localStorage.setItem('themeDARK', evt.target.checked);
};

function saveTheme() {
  const savedToggle = localStorage.getItem('themeDARK');

  if (savedToggle === 'true') {
      body.classList.toggle(theme.DARK);
      themeSwitcher.checked = true;
  } else {
    body.classList.add(theme.LIGHT);
  }
};