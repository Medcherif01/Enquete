# 🔄 Workflow de l'application - Al-Kawthar Survey

## 📍 Points d'entrée

### 1. **Page racine** `/` ou `/index.html`
- **Comportement** : Redirige automatiquement vers `/select-section.html` si pas de session
- **Vérifie** : Présence de `surveyEmail`, `surveyProgramme`, `surveySection` dans sessionStorage

### 2. **Page de sélection** `/select-section.html`
- **Objectif** : Collecter programme, section et email du parent
- **Étapes** :
  1. Sélection du programme (Français/Britannique/Américain)
  2. Sélection de la section (dynamique selon le programme)
  3. Saisie de l'email
- **Validation** : Email, programme et section obligatoires
- **Stockage** : sessionStorage
- **Redirection** : Vers `/index.html` après validation

### 3. **Page d'enquête** `/index.html`
- **Prérequis** : Session valide (email, programme, section)
- **Affichage** : Bandeau avec programme et section sélectionnés
- **Formulaire** : 15 questions + suggestions + commentaires
- **Soumission** : POST `/api/submit` avec toutes les données
- **Après soumission** : Modal de confirmation

### 4. **Page de résultats** `/results.html`
- **Authentification** : Mot de passe `Alkawthar@2025`
- **Filtrage** : Par programme et/ou section
- **Statistiques** : Graphiques et métriques en temps réel
- **Exports** : Excel et Word (filtrés selon la sélection)

---

## 🔐 Gestion de la session

### SessionStorage utilisé :
```javascript
{
  surveyEmail: "parent@example.com",
  surveyProgramme: "français",  // ou "britannique" ou "américain"
  surveySection: "Primaire"     // ex: "Primaire Filles", "Secondaire Garçons"
}
```

### Vérification de session :
- **Où** : `index.html` (au chargement)
- **Quand** : AVANT la génération des questions
- **Si manquante** : Redirection immédiate vers `select-section.html`

---

## 📊 Structure des données en base

### MongoDB Collection: `surveys`

```javascript
{
  _id: ObjectId,
  parentEmail: "parent@example.com",
  programme: "français",           // lowercase
  section: "Primaire Filles",
  parentName: "Nom du parent",
  studentName: "Nom de l'élève",
  phone: "+212 6XX XXX XXX",
  answers: {
    q0: 2,    // 0=Insatisfait, 1=Satisfait, 2=Très satisfait
    q1: 1,
    // ... q14
  },
  suggestions: {
    q0: "Ma suggestion pour cette question",
    q2: "Autre suggestion",
    // ...
  },
  comments: "Commentaires généraux",
  date: ISODate,
  ipAddress: "X.X.X.X",
  userAgent: "...",
  createdAt: ISODate,
  updatedAt: ISODate
}
```

---

## 🌍 Programmes et sections

### Programme Français (3 sections)
- Primaire
- Secondaire Filles
- Secondaire Garçons

### Programme Britannique (4 sections)
- Primaire Filles
- Primaire Garçons
- Secondaire Filles
- Secondaire Garçons

### Programme Américain (2 sections)
- Secondaire Filles
- Secondaire Garçons

**Total : 9 sections indépendantes**

---

## 🔄 Flux complet d'un utilisateur

```
┌─────────────────────┐
│  Arrivée sur /      │
└──────────┬──────────┘
           │
           ▼
    ┌──────────────┐
    │ Session OK ? │
    └──┬────────┬──┘
       │        │
     NON       OUI
       │        │
       ▼        ▼
  ┌─────────┐  ┌──────────────┐
  │ Redirect│  │ index.html   │
  │ select- │  │ avec bandeau │
  │ section │  │ info         │
  └────┬────┘  └──────┬───────┘
       │              │
       ▼              │
  ┌──────────────┐   │
  │ Étape 1:     │   │
  │ Programme    │   │
  └──────┬───────┘   │
         │           │
         ▼           │
  ┌──────────────┐   │
  │ Étape 2:     │   │
  │ Section      │   │
  └──────┬───────┘   │
         │           │
         ▼           │
  ┌──────────────┐   │
  │ Étape 3:     │   │
  │ Email        │   │
  └──────┬───────┘   │
         │           │
         ▼           │
  ┌──────────────┐   │
  │ Sauvegarder  │   │
  │ sessionStore │   │
  └──────┬───────┘   │
         │           │
         └───────────┤
                     ▼
           ┌──────────────────┐
           │ Formulaire       │
           │ d'enquête        │
           │ 15 questions     │
           └────────┬─────────┘
                    │
                    ▼
           ┌──────────────────┐
           │ POST /api/submit │
           └────────┬─────────┘
                    │
                    ▼
           ┌──────────────────┐
           │ Confirmation     │
           │ + Clear session? │
           └──────────────────┘
```

---

## 🛡️ Sécurité et validation

### Côté client (JavaScript)
- ✅ Validation du format email (regex)
- ✅ Vérification que toutes les questions sont répondues
- ✅ Vérification de la session avant affichage

### Côté serveur (Node.js/Express)
- ✅ Validation des champs requis
- ✅ Validation du format email (regex)
- ✅ Validation du programme (enum: français/britannique/américain)
- ✅ Validation des 15 réponses (q0 à q14)
- ✅ Sanitization des données
- ✅ Enregistrement de l'IP et User-Agent

### Accès aux résultats
- 🔐 Mot de passe : `Alkawthar@2025`
- 🔒 Stocké en dur dans le code (pas de DB)
- 📊 Filtrage par programme/section pour isolation des données

---

## 🐛 Résolution des problèmes

### Problème : "Pattern attribute value is not a valid regular expression"
**Cause** : `pattern="[0-9+\-\s()]+"` - le `+` n'est pas échappé
**Solution** : `pattern="[0-9\+\-\s()]+"`

### Problème : "An invalid form control with name='q10' is not focusable"
**Cause** : Les questions n'étaient pas générées avant la validation du formulaire
**Solution** : Vérifier la session AVANT d'initialiser la langue et générer les questions

### Problème : Redirection en boucle
**Cause** : Appel de `checkSession()` qui redirige, puis rechargement
**Solution** : Vérification simple au début sans appeler de fonctions complexes

---

## 📝 Notes importantes

1. **sessionStorage** est utilisé (pas localStorage) → données perdues à la fermeture du navigateur
2. Les valeurs en base restent en **français** (clés uniques)
3. L'affichage est **traduit** selon la langue (AR/FR/EN)
4. Chaque section est **totalement indépendante** grâce aux filtres MongoDB
5. Le mot de passe des résultats peut être changé dans `results-script.js` ligne ~160

---

## 🚀 Déploiement

### Variables d'environnement nécessaires :
```bash
MONGODB_URI=mongodb://...
PORT=3000 (optionnel, défaut: 3000)
```

### Commandes :
```bash
# Installation
npm install

# Développement local
node api/index.js

# Production (Vercel)
# Fichier vercel.json déjà configuré
```
