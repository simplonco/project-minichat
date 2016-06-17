# Projet de MiniT'Chat

Le projet est une **application Web de T'Chat**, les groupes seront définis _aléatoirements_, vous allez utiliser [Firebase](https://www.firebase.google.com/) (une base de données à distance basée sur la technologie `AJAX`) et certains Préprocesseurs CSS : [Less](http://lesscss.org/) & [Sass](http://sass-lang.com/) !

Ce dont vous avez besoin, c'est ce que vous avez déjà appris : `HTML`, `CSS`, `Bootstrap`, `JS` et `jQuery` !

Le premier jour, vous aller vous concentrer sur l'interface et l'expérience utilisateur de l'application, et écrire un cahier des charges / spécifications fonctionnelles (quelques outils pour créer vos mockups <http://mashable.com/2012/06/07/mockup-tools/>).

Et enfin, vous aurez la liberté totale d'utiliser des plugins ou frameworks (ex : [Bootstrap](http://getbootstrap.com/) ou [Foundation](http://foundation.zurb.com/) ou [Material Design Light](https://getmdl.io/)).

## Spécifications fonctionnelles

* [Version française](https://docs.google.com/document/d/1ST1VZgpuEF_Qf739yo94eT_SmayzB5BYdifCaCYbIlU)
* [Version anglaise](https://docs.google.com/document/d/1T89SeKvqGPbgxmVAB4wYddXtoJqpFpFtnhowg9DJ3OA)

## Caractéristiques

C'est un t'chat, vous devez bien sûr laisser les gens discuter ensemble :

* Tout d'abord créer un grand canal global, puis autoriser d'autres canaux comme des discussions privées;
* Permettre aux utilisateurs de choisir un pseudo et peut-être de définir un avatar (vous pouvez utiliser [Gravatar](https://fr.gravatar.com/)) ;
* Que les gens puissent s'envoyer des _Smileys Emoji_, _Liens_, _Photos_, _Vidéos Youtubes_, _Tags d'utilisateurs_, etc.. (vous devrez utiliser les `REGEX`) ;
* Rendre tout cela joli (avec plein de `CSS`) et ne pas oublier que l'application doit être reponsive, pensez à la façon dont elle s'affichera sur les appareils mobiles !

## Conception

Voici quelques conseils et astuces pour vous aider à travailler ensemble sur le même code.

Tout d'abord travailler avec toute l'équipe sur la conception globale de l'application, puis séparer l'équipe, entre par exemple des développeurs Backend et Frontend, une bonne idée est d'utiliser des fonctions de démonstration, par exemple :

```javascript
/* DEMO FUNCTIONS */

var sendMessage = function (message) {
    console.log("DEMO: sendMessage: " + message);
};

var retreiveMessages = function () {
    var messages = [
        { pseudo: "Roméo", message : "Ô Roméo ! Roméo ! pourquoi es-tu Roméo ? Renie ton père et abdique ton nom ; ou, si tu ne le veux pas, jure de m’aimer, et je ne serai plus une Capulet." },
        { pseudo: "Juliette", message : "Dois-je l’écouter encore ou lui répondre ?" }
    ];
    console.log("DEMO: retreiveMessages :" + messages);
    return messages;
};
```

Le but est de commencer à coder l'interface et de tester l'utilisation de ces fonctions et **dans le même temps** un autre membre de l'équipe peut travailler sur les fonctions pour les faire fonctionner avec des données réelles.

Voici le code d'exemple `Javascript` donné sur le site officiel de `Firebase` :

```javascript
// Créé une connexion à votre base de données Firebase
firebase.initializeApp({
    apiKey: "<FIREBASE-API-KEY>",
    authDomain: "<FIREBASE-DOMAIN>.firebaseapp.com",
    databaseURL: 'https://<FIREBASE-DOMAIN>.firebaseio.com/'
});
var myFirebaseRef = firebase.database().ref('/');
// Enregistre les données
ref.set({ name: "Alex Wolfe" });
// Écoute les changements en temps réel
ref.on("value", function(data) {
    var name = data.val().name;
    alert("My name is " + name);
});
```

Firebase est conçu avec un système de mise à jour en temps réel, de sorte que vous pouvez remplacer la fonction `retreiveMessages` par juste une fonction `updateConversation` qui mettra à jour le contenu de la conversation et sera appelé dans la méthode `ref.on`, et bien sûr `sendMessage` utilisera `ref.set`.

## Ressources

**REGEX (Expressions Rationelles)**

* <https://fr.wikipedia.org/wiki/Expression_rationnelle>
* Vous pouvez les tester en ligne avec <https://regex101.com/> & <http://regexr.com/>
* Et pratiquer un peu ici: <https://www.hackerrank.com/domains/regex/>

Par exemple : `:smile_cat:` va être remplacer par `<img src="graphics/emojis/smile_cat.png">`.

**AJAX**

* <https://fr.wikipedia.org/wiki/Ajax_(informatique)>
* Vous pouvez lire les pages de la documentation officielle jQuery <https://api.jquery.com/jquery.get/> & <http://api.jquery.com/jquery.ajax/>
* Et un peu de OpenClassrooms <https://openclassrooms.com/courses/simplifiez-vos-developpements-javascript-avec-jquery/premiers-pas-avec-ajax> & <Https://openclassrooms.com/courses/un-site-web-dynamique-avec-jquery/le-fonctionnement-de-ajax>
