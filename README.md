### Sujet de TP : **Création d'une Application React dynamique**

#### **Thème : Application de gestion et visualisation de données**
Vous allez créer une application web dynamique en React qui utilise toutes les notions étudiées durant la semaine. Le thème est libre (Detective Conan, recettes de cuisine, gestion de films, etc.), mais l'application doit répondre aux critères suivants.

---

### **Consignes principales (obligatoires)**

1. **Structure de l'application :**
   - L'application doit comporter **au moins 3 pages différentes** (exemple : Accueil, Liste des éléments, Détails d'un élément).
   - Navigation entre les pages avec `react-router`.

2. **Récupération et affichage de données :**
   - Utiliser `axios` pour faire une requête GET vers une API publique (ex. : [JSONPlaceholder](https://jsonplaceholder.org/), [PokéAPI](https://pokeapi.co/), [TheMealDB](https://www.themealdb.com/api.php), et merci à **Maxence** pour le partage de ce lien: [Public APIs](https://github.com/public-apis/public-apis?tab=readme-ov-file/)).
   - Afficher une **liste d'éléments** récupérés de l'API sur une page dédiée.

3. **Affichage des détails d'un élément :**
   - Lorsque l'utilisateur clique sur un élément de la liste, il est redirigé vers une page de détails grâce à `useParams`.
   - Afficher les informations détaillées de l'élément (nom, description, image, etc.).

4. **Gestion d'état global avec Redux Toolkit :**
   - Utiliser Redux Toolkit pour gérer une partie de l'état global de l'application (par exemple : favori, compteur, etc.).
   - Au moins **deux actions dispatchées** doivent modifier l'état global.

5. **Interaction utilisateur avec `useState` :**
   - Ajouter au moins une fonctionnalité interactive où l'utilisateur peut modifier des données locales.

6. **Utilisation de `useEffect` :**
   - Utiliser `useEffect` pour gérer les effets secondaires (par exemple : récupérer des données au montage du composant, écouter les changements d'une variable).

7. **Déploiement :**
   - Héberger l'application sur **GitHub Pages**.
   - Fournir un lien fonctionnel vers le projet et son repository.

**A savoir :**

Vous êtes sur du **React**, donc, découpez votre application en components, utilisez les props, les states, les hooks, les stores, etc. pour rendre votre application dynamique et interactive.
Plus il y a de petits components, plus votre application sera modulaire et facile à maintenir ! 🧩

---

### **Bonus (optionnels)**

N'importe quoi que vous considérez être sympathique à ajouter ! Voici quelques idées :

- **Animations :** Ajouter des animations pour rendre l'application plus vivante.
- **Pagination :** Ajouter une pagination pour afficher les éléments de l'API par page.
- **Recherche :** Ajouter une barre de recherche pour filtrer les éléments de la liste.
- **Tri :** Ajouter des boutons pour trier les éléments par ordre alphabétique, date, etc.
- **Dark Mode :** Ajouter un mode sombre pour l'application.
- **Design :** Utiliser des bibliothèques de composants (Material-UI, Ant Design, etc.) pour améliorer le design.

Bien entendu, ces bonus sont optionnels, et vous pouvez ajouter d'autres fonctionnalités qui vous semblent intéressantes ou amusantes !

Bon courage et amusez-vous bien ! 🎉
N'oubliez pas, si vous avez des questions ou besoin d'aide, n'hésitez pas à demander !
