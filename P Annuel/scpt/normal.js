//charger le fichier txt
fetch("normal.txt")
.then(response => response.text())
.then(data => {
    var wordlist =data.split("\n")
    var randomindex =Math.floor(Math.random() * wordlist.length)
    const text = wordlist[randomindex]

    //alert (text)

    var time = 5;
    var downloadTimer = setInterval(function(){
    if(time<= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Entrer le mot que vous avez mémorisez";
        word.style.display = "none";
        t1.style.display = "none";
        t2.style.display = "block";
        mots.style.display = "block";
        submit.style.display = "block";
        suivant.style.display = "block"
        
        var motsinput = document.getElementById("mots")
        var submitbtn = document.getElementById("submit")
        var result = document.getElementById("result")
        var link = document.getElementById("link")

        submitbtn.onclick = function(){
            var insertion = motsinput.value ;
            if (insertion == ''){
                let message = "veuillez saisir un mot"
                result.innerHTML = message.fontcolor("red");
            }
            else{
                if (insertion != text){
                    t2.style.display = "none"
                    document.getElementById("resultat").innerHTML = "RESULTAT"
                    document.getElementById("initial").innerHTML = "le mot initial est : " + text.fontcolor("blue");
                    document.getElementById("write").innerHTML = "vous avez écrit : " + insertion.fontcolor("red");
                    let message = "le mot que vous avez saisi est incorrect"
                    document.getElementById("countdown").innerHTML = message.fontcolor("red");
                    mots.style.display = "none";
                    result.style.display = "none";
                    submit.style.display = "none";
                    link.style.display = "none";
                    suivant.style.display="block"
                    var correspondance=0
                    var ref = text.length / 2
                    for (var i =0 ; i < insertion.length ; i++){
                        if (insertion[i]==text[i]){
                            correspondance +=1
                        }
                    }
                    if (correspondance < ref){
                        var niveau = 'Faible'
                        var pourcentage = correspondance * 100 / text.length
                        document.getElementById("precision").innerHTML = "Niveau de précision :" + niveau.fontcolor('red')
                        document.getElementById("pourcentage").innerHTML = "pourcentage : " + pourcentage + " %"
                    }
                    else{
                        if (correspondance >= ref && correspondance < text.length){
                            var niveau = 'Moyen'
                            var pourcentage = correspondance * 100 / text.length
                            document.getElementById("precision").innerHTML = "Niveau de précision :" + niveau.fontcolor('black')
                            document.getElementById("pourcentage").innerHTML = "pourcentage : " + pourcentage + " %"
                        }
                    }
                }
                else{
                    t2.style.display = "none"
                    mots.style.display = "none"
                    submit.style.display = "none"
                    countdown.style.display = "none"
                    document.getElementById("resultat").innerHTML = "RESULTAT"
                    var felicitation="Félicitation 🎉🎉🎉"
                    var credo = "vous avez trouver le mot"
                    document.getElementById('initial').innerHTML = felicitation.fontcolor('green').fontsize(5) 
                    document.getElementById("write").innerHTML = credo 
                    document.getElementById("precision").innerHTML = text.fontcolor('green').fontsize(10)
                    document.getElementById("pourcentage").innerHTML = "Niveau de précision : " + "Excellent".fontcolor("green")

                }
            }
        }
    }else {
        let sec = time.toString();
        let seconde = sec.fontcolor("red")
        document.getElementById("word").innerHTML = text
        document.getElementById("countdown").innerHTML = "Vous avez " + seconde + " seconds pour Mémoriser le text";
        }
    time -= 1;
    }, 1000);
    
})