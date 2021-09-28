# Olympe


SOMMAIRE

 	Présentation d’Olympe
 	Définitions des besoins et des objectifs
 	MVP et les évolutions potentielles
 	Liste des technologies utilisées
 	Cible de l’application web
 	Les navigateurs compatibles
 	L’arborescence & le parcours utilisateur
 	Les user stories 
   	Les routes et dictionnaire de données
 	L’équipe





1) Présentation d’Olympe

"L'Olympe est traditionnellement le domaine des dieux de la mythologie grecque"

Olympe est une application web qui permet à un utilisateur connecté de se fixer des challenges et de participer à des défis proposés par la plateforme. Une façon efficace, positive de se motiver, lutter contre la procrastination et de se lancer des défis classés par catégories (sportifs, développement personnel, lifestyle, éthique). 

L’objectif à terme est de créer une interaction entre les utilisateurs, de pouvoir obtenir des récompenses et de créer ses défis personnels.

Olympe est inspiré par la mythologie grecque tant au niveau du nommage que de la charte graphique : choix des icônes, de la typo, des couleurs et du design.

La priorité d’Olympe : l’utilisateur. Cette application est pensée pour lui & créée pour lui. L'expérience utilisateur est donc au centre de notre réalisation.













2) Définition des besoins et des objectifs 

2.1 Besoins 

En raison du contexte actuel (covid) l’utilisateur cherche des leviers de motivation pour essayer de nouvelles choses ou atteindre des objectifs personnels.
Un réel besoin de partage d’activité et de lien social qu’on a perdu à cause du contexte actuel.

2.2 Objectifs 

Pour répondre à ce besoin de se challenger, Olympe permet à l’utilisateur connecté de se challenger de manière ludique et intéractive et de le faire sortir de sa zone de confort. Olympe propose une alternative à la routine imposée par la crise sanitaire.
Olympe renforce la motivation de l’utilisateur qui peut voir la participation des autres membres aux même défis que lui 
Créer une communauté avec un sentiment d’appartenance pour le membre




 




3) MVP et les évolutions potentielles  

3.1 Fonctionnalités du site (MVP)

Présentation et affichage de quelques défis aléatoires à la page d’accueil.
S’inscrire à l’aide d’un formulaire.
Se connecter en tant qu’utilisateur ou administrateur.
Se déconnecter.
Afficher un défi.
Sélectionner et ajouter un défi (sur son tableau de bord). ~ limite sprint 1
Afficher son tableau de bord :
afficher les défis sélectionnés. 
visualiser le statut de ses défis (pas commencé / en cours / terminé).
supprimer un défi.
Créer/modifier/supprimer des défis (backoffice - CRUD).
Envoyer un message à l’équipe ou l’admin à l’aide d’un e-mail.

3.2 Evolutions potentielles

Génération de citations de philosophes grecs sur la page d’accueil.
Envoyer un message à l’équipe ou l’admin à l’aide d’un formulaire.
Afficher ou modifier son profil utilisateur. 
Gestion des catégories de défis
Modifier et choisir un avatar en tant qu’utilisateur.
Modifier/supprimer les utilisateurs (backoffice). 
Visualiser le nombre de membres qui participent aux défis.
Créer son propre défi.
Poster un commentaire sur un défi.
Obtenir des récompenses une fois le défi terminé.
Gérer les défis avec un système de progression.
Gestion de la durée des défis.
Partager ses défis avec la communauté.
Effectuer une recherche de défi.
Afficher les challenges en fonction de l'âge.
Accéder à une page “philosophie” avec des citations inspirantes de philosophes grecs (socrate, platon, etc) qu’on peut télécharger comme fond d’écran.
4) Liste des technologies utilisées 

4.1 Front-end
HTML5
Sass
CSS3
React
React Redux
Axios
React Router
Twig 

4.2 Back-end

PHP 7
Symfony 5
SQL
Doctrine


4.3 Versionning

GitHub



5) Cible de l’application web

Coeur de cible 
 
personne dans la vie active
entre 25 et 50 ans.
à l’aise avec les nouvelles technologies
recherche de dépassement de soi 
recherche d’un bien être 
l’envie de sortir de sa zone de confort
l’envie de sortir de la routine “métro - boulot - dodo”
l’envie d’essayer de nouvelles choses

Cible étendue 
étudiants et retraités
à l’aise avec les nouvelles technologies
recherche de dépassement de soi 
recherche d’un bien être 
l’envie de sortir de sa zone de confort
envie de sortir de la routine “métro - boulot - dodo”
essayer de nouvelles choses








6) Les navigateurs compatibles

Priorité

Google Chrome, Mozilla Firefox, Opéra, Edge, Safari.

Secondaire

Internet Explorer


7) L’arborescence & le parcours utilisateur 



8) Les user stories             
En tant que
Je veux
Afin de
utilisateur
avoir accès à la page d'accueil du site
 naviguer dans le site
et accéder aux différentes pages du site
utilisateur ou utilisateur connecté
avoir accès à la page tous les défis
visualiser tous les défis
utilisateur ou utilisateur connecté
avoir accès aux pages catégories
visualiser les défis en fonction des catégories
utilisateur
créer un compte utilisateur
 me connecter à mon profil et tableau de bord
utilisateur ou utilisateur connecté 
contacter l’équipe et l’administrateur
envoyer un message ou poser une question
utilisateur ou utilisateur connecté
en savoir plus sur le site et l’équipe d’Olympe
obtenir des informations
utilisateur connecté
me connecter au site
participer aux défis proposés par la plateforme
utilisateur connecté
me déconnecter au site
sortir du site 
utilisateur connecté
en savoir plus sur un défi depuis la page des défis 
visualiser un défi
utilisateur connecté
en savoir plus sur un défi depuis la page catégorie
visualiser un défi
utilisateur connecté
ajouter un défi à mon tableau de bord depuis la page de tous les défis
participer au défi choisi
utilisateur connecté
ajouter un défi à mon tableau de bord depuis la page catégorie
 participer au défi choisi
utilisateur connecté 
je veux cliquer sur participer depuis la page du défi
commencer le défi et l'ajouter à mon tableau de bord
utilisateur connecté
visualiser les défis auxquels je participe
suivre mes différents défis
utilisateur connecté
accéder au détail d‘un défi depuis mon tableau de bord
d’obtenir plus de détail sur le défi
utilisateur connecté
supprimer un défi depuis mon tableau de bord
ne plus suivre le défi
utilisateur connecté
indiquer mon avancée dans le défis
valider les tâches et terminer le défi
utilisateur connecté
accéder à mon profil utilisateur
visualiser ou modifier les informations
utilisateur connecté
pouvoir choisir et modifier un avatar (parmis ceux proposés par le site)
personnaliser mon profil
En tant qu'utilisateur connecté
 je veux accéder à mon tableau de bord ou mon profil depuis la page d'accueil
pour obtenir ou modifier des informations


1) Les routes et le dictionnaire de données
2) 
Les routes
https://docs.google.com/spreadsheets/d/1qQTDUtvUYfiesefZQAbSM6tCb3xLndqzr-HPyXyPF4E/edit#gid=0

Le dictionnaire de données
https://docs.google.com/spreadsheets/d/1c6NYAALsi0T4z6ODXItHJvg-RcJLkkX94f6rWbQi1_A/edit#gid=0


10) L’équipe

	Cyrielle : Product Owner / Dév front-end React.

	Claire : Git master / Dév PHP Symfony.

	Anibal : Scrum master / Dév PHP Symfony. 

 	Charles : Lead dev front/ Dév front-end React.

	Quentin : Lead dev back / Dév PHP Symfony.

	Morgane : donneuse de coups de fouet.

	Jeremy : helper.











les catégories 

	HERMES : sport

 	ARTEMIS : développement personnel

	APOLLON : lifestyle 

	GAÏA : éthique


# Installation du projet :
 - Yarn install
 - Yarn serve --open
