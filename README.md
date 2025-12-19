# 📊 Système d'Enquête de Satisfaction Al-Kawthar

Système professionnel d'enquête de satisfaction scolaire multilingue avec exports sécurisés.

## ✨ Fonctionnalités

### 🌍 Interface Multilingue
- **Arabe** (langue par défaut)
- **Français**
- **English**
- Support RTL/LTR automatique

### 📝 Formulaire d'Enquête
- 15 questions de satisfaction
- Échelle de notation : Insatisfait / Satisfait / Très Satisfait
- Champs : Nom du parent, Nom de l'élève, Téléphone
- Zone de commentaires additionnels
- Validation complète des données

### 📊 Tableau de Bord Analytique
- **Statistiques en temps réel** :
  - Nombre total de participants
  - Taux de satisfaction général
  - Question avec le meilleur score
- **Graphique interactif** (Chart.js)
- Design responsive et professionnel

### 🔒 Exports Sécurisés
- **Export Excel** : Tableau complet avec toutes les données
- **Export Word** : Rapport formaté avec statistiques et résultats
- **Protection par mot de passe** : `Alkawthar@2025`
- Modal de saisie sécurisée

## 🎨 Design Professionnel

### Palette de Couleurs
- **Bleu Marine** (#1a2a6c) : Couleur principale
- **Rouge** (#b21f1f) : Couleur secondaire
- **Doré** (#fdbb2d) : Accent
- **Vert** (#27ae60) : Succès

### Animations
- Background gradient animé
- Logo avec effet pulse
- Transitions fluides sur les éléments
- Modals avec effet pop
- Hover effects sur les cartes

### Typographie
- Police principale : **Cairo** (optimisée pour l'arabe)
- Police de secours : Segoe UI, Tahoma

## 🚀 Installation

### Prérequis
- Node.js >= 14.x
- MongoDB
- Git

### Installation locale

```bash
# Cloner le repository
git clone https://github.com/Medcherif01/Enquete.git
cd Enquete

# Installer les dépendances
npm install

# Configurer MongoDB
# Créer un fichier .env
echo "MONGODB_URI=mongodb://localhost:27017/enquete_alkawthar" > .env

# Démarrer le serveur
npm start
```

Le serveur sera accessible sur : http://localhost:3000

## 🌐 Déploiement Vercel

### Configuration
1. Créer un compte sur [Vercel](https://vercel.com)
2. Connecter votre repository GitHub
3. Configurer les variables d'environnement :
   - `MONGODB_URI` : Votre URL MongoDB (MongoDB Atlas recommandé)

### MongoDB Atlas
1. Créer un cluster sur [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Obtenir l'URL de connexion
3. Ajouter l'URL dans les variables d'environnement Vercel

### Déploiement
```bash
# Avec Vercel CLI
npm i -g vercel
vercel
```

Ou utiliser l'interface GitHub de Vercel pour le déploiement automatique.

## 📁 Structure du Projet

```
Enquete/
├── api/
│   └── index.js          # Backend Express + MongoDB
├── public/
│   ├── index.html        # Interface utilisateur
│   ├── script.js         # Logique JavaScript
│   └── style.css         # Styles CSS
├── package.json          # Dépendances
├── vercel.json           # Configuration Vercel
└── README.md            # Documentation
```

## 🔧 Technologies Utilisées

### Frontend
- HTML5
- CSS3 (Animations, Flexbox, Grid)
- JavaScript ES6+
- Chart.js (Graphiques)
- SheetJS (Export Excel)
- Font Awesome (Icônes)
- Google Fonts (Cairo)

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- CORS

## 🔐 Sécurité

### Mot de Passe Export
**Mot de passe actuel** : `Alkawthar@2025`

Pour changer le mot de passe, modifier dans `script.js` :
```javascript
const correctPassword = 'Alkawthar@2025'; // Ligne 251
```

### Validation
- Validation côté client et serveur
- Sanitisation des données
- Protection CORS configurée
- Gestion d'erreurs robuste

## 📊 API Endpoints

### POST /api/submit
Soumettre une nouvelle réponse
```json
{
  "parentName": "string",
  "studentName": "string",
  "phone": "string",
  "answers": {
    "q0": 0-2,
    "q1": 0-2,
    ...
    "q14": 0-2
  },
  "comments": "string"
}
```

### GET /api/results
Récupérer toutes les réponses
```json
[
  {
    "_id": "...",
    "parentName": "...",
    "studentName": "...",
    "phone": "...",
    "answers": {...},
    "comments": "...",
    "date": "2024-01-01T00:00:00.000Z"
  }
]
```

### GET /api/statistics
Obtenir les statistiques
```json
{
  "totalSurveys": 100,
  "averages": [75.5, 82.3, ...],
  "overallSatisfaction": 78.5
}
```

### GET /api/health
Vérifier l'état du serveur
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "mongodb": "Connected"
}
```

## 🎯 Questions de l'Enquête

1. جودة التدريس الأكاديمي / Qualité académique
2. توافر المعلمين وتواصلهم / Disponibilité enseignants
3. الخدمات الإدارية وتجاوبها / Services administratifs
4. نظافة المرافق والمراحيض / Hygiène et propreté
5. أمن وسلامة التلاميذ / Sécurité des élèves
6. جودة المطعم المدرسي / Qualité de la cantine
7. الأنشطة الموازية / Activités extra-scolaires
8. المتابعة الفردية للنتائج / Suivi individuel
9. تجهيزات المختبرات والمعلوميات / Équipements informatiques
10. الانضباط والسلوك العام / Discipline et comportement
11. الجو العام والراحة النفسية / Ambiance générale
12. جودة المقررات والكتب / Supports pédagogiques
13. احترام المواعيد والدقة / Respect des horaires
14. علاقة الإدارة بالأولياء / Relation parents-admin
15. القيمة مقابل السعر / Rapport qualité-prix

## 📱 Responsive Design

Le site est entièrement responsive et optimisé pour :
- 📱 Smartphones
- 📱 Tablettes
- 💻 Ordinateurs de bureau
- 🖥️ Grands écrans

## 🛠️ Maintenance

### Backup Base de Données
```bash
# Export MongoDB
mongodump --uri="mongodb://..." --out=./backup

# Import MongoDB
mongorestore --uri="mongodb://..." ./backup
```

### Logs
Les logs sont affichés dans la console :
- ✅ Succès (vert)
- ❌ Erreurs (rouge)
- 📊 Informations (bleu)

## 📄 Licence

MIT License - Al-Kawthar School © 2024

## 👥 Support

Pour toute question ou assistance :
- Email : support@alkawthar.school
- GitHub Issues : [Créer un ticket](https://github.com/Medcherif01/Enquete/issues)

---

**Développé avec ❤️ pour l'éducation de qualité**
