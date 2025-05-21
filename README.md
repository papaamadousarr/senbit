# SenBit Portfolio

Site web vitrine de SenBit, une entreprise sénégalaise spécialisée dans la digitalisation et l'innovation technologique.

## Technologies utilisées

- React 18
- TypeScript
- Tailwind CSS
- Lucide React (icônes)
- Framer Motion (animations)
- Jest & React Testing Library (tests)
- Vercel (déploiement)

## Fonctionnalités

- Design responsive
- Animations avancées avec Framer Motion
- Navigation fluide
- Formulaire de contact
- Optimisation des images
- Tests unitaires
- Déploiement automatisé
- Sections interactives :
  - Accueil
  - Mission
  - LandChain (projet phare)
  - Vision
  - Partenaires
  - Témoignages
  - Contact

## Installation

1. Cloner le repository :
```bash
git clone https://github.com/votre-username/senbit-portfolio.git
cd senbit-portfolio
```

2. Installer les dépendances :
```bash
npm install
```

3. Lancer le serveur de développement :
```bash
npm start
```

L'application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000).

## Tests

Pour lancer les tests :
```bash
# Lancer les tests en mode watch
npm test

# Générer un rapport de couverture
npm run test:coverage
```

## Structure du projet

```
senbit-portfolio/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── animations/
│   │   │   └── FadeIn.tsx
│   │   ├── common/
│   │   │   └── OptimizedImage.tsx
│   │   ├── __tests__/
│   │   │   └── SenBitPortfolio.test.tsx
│   │   └── SenBitPortfolio.tsx
│   ├── index.tsx
│   └── index.css
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── jest.config.js
```

## Optimisations

- Images optimisées avec chargement progressif
- Animations optimisées avec Framer Motion
- Code splitting automatique
- Lazy loading des composants
- Compression des assets
- Cache des ressources statiques
- Tests de performance (Lighthouse)

## Déploiement

Le site est déployé automatiquement sur Vercel à chaque push sur la branche main.

Pour déployer manuellement :
```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

## Scripts disponibles

- `npm start` : Lance le serveur de développement
- `npm build` : Crée une version de production
- `npm test` : Lance les tests
- `npm run test:coverage` : Génère un rapport de couverture des tests
- `npm eject` : Éjecte la configuration Create React App

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## Contact

SenBit - [contact@senbit.sn](mailto:contact@senbit.sn)

Site web : [https://senbit.sn](https://senbit.sn) 