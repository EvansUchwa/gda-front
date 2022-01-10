// CANDIDAT
export const candidatsFields = {
    nom: {
        comp: 'input', label: 'Nom', htmlType: 'text', name: 'nom',
        value: '', ph: 'AaZz', id: '', errmsgname: "nom",
    },
    prenom: {
        comp: 'input', label: 'Prenom', htmlType: 'text', name: 'prenom',
        value: '', ph: 'AaZz', id: '', errmsgname: "prenom",
    },
    sexe: {
        comp: 'select', label: 'Sexe', name: 'sexe', value: '',
        options: [{ value: 'Homme', ph: 'Homme' }, { value: 'Femme', ph: 'Femme' }],
        id: '', errmsgname: "sexe",
    },
    age: {
        comp: 'input', label: 'Age', htmlType: 'number', name: 'age', value: '',
        ph: '18', id: '', errmsgname: "age",
    },
    lieu_de_naissance: {
        comp: 'input', label: 'Lieu de Naissance', htmlType: 'text', name: 'lieu_de_naissance',
        value: '', ph: 'AaZz', id: '', errmsgname: "lieu de naissance",
    },
    numero_1: {
        comp: 'input', label: 'Numero de telephone 1', htmlType: 'number', name: 'numero_1',
        value: '', ph: '00000000', id: '', errmsgname: "numero",
    },
    numero_2: {
        comp: 'input', label: 'Numero de telephone 2', htmlType: 'number', name: 'numero_2',
        value: '', ph: '00000000', id: '', errmsgname: "numero",
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
        value: '', ph: '18', id: '', errmsgname: "niveau d'etude",
    },
    filiere: {
        comp: 'input', label: 'Filière et/ou serie', htmlType: 'text', name: 'filière_serie',
        value: '', ph: 'AaZz', id: 'Serie au collège/Lycée,Filère universitaire,etc..',
        errmsgname: "filière ou serie",
    },
    ecole: {
        comp: 'input', label: 'Ecole', htmlType: 'text', name: 'ecole',
        value: '', ph: 'Ecole 1,Ecole 2,etc..', id: '', errmsgname: "école",
    },
    pays: {
        comp: 'select', label: 'Pays', name: 'pays',
        options: [
            { value: 'Benin', ph: 'Benin' },
            { value: 'Ac', ph: 'AVh' },],
        value: '', ph: '18', id: '', errmsgname: "pays",
    },
    ville: {
        comp: 'select', label: 'Ville', name: 'ville',
        options: [
            { value: 'Cotonou', ph: 'Cotonou' },
            { value: 'Abomey-calavi', ph: 'Abomey-calavi' },
            { value: 'Parakou', ph: 'Parakou' }
        ],
        value: '', ph: '18', id: '', errmsgname: "ville",
    },
    nationnalité: {
        comp: 'select', label: 'Nationalité', name: 'nationalité',
        options: [
            { value: 'Beninoise', ph: 'Beninoise' }],
        value: '', ph: '18', id: '', errmsgname: "nationalité",
    },
    moyen_de_deplacement: {
        comp: 'select', label: 'Moyen de deplacement', name: 'moyen_de_deplacement',
        options: [
            { value: 'Oui', ph: 'Oui' }, { value: 'Non', ph: 'Non' },
            { value: 'Bientot', ph: 'Bientot' }],
        value: '', ph: '18', id: '', errmsgname: "moyen de deplacement",
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
        value: '', ph: '18', id: '', errmsgname: "situation matrimoniale",
    },
    poste: {
        comp: 'input', label: 'Poste_envisagé', htmlType: 'text', name: 'poste_envisagé', value: '',
        ph: '18', id: '', errmsgname: "poste envisagé",
    },
    salaire: {
        comp: 'input', label: 'Salaire envisagé', htmlType: 'number', name: 'salaire_envisagé',
        value: '', ph: 'AaZz', id: '', errmsgname: "salaire envisagé",
    },
    domaine_competence: {
        comp: 'select', label: 'Domaine de competence', name: 'domaine_de_competence',
        options: [
            { value: 'Marketting', ph: 'Marketting' }, { value: 'Bureautique', ph: 'Bureautique' },
            { value: 'Commerce', ph: 'Commerce' }],
        value: '', ph: '18', id: '', errmsgname: "domaine de competence",
    },
    autre_competence: {
        comp: 'textarea', label: 'Autre competence', htmlType: 'number', name: 'autre_competence',
        value: '', ph: 'AaZz', id: '', errmsgname: "autre competence",
    },
    photo1: {
        comp: 'input', label: 'Photo 1', htmlType: 'file', name: 'photo_1',
        value: '', ph: 'AaZz', id: 'photo_1', errmsgname: "photo 1",
    },
    photo2: {
        comp: 'input', label: 'Photo 2', htmlType: 'file', name: 'photo_2',
        value: '', ph: 'AaZz', id: 'photo_2', errmsgname: "photo 2",
    }
}

// ENTREPRISE
export const enterpriseFields = {
    nom_entreprise: {
        comp: 'input', label: "Nom de l'entreprise", htmlType: 'text', name: 'nom_entreprise',
        value: '', ph: 'AaZz', id: '', errmsgname: "nom entreprise",
    },
    mail_entreprise: {
        comp: 'input', label: "Mail de l'entreprise", htmlType: 'mail', name: 'mail_entreprise',
        value: '', ph: 'AaZz', id: '', errmsgname: "mail de l' entreprise",
    },
    ifu: {
        comp: 'input', label: "Ifu", htmlType: 'number', name: 'ifu',
        value: '', ph: '00000000', id: '', errmsgname: "ifu",
    },
    localisation: {
        comp: 'input', label: "Localisation de entreprise", htmlType: 'text', name: 'localisation_entreprise',
        value: '', ph: 'AaZz', id: '', errmsgname: "localisation de l'entreprise",
    },
    numero1: {
        comp: 'input', label: 'Numero de telephone 1', htmlType: 'number', name: 'numero_1',
        value: '', ph: '00000000', id: '', errmsgname: "numero",
    },
    numero2: {
        comp: 'input', label: 'Numero de telephone 2', htmlType: 'number', name: 'numero_2',
        value: '', ph: '00000000', id: '', errmsgname: "numero",
    },
    type_entreprise: {
        comp: 'select', label: "Type de l'entreprise", name: 'type_entreprise',
        options: [
            { value: 'Commerce', ph: 'Commerce' },
            { value: 'Prestation', ph: 'Prestation' },
            { value: 'Finance', ph: 'Finance' }
        ],
        value: '', ph: '18', id: '', errmsgname: "type de l'entreprise",

    },
    logo: {
        comp: 'input', label: "Logo de l'entreprise", htmlType: 'file', name: 'logo_entreprise',
        value: '', ph: '00000000', id: 'logo_photo', errmsgname: "logo de l'entreprise",

    },
    description: {
        comp: 'textarea', label: "Une petite description de l'entreprise", name: 'description_entreprise',
        value: '', ph: '00000000', id: '', errmsgname: "description de l'entreprise",

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
            { value: 'Marketting', ph: 'Marketting' }, { value: 'Bureautique', ph: 'Bureautique' },
            { value: 'Commerce', ph: 'Commerce' }],
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