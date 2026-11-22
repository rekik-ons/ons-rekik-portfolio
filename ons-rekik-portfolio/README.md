# Ons Rekik — Personal Portfolio

Portfolio interactif construit avec React + Vite.

## Installation

```bash
npm install
npm run dev
```

Ouvre ensuite l'URL locale affichée par Vite (souvent http://localhost:5173).

## Build de production

```bash
npm run build
npm run preview
```

## Personnalisation importante

Ouvre `src/main.jsx` et modifie l'objet `PROFILE` en haut du fichier :

- `email` : adresse email qui recevra les messages (le formulaire ouvre l'application email avec un mailto).
- `phone` : numéro de téléphone.
- `github` : URL exacte de ton profil GitHub.
- `cv` : chemin vers ton CV. Place le fichier dans `public/cv-ons-rekik.pdf` (crée le dossier `public` si nécessaire).

Les liens GitHub des projets sont des exemples à remplacer par les URL réelles de chaque repository. Les certifications sont laissées comme modèle à compléter : ajoute le nom, l'organisme, la date et le lien de vérification.

Le bouton de formulaire utilise `mailto:` : il prépare le message dans le logiciel de messagerie de la personne. Pour un envoi direct sans ouvrir son application email, connecte un service de formulaire comme Formspree et remplace la fonction `submitMessage`.
