let switchMode = document.getElementById("switchMode")

if (localStorage.getItem('theme')=="true") {
    theme.setAttribute('href', './css/dark-mode.css') 
    switchMode.checked=true
}
switchMode.onchange = function () {
    let theme = document.getElementById("theme")
    if (this.checked) {
        localStorage.setItem('theme',true)
        theme.setAttribute('href','./css/dark-mode.css')
    } else {
        localStorage.setItem('theme',false)
        theme.setAttribute('href','./css/light-mode.css')
    }
}
 