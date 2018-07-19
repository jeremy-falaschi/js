var Chien = {
    // initialise le chien
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    
    
    // Renvoie l'aboiement du chien
    aboyer: function () {
        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
    },
    
    
    
    decrire: function () {
    var description = this.nom + " est un " + this.race + " meusurant " + this.taille + " cm. Il aboie : " + this.aboyer();
    }
};


var chien1 = Object.create(Chien);
chien1.init("Crockdur", "matin de Naples", 75);

var chien2 = Object.create(Chien);
chien2.init("Pupuce", "Bichon", 22);

var chien3 = Object.create(Chien);
chien3.init("Medor", "labrador", 58);



var chiens = [];
chiens.push(chien1);
chiens.push(chien2);
chiens.push(chien3);


console.log("Le chenil heberge " + chiens.length + " chien(s) :");

chiens.forEach(function (chien){
    console.log(chien.decrire());
});