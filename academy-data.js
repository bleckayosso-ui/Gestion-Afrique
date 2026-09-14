/* ============================================================
   GestiON Academy — données des cours
   ------------------------------------------------------------
   Pour brancher une vraie vidéo une fois tournée et mise en
   ligne (YouTube non répertorié ou Vimeo), ajoutez un champ
   videoUrl sur le cours concerné, avec l'URL "embed" fournie
   par la plateforme, par exemple :
     videoUrl: "https://www.youtube.com/embed/XXXXXXXXXXX"
   La fiche de cours (course-detail.html) l'affichera
   automatiquement à la place de l'aperçu illustré.
   ============================================================ */

const icon1 = '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="1.5"/><line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="12" x2="16" y2="12"/></svg>';
const icon2 = '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="9" cy="9" r="1.3" fill="var(--red)" stroke="none"/><circle cx="15" cy="15" r="1.3" fill="var(--red)" stroke="none"/><line x1="8" y1="16" x2="16" y2="8"/></svg>';
const icon3 = '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><circle cx="16" cy="9" r="2.3"/><path d="M3.5 20c0-3.6 2.5-6 5.5-6s5.5 2.4 5.5 6"/><path d="M13.5 20c0-2.8 1.7-4.8 4-5.2"/></svg>';
const icon4 = '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="12" height="15" rx="1"/><line x1="7" y1="7" x2="13" y2="7"/><line x1="7" y1="11" x2="13" y2="11"/><circle cx="16" cy="16" r="4"/><line x1="19" y1="19" x2="22" y2="22"/></svg>';
const icon5 = '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="20" x2="4" y2="13"/><line x1="9.5" y1="20" x2="9.5" y2="7"/><line x1="15" y1="20" x2="15" y2="15"/><line x1="20" y1="20" x2="20" y2="4"/></svg>';
const icon6 = '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="3" x2="12" y2="19"/><line x1="5" y1="7" x2="19" y2="7"/><path d="M5 7l-3 6a3 3 0 0 0 6 0z"/><path d="M19 7l-3 6a3 3 0 0 0 6 0z"/><line x1="8" y1="21" x2="16" y2="21"/></svg>';
const icon7 = '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21v-9"/><path d="M12 12c0-4 3-6 6-6 0 4-2 6-6 6z"/><path d="M12 15.5c0-2.8-2.2-4.8-5-4.8 0 3.1 1.8 5 5 5z"/></svg>';
const icon8 = '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l16-7v16l-16-7z"/><path d="M3 11v5a3 3 0 0 0 3 3"/></svg>';
const icon9 = '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><line x1="6.7" y1="7.2" x2="10.5" y2="16.4"/><line x1="17.3" y1="7.2" x2="13.5" y2="16.4"/><line x1="7" y1="6" x2="17" y2="6"/></svg>';
const icon10 = '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10l8-5 8 5-8 5-8-5z"/><path d="M8 12.5V17c0 1.4 4 3 4 3s4-1.6 4-3v-4.5"/></svg>';
const icon11 = '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2" fill="var(--red)" stroke="none"/></svg>';

const courses = [
  {slug:"compta-fondamentaux", title:"Les fondamentaux de la comptabilité pour non-comptables", cat:"Comptabilité", level:"Débutant", duration:"1h40", modules:4, price:0, cert:true, icon:icon1, char:"char-01", instructor:"Amina Kouassi"},
  {slug:"creer-entreprise-benin", title:"Créer son entreprise au Bénin : le guide complet", cat:"Création d'entreprise", level:"Débutant", duration:"2h10", modules:6, price:0, cert:true, icon:icon7, char:"char-04", instructor:"Yann Fiacre"},
  {slug:"tva-benin", title:"Comprendre la TVA au Bénin", cat:"Fiscalité", level:"Débutant", duration:"1h20", modules:4, price:0, cert:false, icon:icon2, char:"char-02", instructor:"Marius Adjovi"},
  {slug:"bases-controle-gestion", title:"Les bases du contrôle de gestion", cat:"Contrôle de gestion", level:"Débutant", duration:"1h30", modules:4, price:0, cert:false, icon:icon5, char:"char-02", instructor:"Marius Adjovi"},
  {slug:"intro-ia-pme", title:"Introduction à l'IA pour les PME", cat:"IA & outils", level:"Débutant", duration:"1h15", modules:3, price:0, cert:false, icon:icon9, char:"char-04", instructor:"Yann Fiacre"},

  {slug:"marketing-pme", title:"Stratégie marketing pour petites entreprises", cat:"Marketing", level:"Débutant", duration:"2h00", modules:5, price:25000, cert:false, icon:icon8, char:"char-04", instructor:"Yann Fiacre"},
  {slug:"recrutement", title:"Recruter et intégrer sans se tromper", cat:"Ressources humaines", level:"Intermédiaire", duration:"2h45", modules:5, price:35000, cert:false, icon:icon3, char:"char-03", instructor:"Sophie Dossou"},
  {slug:"controle-gestion-pme", title:"Contrôle de gestion pour dirigeants de PME", cat:"Contrôle de gestion", level:"Intermédiaire", duration:"3h20", modules:6, price:40000, cert:false, icon:icon5, char:"char-02", instructor:"Marius Adjovi", course:true},
  {slug:"paie-administration", title:"Paie et administration du personnel", cat:"Ressources humaines", level:"Intermédiaire", duration:"2h50", modules:6, price:45000, cert:false, icon:icon3, char:"char-03", instructor:"Sophie Dossou"},
  {slug:"excel-reporting", title:"Excel pour le reporting financier", cat:"Excel", level:"Avancé", duration:"4h10", modules:8, price:45000, cert:false, icon:icon5, char:"char-02", instructor:"Marius Adjovi"},
  {slug:"piloter-projet", title:"Piloter un projet de A à Z", cat:"Gestion de projet", level:"Intermédiaire", duration:"3h00", modules:6, price:50000, cert:false, icon:icon6, char:"char-04", instructor:"Yann Fiacre"},
  {slug:"contrats-commerciaux", title:"Rédiger ses premiers contrats commerciaux", cat:"Juridique", level:"Intermédiaire", duration:"2h30", modules:5, price:50000, cert:false, icon:icon6, char:"char-03", instructor:"Sophie Dossou"},
  {slug:"powerbi-dashboard", title:"Power BI : construire son premier tableau de bord", cat:"Power BI", level:"Intermédiaire", duration:"3h30", modules:6, price:55000, cert:false, icon:icon5, char:"char-02", instructor:"Marius Adjovi"},
  {slug:"finance-entreprise", title:"Finance d'entreprise : lire ses états financiers", cat:"Finance", level:"Intermédiaire", duration:"2h50", modules:5, price:55000, cert:false, icon:icon1, char:"char-01", instructor:"Amina Kouassi"},
  {slug:"leadership-management", title:"Leadership et management d'équipe", cat:"Management", level:"Intermédiaire", duration:"3h10", modules:6, price:65000, cert:false, icon:icon3, char:"char-03", instructor:"Sophie Dossou"},
  {slug:"audit-rh", title:"Audit RH : conduire une mission pas à pas", cat:"Audit", level:"Avancé", duration:"4h20", modules:7, price:95000, cert:false, icon:icon4, char:"char-03", instructor:"Sophie Dossou"},
  {slug:"audit-financier", title:"Audit financier : méthodologie et outils", cat:"Audit", level:"Avancé", duration:"5h00", modules:8, price:110000, cert:false, icon:icon4, char:"char-01", instructor:"Amina Kouassi"},
  {slug:"transformation-digitale", title:"Transformation digitale : automatiser sa PME", cat:"Transformation digitale", level:"Avancé", duration:"4h40", modules:7, price:120000, cert:false, icon:icon9, char:"char-04", instructor:"Yann Fiacre"},
  {slug:"conformite-juridique", title:"Conformité et gestion des risques juridiques", cat:"Juridique", level:"Avancé", duration:"5h10", modules:8, price:130000, cert:false, icon:icon6, char:"char-03", instructor:"Sophie Dossou"},
  {slug:"entrepreneuriat-complet", title:"Programme complet Entrepreneuriat : de l'idée au business plan", cat:"Entrepreneuriat", level:"Avancé", duration:"6h30", modules:10, price:150000, cert:false, icon:icon7, char:"char-04", instructor:"Yann Fiacre"},
];
