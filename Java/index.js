const root = document.documentElement;
let sotetmod = localStorage.getItem("sotetmod") === "true";
    

    function szinmodositas() {
        if (sotetmod) {
            root.style.setProperty('color-scheme', 'dark');
            document.getElementById("gomb").src = "Kepek/toggle_on.png";
        } else {
            root.style.setProperty('color-scheme', 'light');
            document.getElementById("gomb").src = "Kepek/toggle_off.png";
        }
    }

szinmodositas();
    

    function gomblenyomas() {
        sotetmod = !sotetmod;
        localStorage.setItem("sotetmod", sotetmod);
        szinmodositas();
    }
    
    document.getElementById("gomb").addEventListener("click", gomblenyomas);