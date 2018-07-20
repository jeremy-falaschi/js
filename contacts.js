/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme



var Contact = {
    init: function (nom, prenom){
        this.nom = nom;
        this.prenom = prenom;
    }
    

};

var contact1 = Object.create(Contact);
contact1.init("Lévisse","Carole");

var contact2 = Object.create(Contact);
contact2.init("Nelsonne", "Mélodie");

var contacts = [];
contacts.push(contact1);
contacts.push(contact2);

var gestionnaire = ["1 : Lister les contacts", "2 : Ajouter un contact", "0 : Quitter"];



console.log("bienvenue dans le gestionnaire des contacts !");

for (var i = 0; i < gestionnaire.length; i++){
    console.log(gestionnaire[i]);
};
var option = Number(prompt("Choisissez une option :"));

switch (option){
        
    case 1:
        
        console.log("Voici la liste de tous vos contacts :")
        
        contacts.forEach(function(contact){
            console.log("Nom : " + contact.nom + ", prénom : " + contact.prenom);   
        });
        
        for (var i = 0; i < gestionnaire.length; i++){
            console.log(gestionnaire[i]);
        };
        
        option = Number(prompt("Choisissez une option :"));
        break;
        
            
    case 2:
        var nomDuContact = prompt("Entrez un nom :");
        var prenomDuContact = prompt("Entrez un prenom :");
        
        contacts.push(nomDuContact, prenomDuContact); 
        
        console.log("Le nouveau contact a été ajouté");
        
        for (var i = 0; i < gestionnaire.length; i++){
            console.log(gestionnaire[i]);
        };
        
        option = Number(prompt("Choisissez une option :"));
        break;
        
    case 0:    
        console.log("Au revoir !");
        break;
        
        
    default:
        console.log("Je n'ai pas compris !");
        option = Number(prompt("Choisissez une option :"));

}
