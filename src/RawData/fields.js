import { paysList2 } from "./pays"

export const generalUserFields = [
    {
        comp: 'input', label: 'Pseudo', htmlType: 'text', name: 'pseudo',
        value: '', ph: 'AaZz...', errmsgname: "pseudo",
    },
    {
        comp: 'input', label: 'Mail', htmlType: 'mail', name: 'mail',
        value: '', ph: 'monMail@gmail.com', errmsgname: "pseudo",
    },
    {
        comp: 'input', label: 'Mot de passe', htmlType: 'password', name: 'password',
        value: '', ph: 'MonMotdepasse', iPF: true, errmsgname: "mot de passe",
    },
    {
        comp: 'input', label: 'Confirmation ', htmlType: 'password', name: 'password_confirmation',
        value: '', ph: 'MonMotdepasse', iPF: true, errmsgname: "confirmation",
    },
]

// CANDIDAT
export const candidatsFields = {
    nom: {
        comp: 'input', label: 'Nom', htmlType: 'text', name: 'nom',
        value: '', ph: 'AaZz', id: '', errmsgname: "nom", dbKey: 'nom'
    },
    prenom: {
        comp: 'input', label: 'Prenom', htmlType: 'text', name: 'prenom',
        value: '', ph: 'AaZz', id: '', errmsgname: "prenom", dbKey: 'prenom'
    },
    sexe: {
        comp: 'select', label: 'Sexe', name: 'sexe', value: '',
        options: [{ value: 'Homme', ph: 'Homme' }, { value: 'Femme', ph: 'Femme' }],
        id: '', errmsgname: "sexe", dbKey: 'sexe'
    },
    age: {
        comp: 'input', label: 'Date de naissance', htmlType: 'date', name: 'age', value: '',
        ph: '18', id: '', errmsgname: "date de naissance", dbKey: 'date_naissance'
    },
    lieu_de_naissance: {
        comp: 'input', label: 'Lieu de Naissance', htmlType: 'text', name: 'lieu_de_naissance',
        value: '', ph: 'AaZz', id: '', errmsgname: "lieu de naissance", dbKey: 'lieu'
    },
    numero_1: {
        comp: 'input', label: 'Numero de telephone 1', htmlType: 'number', name: 'numero_1',
        value: '', ph: '00000000', id: '', errmsgname: "numero", dbKey: 'tel'
    },
    numero_2: {
        comp: 'input', label: 'Numero de telephone 2', htmlType: 'number', name: 'numero_2',
        value: '', ph: '00000000', id: '', errmsgname: "numero", dbKey: 'tel2'
    },
    niveau: {
        comp: 'select', label: 'Niveau d\'etude', name: 'niveau_detude',
        options: [
            { value: 'CEP', ph: 'CEP' }, { value: 'BEPC', ph: 'BEPC' },
            { value: 'CAP', ph: 'CAP' }, { value: 'BAC', ph: 'BAC' },
            { value: 'BAC + 1', ph: 'BAC + 1' },
            { value: 'BAC + 2', ph: 'BAC + 2' },
            { value: 'BAC + 3', ph: 'BAC + 3' },
            { value: 'Master', ph: 'Master' }, { value: 'Doctorat', ph: 'Doctorat' }],
        value: '', ph: '18', id: '', errmsgname: "niveau d'etude", dbKey: 'niveau'
    },
    filiere: {
        comp: 'input', label: 'Filière et/ou serie', htmlType: 'text', name: 'filière_serie',
        value: '', ph: 'AaZz', id: 'Serie au collège/Lycée,Filère universitaire,etc..',
        errmsgname: "filière ou serie", dbKey: 'filiere'
    },
    ecole: {
        comp: 'input', label: 'Ecole', htmlType: 'text', name: 'ecole',
        value: '', ph: 'Ecole 1,Ecole 2,etc..', id: '', errmsgname: "école", dbKey: 'ecole'
    },
    pays: {
        comp: 'select', label: 'Pays', name: 'pays',
        options: paysList2,
        value: '', ph: '18', id: '', errmsgname: "pays", dbKey: 'pays'
    },
    ville: {
        comp: 'select', label: 'Ville', name: 'ville',
        options: [
            { value: 'Cotonou', ph: 'Cotonou' },
            { value: 'Abomey-calavi', ph: 'Abomey-calavi' },
            { value: 'Parakou', ph: 'Parakou' }
        ],
        value: '', ph: '18', id: '', errmsgname: "ville", dbKey: 'adresse'
    },
    nationalité: {
        comp: 'select', label: 'Nationalité', name: 'nationalité',
        options: [
            { value: 'Beninoise', ph: 'Beninoise' }],
        value: '', ph: '18', id: '', errmsgname: "nationalité", dbKey: 'nationality'
    },
    moyen_de_deplacement: {
        comp: 'select', label: 'Moyen de deplacement', name: 'moyen_de_deplacement',
        options: [
            { value: 'Oui', ph: 'Oui' }, { value: 'Non', ph: 'Non' },
            { value: 'Bientot', ph: 'Bientot' }],
        value: '', ph: '18', id: '', errmsgname: "moyen de deplacement", dbKey: "moyens_de_deplacement"
    },
    situation_matrimonial:
    {
        comp: 'select', label: 'Situation matrimoniale', name: 'situation_matrimoniale',
        options: [
            { value: 'Celibataire sans enfant', ph: 'Celibataire sans enfant' },
            { value: 'Celibataire avec enfant', ph: 'Celibataire avec enfant' },
            { value: 'En couple libre sans enfant', ph: 'En couple libre sans enfant' },
            { value: 'En couple libre avec enfant', ph: 'En couple libre avec enfant' },
            { value: 'Marié(e) sans enfant', ph: 'Marié(e) sans enfant' },
            { value: 'Marié(e) avec enfant', ph: 'Marié(e) avec enfant' }],
        value: '', ph: '18', id: '', errmsgname: "situation matrimoniale", dbKey: "situation_matrimonial"
    },
    poste: {
        comp: 'input', label: 'Poste_envisagé', htmlType: 'text', name: 'poste_envisagé', value: '',
        ph: '18', id: '', errmsgname: "poste envisagé", dbKey: "poste_envisager"
    },
    salaire: {
        comp: 'input', label: 'Salaire envisagé', htmlType: 'number', name: 'salaire_envisagé',
        value: '', ph: 'AaZz', id: '', errmsgname: "salaire envisagé", dbKey: "pretention_salarials"
    },
    domaine_competence: {
        comp: 'select', label: 'Domaine de competence', name: 'domaine_de_competence',
        options: [
            { value: 'Communication', ph: 'Communication' },
            { value: 'Tourisme-Hôtellerie-Restauration', ph: 'Tourisme-Hôtellerie-Restauration' },
            { value: 'Assistanat-Secretariat', ph: 'Assistanat-Secretariat' },
            { value: 'Comptabilité-Gestion-Finance', ph: 'Comptabilité-Gestion-Finance' },
            { value: 'Banque et Asurance', ph: 'Banque et Asurance' },
            { value: 'BTP - Electricité', ph: 'BTP - Electricité' },
            { value: 'Transport-Logistique', ph: 'Transport-Logistique' },
            { value: 'Esthétique-Coiffure-Beauté', ph: 'Esthétique-Coiffure-Beauté' },
            { value: 'Sécurité-Gardiennage', ph: 'Sécurité-Gardiennage' },
            { value: 'Agriculture-Environnement', ph: 'Agriculture-Environnement' },
            { value: 'Santé-Paramédical', ph: 'Santé-Paramédical' },
            { value: 'Mecanique-automobile', ph: 'Mecanique-automobile' },
            { value: 'RH-Formation-Enseignement', ph: 'RH-Formation-Enseignement' },
            { value: 'Commercial-Maketing', ph: 'Commercial-Maketing' },
            { value: "Garde D'enfant", ph: "Garde D'enfant" },
            { value: 'Entretien Menager', ph: 'Entretien Menager' },
            { value: 'Marketting', ph: 'Marketting' },
            { value: 'Informatique : Developpement', ph: 'Informatique : Developpement' },
            { value: 'Informatique : Securité', ph: 'Informatique : Securité' },
            { value: 'Informatique : Reseaux', ph: 'Informatique : Reseaux' },
            { value: 'Sport', ph: 'Sport' },
            { value: 'Autres', ph: 'Autres' },
        ],
        value: '', ph: '18', id: '', errmsgname: "domaine de competence", dbKey: "competences"
    },
    autre_competence: {
        comp: 'textarea', label: 'Autre competence', htmlType: 'number', name: 'autre_competence',
        value: '', ph: 'AaZz', id: '', errmsgname: "autre competence", dbKey: "autre_competence"
    },
    photo1: {
        comp: 'input', label: 'Photo 1', htmlType: 'file', name: 'photo_1',
        value: '', ph: 'AaZz', id: 'photo_1', errmsgname: "photo 1", dbKey: "photo1_url"
    },
    photo2: {
        comp: 'input', label: 'Photo 2', htmlType: 'file', name: 'photo_2',
        value: '', ph: 'AaZz', id: 'photo_2', errmsgname: "photo 2", dbKey: "photo2_url"
    }
}

// ENTREPRISE
export const enterpriseFields = {
    nom_entreprise: {
        comp: 'input', label: "Nom de l'entreprise", htmlType: 'text', name: 'nom_entreprise',
        value: '', ph: 'AaZz', id: '', errmsgname: "nom entreprise", dbKey: 'nom_entreprise'
    },
    mail_entreprise: {
        comp: 'input', label: "Mail de l'entreprise", htmlType: 'mail', name: 'mail_entreprise',
        value: '', ph: 'AaZz', id: '', errmsgname: "mail de l' entreprise", dbKey: "email"
    },
    ifu: {
        comp: 'input', label: "Ifu", htmlType: 'number', name: 'ifu',
        value: '', ph: '00000000', id: '', errmsgname: "ifu", dbKey: "ifu"
    },
    localisation: {
        comp: 'input', label: "Localisation de entreprise", htmlType: 'text', name: 'localisation_entreprise',
        value: '', ph: 'AaZz', id: '', errmsgname: "localisation de l'entreprise", dbKey: "situation_geographie"
    },
    numero1: {
        comp: 'input', label: 'Numero de telephone 1', htmlType: 'number', name: 'numero_1',
        value: '', ph: '00000000', id: '', errmsgname: "numero", dbKey: "contact"
    },
    numero2: {
        comp: 'input', label: 'Numero de telephone 2', htmlType: 'number', name: 'numero_2',
        value: '', ph: '00000000', id: '', errmsgname: "numero", dbKey: "contact2"
    },
    type_entreprise: {
        comp: 'select', label: "Type de l'entreprise", name: 'type_entreprise',
        options: [
            { value: 'Commerce', ph: 'Commerce' },
            { value: 'Prestation', ph: 'Prestation' },
            { value: 'Finance', ph: 'Finance' }
        ],
        value: '', ph: '18', id: '', errmsgname: "type de l'entreprise", dbKey: "type"

    },
    logo: {
        comp: 'input', label: "Logo de l'entreprise", htmlType: 'file', name: 'logo_entreprise',
        value: '', ph: '00000000', id: 'logo_photo', errmsgname: "logo de l'entreprise", dbKey: "logo_url"
    },
    description: {
        comp: 'textarea', label: "Une petite description de l'entreprise", name: 'description_entreprise',
        value: '', ph: '00000000', id: '', errmsgname: "description de l'entreprise", dbKey: "description"

    }

}








// Job Fields
export const jobFields = {
    cloture:
    {
        comp: 'input', label: 'Date de cloture', htmlType: 'date', name: 'date_de_cloture',
        value: '', ph: 'AaZz', id: '', errmsgname: "date de cloture",
    },
    adresse:
    {
        comp: 'input', label: 'Adresse', htmlType: 'text', name: 'adresse',
        value: '', ph: 'AaZz', id: '', errmsgname: "adresse",
    },
    contrat: {
        comp: 'select', label: 'Type de contrat', name: 'type_de_contrat', value: '',
        options: [{ value: 'CDI', ph: 'CDI' }, { value: 'CDD', ph: 'CDD' },
        { value: 'Stage', ph: 'Stage' }, { value: 'Freelance', ph: 'Freelance' }],
        id: '', errmsgname: "type de contrat",
    },
    post: {
        comp: 'input', label: 'Poste', htmlType: 'text', name: 'poste', value: '',
        ph: 'Consultant', id: '', errmsgname: "poste",
    },
    salaire: {
        comp: 'input', label: 'Salaire', htmlType: 'number', name: 'salaire',
        value: '', ph: '50000', id: '', errmsgname: "salaire",
    },
    competences: {
        comp: 'select', label: 'Domaine de competence', name: 'domaine_de_competence',
        options: [
            { value: 'Communication', ph: 'Communication' },
            { value: 'Tourisme-Hôtellerie-Restauration', ph: 'Tourisme-Hôtellerie-Restauration' },
            { value: 'Assistanat-Secretariat', ph: 'Assistanat-Secretariat' },
            { value: 'Comptabilité-Gestion-Finance', ph: 'Comptabilité-Gestion-Finance' },
            { value: 'Banque et Asurance', ph: 'Banque et Asurance' },
            { value: 'BTP - Electricité', ph: 'BTP - Electricité' },
            { value: 'Transport-Logistique', ph: 'Transport-Logistique' },
            { value: 'Esthétique-Coiffure-Beauté', ph: 'Esthétique-Coiffure-Beauté' },
            { value: 'Sécurité-Gardiennage', ph: 'Sécurité-Gardiennage' },
            { value: 'Agriculture-Environnement', ph: 'Agriculture-Environnement' },
            { value: 'Santé-Paramédical', ph: 'Santé-Paramédical' },
            { value: 'Mecanique-automobile', ph: 'Mecanique-automobile' },
            { value: 'RH-Formation-Enseignement', ph: 'RH-Formation-Enseignement' },
            { value: 'Commercial-Maketing', ph: 'Commercial-Maketing' },
            { value: "Garde D'enfant", ph: "Garde D'enfant" },
            { value: 'Entretien Menager', ph: 'Entretien Menager' },
            { value: 'Marketting', ph: 'Marketting' },
            { value: 'Informatique : Developpement', ph: 'Informatique : Developpement' },
            { value: 'Informatique : Securité', ph: 'Informatique : Securité' },
            { value: 'Informatique : Reseaux', ph: 'Informatique : Reseaux' },
            { value: 'Sport', ph: 'Sport' },
            { value: 'Autres', ph: 'Autres' }],
        value: '', ph: '18', id: '', errmsgname: "domaine de competence",
    },
    missions: {
        comp: 'textarea', label: 'Mission du poste', name: 'mission',
        value: '', ph: 'AaZz', id: 'formAreaDescription', errmsgname: "mission",
    },
    profil: {
        comp: 'textarea', label: 'Profil recherché', name: 'profil',
        value: '', ph: 'AaZz', id: 'formAreaDescription', errmsgname: "profil",
    },
    nombre_de_poste: {
        comp: 'select', label: 'Nombre de poste disponible', name: 'poste_a_pourvoir',
        options: [
            { value: '1', ph: '1' }, { value: '2', ph: '2' },
            { value: '3', ph: '3' }
        ],
        value: '', ph: '18', id: '', errmsgname: "poste_a_pourvoir",
    }
}