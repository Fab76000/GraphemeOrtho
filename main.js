


var files = [
    "a",
    "à",
    "â",
    "i",
    "î",
    "ï",
    "y",
    "e",
    "eu",
    "eo",
    "oeu",
    "u",
    "û",
    "ü",
    "o",
    "eau",
    "au",
    "ô",
    "an",
    "en",
    "am",
    "em",
    "on",
    "om",
    "oi",
    "oy",
    "oin",
    "in",
    "un",
    "ain",
    "ein",
    "yn",
    "aim",
    "um",
    "ym",
    "ou"

]
//initialisation du compteur associé a chaque mot
var i = -1;
var cpt = [];
var tours = 0;
var gagne = 0;

while (files[++i]) {
    files[i] = [files[i]];
    files[i]['count'] = 0;
}


//Fonction de tri sur compteur à commenter si on ne veut plus les scores par graphème
function sortmots(a, b) {
    return (a.count > b.count) ? 1 : -1;
}

function nouv_mot(trouve) {
    tours++;
    var nb = Math.floor(Math.random() * files.length);
    document.getElementById('mot').innerHTML = files[nb];
    //incrément des compteurs  (à commenter si on veut juste le nombre de tirage)
    if (trouve) {
        files[nb].count++;
        gagne++;
        console.log(trouve)
    }


    // tri de l'array
    files.sort(sortmots);
    //affichage du classement:
    var j = -1,
        chaine = [],
        gains = [],
        done = 0;

    while (files[++j]) {
        chaine.push(files[j][0] + " tiré " + files[j].count + " fois")
        gains.push(files[j].count);
    }
    gains.sort();
    done = gains[0];
    document.getElementById('res').innerHTML = "Tirages : " + tours + "<br/>Mots trouvés: " + gagne + "<br/>" + ((done > 0) ? "Tous les Mots ont été tirés au moins " + done + " fois <br/>" : "") + chaine.join("<br/>");

}

$(function () {
    $('#next').on('click', function () {
        nouv_mot(true);
    });
    $('#pass').on('click', function () {
        nouv_mot(false);
    });

});
var filesC = [
    "b",
    "ca",
    "co",
    "cu",
    "que",
    "qui",
    "quy",
    "k",
    "cc",
    "d",
    "f",
    "ff",
    "ph",
    "ga",
    "go",
    "gu",
    "gue",
    "gui",
    "guy",
    "h",
    "j",
    "ge",
    "gi",
    "gy",
    "gea",
    "geo",
    "l",
    "ll",
    "m",
    "mm",
    "n",
    "nn",
    "p",
    "pp",
    "r",
    "rr",
    "s",
    "ss",
    "sc",
    "ce",
    "ci",
    "cy",
    "ça",
    "ço",
    "çu",
    "tion",
    "t",
    "tt",
    "v",
    "w",
    "x",
    "gn",
    "ill",
    "z",
    "isa",
    "iso",
    "ésu",
    "osi",
    "euil",
    "euille",
    "eil",
    "eille",
    "ail",
    "aille",
    "oya",
    "iyo",
    "éya"
]
//initialisation du compteur associé a chaque mot
var m = -1;
var cpt2 = [];
var tours2 = 0;
var gagne2 = 0;

while (filesC[++m]) {
    filesC[m] = [filesC[m]];
    filesC[m]['count2'] = 0;
}


//Fonction de tri sur compteur à commenter si on ne veut plus les scores par graphème
function sortmots(a, b) {
    return (a.count > b.count) ? 1 : -1;
}

function nouv_mot2(trouve2) {
    tours2++;
    var nb2 = Math.floor(Math.random() * filesC.length);
    document.getElementById('mot2').innerHTML = filesC[nb2];
    //incrément des compteurs  (à commenter si on veut juste le nombre de tirage)
    if (trouve2) {
        filesC[nb2].count2++;
        gagne2++;
        console.log(trouve2)
    }


    // tri de l'array
    filesC.sort(sortmots);
    //affichage du classement:
    var n = -1,
        chaine2 = [],
        gains2 = [],
        done2 = 0;

    while (filesC[++n]) {
        chaine2.push(filesC[n][0] + " tiré " + filesC[n].count2 + " fois")
        gains2.push(filesC[n].count2);
    }
    gains2.sort();
    done2 = gains2[0];
    document.getElementById('res2').innerHTML = "Tirages : " + tours2 + "<br/>Mots trouvés: " + gagne2 + "<br/>" + ((done2 > 0) ? "Tous les Mots ont été tirés au moins " + done2 + " fois <br/>" : "") + chaine2.join("<br/>");

}

$(function () {
    $('#next2').on('click', function () {
        nouv_mot2(true);
    });
    $('#pass2').on('click', function () {
        nouv_mot2(false);
    });
});




