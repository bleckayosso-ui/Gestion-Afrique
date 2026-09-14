/* ============================================================
   GestiON Afrique — couche de données côté navigateur (app.js)
   ------------------------------------------------------------
   Ceci simule un backend pour rendre l'espace client réellement
   utilisable dans le navigateur : création de compte, connexion,
   devis, documents, tickets, missions sont sauvegardés avec
   localStorage. C'est un vrai stockage persistant (les données
   restent après fermeture du navigateur), mais il reste LOCAL À
   CE NAVIGATEUR/APPAREIL : deux personnes sur deux ordinateurs
   ne voient pas les mêmes comptes. Pour un vrai multi-utilisateur
   partagé, il faut un serveur + une base de données (schéma déjà
   fourni dans schema.sql) — ce fichier n'est pas ce serveur.
   ============================================================ */

const DB_KEY = 'gestion_afrique_db_v1';

function loadDB() {
  let db = JSON.parse(localStorage.getItem(DB_KEY) || 'null');
  if (!db) {
    db = {
      users: [
        { id: 'u1', email: 'demo@societeabc.com', password: 'demo1234',
          firstName: 'Jean', lastName: 'Kpodji', companyName: 'Société ABC', country: 'Bénin' }
      ],
      session: null,
      quotes: [],
      tickets: [
        { id: 't1', userId: 'u1', subject: 'Question sur la TVA du T3', priority: 'Haute', status: 'En cours', updated: 'Il y a 2h' },
        { id: 't2', userId: 'u1', subject: 'Accès à l\'espace documentaire', priority: 'Normale', status: 'Ouvert', updated: 'Il y a 1 jour' }
      ],
      documents: [
        { id: 'd1', userId: 'u1', name: 'Relevés bancaires 2025.pdf', mission: 'Audit financier', version: 'v1', date: '10 sept. 2026' },
        { id: 'd2', userId: 'u1', name: 'Grand livre comptable.xlsx', mission: 'Audit financier', version: 'v2', date: '9 sept. 2026' },
        { id: 'd3', userId: 'u1', name: 'Statuts de la société.pdf', mission: 'Création d\'entreprise', version: 'v1', date: '14 août 2026' }
      ],
      missions: [
        { id: 'm1', userId: 'u1', name: 'Audit financier — exercice 2025', responsible: 'Amina Kouassi', avatar: 'avatar-01', status: 'Analyse en cours', statusClass: 'cours', due: '28 sept. 2026' },
        { id: 'm2', userId: 'u1', name: 'Déclaration TVA — T3 2026', responsible: 'Marius Adjovi', avatar: 'avatar-02', status: 'Documents demandés', statusClass: 'attente', due: '15 oct. 2026' }
      ]
    };
    saveDB(db);
  }
  return db;
}

function saveDB(db) {
  localStorage.setItem(DB_KEY, JSON.stringify(db));
}

function signup({ email, password, firstName, lastName, country }) {
  const db = loadDB();
  if (db.users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
    return { error: 'Un compte existe déjà avec cette adresse e-mail.' };
  }
  const user = {
    id: 'u' + Date.now(), email, password, firstName, lastName,
    companyName: (firstName || 'Nouvelle') + ' ' + (lastName || 'entreprise'),
    country: country || 'Bénin'
  };
  db.users.push(user);
  db.session = user.id;
  saveDB(db);
  return { user };
}

function login(email, password) {
  const db = loadDB();
  const user = db.users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
  if (!user) return { error: 'E-mail ou mot de passe incorrect.' };
  db.session = user.id;
  saveDB(db);
  return { user };
}

function logout() {
  const db = loadDB();
  db.session = null;
  saveDB(db);
}

function currentUser() {
  const db = loadDB();
  if (!db.session) return null;
  return db.users.find(u => u.id === db.session) || null;
}

function requireAuth() {
  const u = currentUser();
  if (!u) { window.location.href = 'login.html'; }
  return u;
}

function addQuote(q) {
  const db = loadDB();
  const u = currentUser();
  if (!u) return null;
  q.id = 'q' + Date.now();
  q.userId = u.id;
  q.status = 'Envoyé';
  q.date = new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
  db.quotes.push(q);
  saveDB(db);
  return q;
}
function getQuotes() {
  const db = loadDB(); const u = currentUser();
  return u ? db.quotes.filter(q => q.userId === u.id) : [];
}

function addTicket(t) {
  const db = loadDB();
  const u = currentUser();
  if (!u) return null;
  t.id = 'tk' + Date.now();
  t.userId = u.id;
  t.status = 'Ouvert';
  t.updated = 'À l\'instant';
  db.tickets.push(t);
  saveDB(db);
  return t;
}
function getTickets() {
  const db = loadDB(); const u = currentUser();
  return u ? db.tickets.filter(t => t.userId === u.id) : [];
}

function getDocuments() {
  const db = loadDB(); const u = currentUser();
  return u ? db.documents.filter(d => d.userId === u.id) : [];
}

function getMissions() {
  const db = loadDB(); const u = currentUser();
  return u ? db.missions.filter(m => m.userId === u.id) : [];
}
