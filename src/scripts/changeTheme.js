const Theme = {
LIGHT: 'light-theme',
DARK: 'dark-theme',
};

const body = document.body
const THEME = localStorage.getItem('theme')
const checkBox = document.getElementById('theme-switch-toggle');
body.classList.add(THEME)

if (THEME === Theme.DARK) {
    checkBox.checked = 'checked'
}


checkBox.addEventListener('change', onSwitchColorTheme);

function onSwitchColorTheme(e) {
    if (e.target.checked) {
        localStorage.setItem('theme', Theme.DARK)
      
        body.classList.toggle(Theme.DARK)
        body.classList.remove(Theme.LIGHT)
    } else {
        localStorage.setItem('theme', Theme.LIGHT)
        
        body.classList.toggle(Theme.LIGHT)
        body.classList.remove(Theme.DARK)
    };
 
}
