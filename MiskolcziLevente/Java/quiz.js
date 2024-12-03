const helyes_valaszok = [1,3,1,4,2,1];
let pontok = 0;
let kerdes_szama = 1;
kovetkezo = true;

document.getElementById("tovabb").addEventListener("click", kovetkezo_kerdes);
document.getElementById("valasz1").addEventListener("click", function() {valaszkatintas(1)});
document.getElementById("valasz2").addEventListener("click", function() {valaszkatintas(2)});
document.getElementById("valasz3").addEventListener("click", function() {valaszkatintas(3)});
document.getElementById("valasz4").addEventListener("click", function() {valaszkatintas(4)});







function jo_hater(a) {
    document.querySelector(`.valasz${a}`).style.backgroundColor = "light-dark( rgb(0, 255, 0),  rgb(0, 255, 0))";
}

function rossz_hater(a) {
    document.querySelector(`.valasz${a}`).style.backgroundColor = "light-dark( rgb(255, 0, 0),  rgb(255, 0, 0))";
}
function kovetkezo_kerdes(){
    if (kovetkezo == false){
        document.querySelector(`.valasz${1}`).style.backgroundColor = "light-dark( rgb(173, 255, 141),rgb(129, 211, 97))";
        document.querySelector(`.valasz${2}`).style.backgroundColor = "light-dark( rgb(173, 255, 141),rgb(129, 211, 97))";
        document.querySelector(`.valasz${3}`).style.backgroundColor = "light-dark( rgb(173, 255, 141),rgb(129, 211, 97))";
        document.querySelector(`.valasz${4}`).style.backgroundColor = "light-dark( rgb(173, 255, 141),rgb(129, 211, 97))";
        kovetkezo = true;
        switch (kerdes_szama) {
           case 1:
                document.getElementById("pontok_szoveg").innerHTML = `Pontszám:`;
                document.getElementById("kov_szoveg").innerHTML = "Következő kérdés";
                document.getElementById("kerdes_szoveg").innerHTML = "1. Miért fontos a rostok fogyasztása?";
                document.getElementById("valasz_szoveg_1").innerHTML = "Segít a bélflóra egészségének fenntartásában.";
                document.getElementById("valasz_szoveg_2").innerHTML = "Növeli a kalória bevitelt.";
                document.getElementById("valasz_szoveg_3").innerHTML = "Megakadályozza a hidratációt.";
                document.getElementById("valasz_szoveg_4").innerHTML = "Csökkenti a vitaminok felszívódását.";
                break;
            case 2:
                document.getElementById("kerdes_szoveg").innerHTML = "2. Mi az egészséges zsírok szerepe a táplálkozásban?";
                document.getElementById("valasz_szoveg_1").innerHTML = "Energiát biztosítanak a szervezet számára.";
                document.getElementById("valasz_szoveg_2").innerHTML = "Növelik a koleszterinszintet minden esetben.";
                document.getElementById("valasz_szoveg_3").innerHTML = "Segítenek a vízoldékony vitaminok felszívódásában.";
                document.getElementById("valasz_szoveg_4").innerHTML = "Csökkentik a szív- és érrendszeri betegségek kockázatát.";
                break;
            case 3:
                document.getElementById("kerdes_szoveg").innerHTML = "3. Miért fontos a napi vízfogyasztás?";
               document.getElementById("valasz_szoveg_1").innerHTML = "Csökkenti a kalcium felszívódását.";
                document.getElementById("valasz_szoveg_2").innerHTML = "Növeli a vércukorszintet.";
                document.getElementById("valasz_szoveg_3").innerHTML = "Segít a méregtelenítésben és az emésztésben.";
                document.getElementById("valasz_szoveg_4").innerHTML = "Lassítja az anyagcserét.";
                break;
            case 4:
                document.getElementById("kerdes_szoveg").innerHTML = "4. Milyen hatással van a túlzott cukorfogyasztás a szervezetre?";
                document.getElementById("valasz_szoveg_1").innerHTML = "Segít a bélflóra egészségének javításában.";
               document.getElementById("valasz_szoveg_2").innerHTML = "Csökkenti a szívbetegségek kockázatát.";
                document.getElementById("valasz_szoveg_3").innerHTML = "Elősegíti az izomtömeg növekedését.";
                document.getElementById("valasz_szoveg_4").innerHTML = "Emelkedik a vércukorszint és inzulinrezisztenciához vezethet.";
                break;
            case 5:
                document.getElementById("kerdes_szoveg").innerHTML = "5. Miért fontos a vitaminok fogyasztása?";
                document.getElementById("valasz_szoveg_1").innerHTML = "Elősegítik az emésztést és a tápanyagok felszívódását.";
                document.getElementById("valasz_szoveg_2").innerHTML = "Segítenek az immunrendszer működésében.";
               document.getElementById("valasz_szoveg_3").innerHTML = "Növelik a kalóriabevitelt.";
                document.getElementById("valasz_szoveg_4").innerHTML = "Csökkentik a fizikai aktivitás szükségességét.";
                break;
            case 6:
                document.getElementById("kerdes_szoveg").innerHTML = "6. Mi az a gluténmentes diéta?";
                document.getElementById("valasz_szoveg_1").innerHTML = "Olyan diéta, amely kizárja a búzában és más gabonákban található glutént.";
                document.getElementById("valasz_szoveg_2").innerHTML = "Egy olyan étkezési szokás, amely kizárja az összes állati eredetű élelmiszert.";
                document.getElementById("valasz_szoveg_3").innerHTML = "Egy diéta, amely kizárólag zöldségeken alapul.";
                document.getElementById("valasz_szoveg_4").innerHTML = "Egy diéta, amely csökkenti a szénhidrátok bevitelét, de nem érinti a glutént.";
                break;
            case 7:
                document.getElementById("kov_szoveg").innerHTML = "Újraprobálás";
                document.getElementById("pontok_szoveg").innerHTML = `Végső Pontszám: ${pontok}/6`;
                kerdes_szama = 1;
                pontok = 0;
                kovetkezo = false
                break;


    }
    }

    
}


function valaszkatintas(a){
    if (kovetkezo == true) {
        if (kerdes_szama <= 6) {
            if (a === helyes_valaszok[kerdes_szama - 1]) {
                jo_hater(a);
                pontok++;
                
            } else {
                rossz_hater(a);
            }
            kerdes_szama += 1;
            kovetkezo = false;
            document.getElementById("pontok_szoveg").innerHTML = `Pontszám: ${pontok}/6`;
        }  
    }
    
}