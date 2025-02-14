# Mini Reddit

## Description du projet
Une version miniaturisé du site Reddit.com

## Fonctionnement 
Cette mini version de Reddit permet d'afficher des posts ainsi que leurs commentaires en fonction du subreddit choisit.
Par défaut, il sera affiché les posts populaires (/r/popular).
La colonne de gauche de l'application permet de choisir un subreddit, mais on peut aussi utiliser la barre de recherche en haut à droite afin de rechercher le subreddit que l'on souhaite.

Une fois que l'on a choisit un subreddit, l'appli va afficher les posts de ce subreddit avec les informations suivantes :
- Le nom du subreddit
- Le nom de l'auteur du post
- Depuis combien de temps le post a été créé
- Le titre du post
- La description du post (image, vidéo ou texte)
- Un bouton permettant d'afficher les commentaires. Le bouton affiche aussi le nombre de commentaires.
- Le nombre de likes

</br>

L'utilisateur peut ensuite choisir d'afficher les commentaires en appuyant sur le bouton associé.
Chaque commentaire affichera :
- Le nom de l'utilisateur
- Depuis combien de temps le commentaire a été posté
- Le texte du commentaire
- Le nombres de réponses et un bouton permettant de les afficher
- Le nombre de likes du commentaire

</br>

Si l'on clique sur le bouton permettant d'afficher les réponses du commentaire, l'appli affichera les réponses du commentaire avec les informations suivantes :
- Le nom de l'utilisateur
- Depuis combien de temps la réponse a été postée
- Le texte de la réponse

</br>

Afin de conserver un design minimaliste et simple, la colonne des subreddit ne sera pas affichée sur mobile, il sera donc seulement possible de rechercher un subreddit via la barre de recherche.

## Technologies utilisées
Ce site web a été réalisé grâce aux Framework React et Redux du langage de programmation JavaScript.

## Lien vers le site web
Le site web est déployé à l'adresse suivante : [https://jordandonguy-minireddit.netlify.app](https://jordandonguy-minireddit.netlify.app)