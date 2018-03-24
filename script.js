function compte_a_rebours() {
    var compte_a_rebours = document.getElementById("compte_a_rebours");

    var date_actuelle = new Date();
    var date_evenement = new Date("Aug 14 17:30:00 2018");
    var total_secondes = (date_evenement - date_actuelle) / 1000;


    if (total_secondes < 0) {
        prefixe = "Compte à rebours terminé il y a ";
        total_secondes = Math.abs(total_secondes);
    }

    if (total_secondes > 0) {
        var jours = Math.floor(total_secondes / (60 * 60 * 24));
        var heures = Math.floor((total_secondes - (jours * 60 * 60 * 24)) / (60 * 60));
        var minutes = Math.floor((total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60))) / 60);
        var secondes = Math.floor(total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60 + minutes * 60)));
    

        var mot_jour = "jours";
        var mot_heure = "heures";
        var mot_minute = "minutes";
        var mot_seconde = "secondes";
    
        
        if (jours == 1) {
            mot_jour = "jour";
        }
 
        if (heures == 1) {
            mot_heure = "heure";
        }
 
        if (minutes == 1) {
            mot_minute = "minute";
        }
          
        if (secondes == 1) {
            mot_seconde = "seconde";
        }

        compte_a_rebours.innerHTML = jours + ' ' + mot_jour + ' ' + heures + ' ' + mot_heure + ' ' + minutes + ' ' + mot_minute + ' ' + ' ' + secondes + ' ' + mot_seconde;
    }

    else {
        compte_a_rebours.innerHTML = "Compte à rebours terminé.";
    }

    var actualisation = setTimeout("compte_a_rebours();", 1000);
}
compte_a_rebours();