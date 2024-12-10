Ce qu'il reste à faire:

- fonction d'interpétation du résultat ( reprendre ce qui a déjà été fait )
- affichage du résultat ( par alerte ou une pop up )
- Temps composé: adpater les listes et la fonction d'interprétation
    - Problème à régler = l'accord du participe passé

Notes : 
- plus besoin d'automatiser quoi que ce soit sur les verbes du troisième groupe : ils sont tous prêt dans un json ( à voir car j'ai peur que ça ajoute du travail au niveau de la fonction d'interprétation " usine à gaz ")
- Si obligatoire alors revoir entièrement le moteur de traitement du quizz


NOtes  pour fonction d'interprétation:

Dans le local storage: j'enregistre quoi ? ( reponses et temps ? Pour pouvoir enregistrer les temps les moins maitrisés ? Et pareil on enregistre cette synthese dedans ?)

Si oui on charge le localstorage dans une var dans le onload.

puis au début comment on fait ?

- D'abord on verifie l'égalité entière seulement ? Puis quand c'est fonctionnel on sépare radical et terminaison ? ( un peu plus dur peut être de séparer l'input utilisateur ? Ou alors on compte le nb lettre du radical de la réponse et on sépare comme ça ?)

- Direct méthode 2 ? 


Petit mot de conseil ? 
Test de pos : Afficher vraie alerte ou pop up maison ? ( plus jolie pop up maison mais plus relou à faire ? et à  utiliser ?)

afficher résultat de chaque questions


Pour enregistrer les erreurs: 
 
Puis il faudrait une methode qui créer le test final a partir de ça. 

Pour calcul on peut faire de la proportionalité: on additione tous les scores d'erreur et on établit le nombre de question d'un temps en faisant un calcul tout simple.
( Il faudrait mettre une classe différente dans la balise genre 'all')

on ajoute la méthode de calcul du score d'erreur après l'enregistrement des erreurs courantes dans le local storage.

Il faut aussi s'occuper de la coloration des réponses fausses ( juste pour que ça soit visible. Finalement pas de récap sur le pop up. Pop up juste pour test de positionnement. Sauf si y'a du temps.)

Il faudra tout adapter pour temps composé.

Mardi soir:

- Mettre de coté pop up pour juste le positionnement.
- tester

Mercredi soir

- Temps composé
- Pop up pour test position ( d'ailleurs je conseil pour le test de pos de mettre une classe "pos" dans la balise pour pouvoir faire les actions avec pop up)
- Tester tout et faire les href aux autres pages ( pas tout seul pour être sur de ce que je fait)
- mettre sur un autre git

Evolutions possibles:

- Séparer radical et terminaisons lors de l'affichage de l'erreur 
- pop up avec récap de l'exo ( un peu dur à faire ou en tout cas je vois pas pour l'instant.)
- Temps imparti pour test final


