# Projet T'Chat

![Cutie Cutie](http://static.pratique.fr/images/unsized/ch/chat-propre.jpg)

Le projet est une **application Web de T'Chat**, les groupes seront définis _aléatoirements_, vous allez utiliser <https://www.firebase.com/> (une base de données à distance sur basé sur la technologie `AJAX`) et certains Préprocesseurs CSS <http://lesscss.org/> & <http://sass-lang.com/>!

Le premier jour, vous aller vous concentrer sur l'interface et l'expérience utilisateur de l'application, et écrire un cahier des charges / spécifications fonctionnelles (quelques outils pour créer vos mockups <http://mashable.com/2012/06/07/mockup-tools/>).

Et enfin, vous aurez la liberté totale d'utiliser des plugins ou frameworks (par exemple: <http://getbootstrap.com/> ou <http://foundation.zurb.com/> ou <https://getmdl.io/> ).

## Spécifications fonctionnelle

* FR: https://docs.google.com/document/d/1ST1VZgpuEF_Qf739yo94eT_SmayzB5BYdifCaCYbIlU
* EN: https://docs.google.com/document/d/1T89SeKvqGPbgxmVAB4wYddXtoJqpFpFtnhowg9DJ3OA

## Caractéristiques

C'est un t'chat, vous devez bien sûr laisser les gens discuter ensemble :

* Tout d'abord faire un grand canal global, et après permettre à d'autres canaux comme des discussions privées;
* Permettre aux utilisateurs de choisir un pseudo et peut-être définir un avater => <https://fr.gravatar.com/>;
* Que les gens envoient Emoji Smiley, Liens, Photos, Vidéos Youtube, Tags d'utilisateurs, etc .. (vous allez utiliser `REGEX`);
* Faire tout est superbe et ne pas oublier l'application doivent être sensibles, pensez à la façon dont il se penchera sur les appareils mobiles!

## Conception

Voici quelques conseils et astuces pour vous aider à travailler ensemble sur le même code de projet.

Tout d'abord travailler avec toute l'équipe sur le design global, à côté divisé l'équipe, entre par exemple Backend et Frontend développeurs, la bonne idée est d'utiliser la fonction de démonstration, e.g .:

`` `Javascript
/ * FONCTIONS DEMO * /

var sendMessage = function (message) {
    console.log ( "DEMO: sendMessage:" message);
};

retreiveMessages var = function () {
    messages var = [
        {Pseudo: "Roméo", un message: "Ô Roméo Roméo Pourquoi pas es-tu Roméo Renie ton père et abdique ton nom; ou, Si Tu Ne Le Veux Pas, jure de me aimer, et je ne serai plus de juin!? Capulet. " },
        {Pseudo: "Juliette", le message: "Dois-je l'écouter encore ous lui Répondre" }
    ];
    CONSOLE.LOG ( «DEMO: retreiveMessages:" messages);
    retourner des messages;
};
`` `

Le but est de commencer à coder l'interface et de tester l'utilisation de ces fonctions et ** dans le même temps ** un autre membre de l'équipe peut travailler sur la fonction pour les faire fonctionner avec des données réelles.

Voici le `exemple de code Javascript` donnent sur le` site officiel Firebase`:

`` `Javascript
// Création d'une connexion à votre base de données Firebase
var ref = new Firebase ( "https: // <YOUR-Firebase-APP> .firebaseio.com");
// Enregistrer des données
ref.set ({name: "Alex Wolfe"});
// Écouter des changements en temps réel
ref.on ( "valeur", function (data) {
    var name = data.val () Nom.
    alert ( "Mon nom est" nom);
});
`` `

Firebase ont une conception de mise à jour en temps réel, de sorte que vous pouvez Remplace la fonction `retreiveMessages` par juste une fonction` updateConversation` nous mettrons à jour le contenu de la conversation et sera appelé dans la méthode `ref.on`, et bien sûr` sendMessage `` utilisera ref.set`.

## Ressources

** REGEX (Expressions Régulières) **

* <Https://en.wikipedia.org/wiki/Regular_expression>!
* Vous pouvez le vérifier en ligne avec <https://regex101.com/> & <http://regexr.com/>
* Et de pratiquer un peu ici: <https://www.hackerrank.com/domains/regex/>

** AJAX **

* <Https://en.wikipedia.org/wiki/Ajax_%28programming%29>!
* Vous pouvez lire la documentation officielle jQuery <https://api.jquery.com/jquery.get/> & <http://api.jquery.com/jquery.ajax/>
* Et un peu de OpenClassrooms <https://openclassrooms.com/courses/simplifiez-vos-developpements-javascript-avec-jquery/premiers-pas-avec-ajax> & <Https://openclassrooms.com/courses/un-site-web-dynamique-avec-jquery/le-fonctionnement-de-ajax>
