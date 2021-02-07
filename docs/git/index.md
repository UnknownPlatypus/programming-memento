# Git 

## Introduction

Git est un logiciel de gestion de versions décentralisé : Cela permet d'avoir les données en local mais aussi en remote. 
Git ne repose pas sur un serveur centralisé, mais il utilise un système de connexion pair à pair. Le code informatique développé est stocké non seulement sur l’ordinateur de chaque contributeur du projet, mais il peut également l'être sur un serveur dédié. 

## Git init
---
Initialisation du dossier git. Création du dossier .git

~~~console
git init
~~~

```javascript
alert("A JavaScript Alert!");
var b =3;
```


## Git config
--- 

~~~shell
git config --global user.email "myemail@gmail.com"
git config --global user.name "Thibaut"
~~~

Pour voir la config actuelle :

```shell
git config --list 
```

## Git status
---
`git status` : Renvoie les informations sur le dossier git actuel.
Untracked/new/changed/removed files

## Ajouter/enlever des fichiers du tracking
---
`git add readme.md`  : Le fichier est maintenant traqué
`git add *.html` : Ajoute tout les fichiers html
`git add --all` : Ajoute tout les fichiers (Faire un git status avant pour éviter les erreurs)
`git reset HEAD readme.md` : Annule le dernier git add readme.md. Le fichier est à nouveau non traqué (mais les modifs sont gardés)
`git reset HEAD ` : Annule tout les derniers git add (unstage all)

## Faire un commit
---
`git commit -m "Mon premier commit"`
Ajouter au tracking et commit : `git commit -a -m "Premiere modif"`

## Voir les derniers commit
---
`git log` : Affiche les derniers commit
`git log -n 2` : Affiche les 2 derniers commit
`git log --oneline` : Version condensé avec ID du commit et message
`git log --p readme.md` : Tout les commits associés au fichier readme.md

## Voir les différences avec ancien commits
---
`git diff`