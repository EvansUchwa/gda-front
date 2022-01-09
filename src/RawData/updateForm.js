export const updateProfilFormFieds = {
    CANDIDAT: [
        {
            comp: 'input', label: 'Nom', htmlType: 'text', name: 'nom',
            value: '', ph: 'AaZz', id: '', errmsgname: "nom", dbKey: 'nom'
        },
        {
            comp: 'input', label: 'Prenom', htmlType: 'text', name: 'prenom',
            value: '', ph: 'AaZz', id: '', errmsgname: "prenom", dbKey: 'prenom'
        },
        {
            comp: 'select', label: 'Sexe', name: 'sexe', value: '',
            options: [{ value: 'Homme', ph: 'Homme' }, { value: 'Femme', ph: 'Femme' }],
            id: '', errmsgname: "sexe", dbKey: 'sexe'
        },
        {
            comp: 'input', label: 'Date', htmlType: 'date', name: 'date', value: '',
            ph: '18', id: '', errmsgname: "age", dbKey: 'date_naissance'
        },
        {
            comp: 'input', label: 'Lieu de Naissance', htmlType: 'text', name: 'lieu_de_naissance',
            value: '', ph: 'AaZz', id: '', errmsgname: "lieu de naissance", dbKey: 'lieu'
        },
        {
            comp: 'input', label: 'Numero de telephone 1', htmlType: 'number', name: 'numero_1',
            value: '', ph: '00000000', id: '', errmsgname: "numero", dbKey: 'tel'
        },
        {
            comp: 'input', label: 'Numero de telephone 2', htmlType: 'number', name: 'numero_2',
            value: '', ph: '00000000', id: '', errmsgname: "numero", dbKey: 'tel2'
        },
        {
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
        {
            comp: 'input', label: 'Filière et/ou serie', htmlType: 'text', name: 'filière_serie',
            value: '', ph: 'AaZz', id: 'Serie au collège/Lycée,Filère universitaire,etc..',
            errmsgname: "filière ou serie", dbKey: 'filiere'
        },
        {
            comp: 'input', label: 'Ecole', htmlType: 'text', name: 'ecole',
            value: '', ph: 'Ecole 1,Ecole 2,etc..', id: '', errmsgname: "école", dbKey: 'ecole'
        },
        {
            comp: 'select', label: 'Pays', name: 'pays',
            options: [
                { value: 'Benin', ph: 'Benin' },
                { value: 'Ac', ph: 'AVh' },],
            value: '', ph: '18', id: '', errmsgname: "pays", dbKey: 'pays'
        },
        {
            comp: 'select', label: 'Ville', name: 'ville',
            options: [
                { value: 'Cotonou', ph: 'Cotonou' },
                { value: 'Abomey-calavi', ph: 'Abomey-calavi' },
                { value: 'Parakou', ph: 'Parakou' }
            ],
            value: '', ph: '18', id: '', errmsgname: "ville", dbKey: 'adresse'
        },
        {
            comp: 'select', label: 'Nationalité', name: 'nationalité',
            options: [
                { value: 'Beninoise', ph: 'Beninoise' }],
            value: '', ph: '18', id: '', errmsgname: "nationalité", dbKey: 'nationality'
        },
        {
            comp: 'select', label: 'Moyen de deplacement', name: 'moyen_de_deplacement',
            options: [
                { value: 'Oui', ph: 'Oui' }, { value: 'Non', ph: 'Non' },
                { value: 'Bientot', ph: 'Bientot' }],
            value: '', ph: '18', id: '', errmsgname: "moyen de deplacement",
        },
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
        {
            comp: 'input', label: 'Poste_envisagé', htmlType: 'text', name: 'poste_envisagé', value: '',
            ph: '18', id: '', errmsgname: "poste envisagé",
        },
        {
            comp: 'input', label: 'Salaire envisagé', htmlType: 'number', name: 'salaire_envisagé',
            value: '', ph: 'AaZz', id: '', errmsgname: "salaire envisagé",
        },
        {
            comp: 'select', label: 'Domaine de competence', name: 'domaine_de_competence',
            options: [
                { value: 'Marketting', ph: 'Marketting' }, { value: 'Bureautique', ph: 'Bureautique' },
                { value: 'Commerce', ph: 'Commerce' }],
            value: '', ph: '18', id: '', errmsgname: "domaine de competence", dbKey: 'competences'
        },
        {
            comp: 'textarea', label: 'Autre competence', htmlType: 'number', name: 'autre_competence',
            value: '', ph: 'AaZz', id: '', errmsgname: "autre competence",
        },
        {
            comp: 'experience', label: 'Experience', htmlType: 'number', name: 'experience',
            value: '', ph: 'AaZz', id: '', errmsgname: "experience", dbKey: 'experience'
        },
        {
            comp: 'input', label: 'Photo 1', htmlType: 'file', name: 'photo_1',
            value: '', ph: 'AaZz', id: 'photo_1', errmsgname: "photo 1", dbKey: 'photo1_url'
        },
        {
            comp: 'input', label: 'Photo 2', htmlType: 'file', name: 'photo_2',
            value: '', ph: 'AaZz', id: 'photo_2', errmsgname: "photo 2", dbKey: 'photo2_url'
        }
    ],
    ENTREPRISE: [
        {
            comp: 'input', label: "Nom de l'entreprise", htmlType: 'text', name: 'nom_entreprise',
            value: '', ph: 'AaZz', id: '', errmsgname: "nom entreprise", dbKey: 'nom_entreprise'
        },
        {
            comp: 'input', label: "Mail de l'entreprise", htmlType: 'mail', name: 'mail_entreprise',
            value: '', ph: 'AaZz', id: '', errmsgname: "mail de l' entreprise", dbKey: 'email'
        },
        {
            comp: 'input', label: "Ifu", htmlType: 'number', name: 'ifu',
            value: '', ph: '00000000', id: '', errmsgname: "ifu", dbKey: 'ifu'
        },
        {
            comp: 'input', label: "Localisation de entreprise", htmlType: 'text', name: 'localisation_entreprise',
            value: '', ph: 'AaZz', id: '', errmsgname: "localisation de l'entreprise", dbKey: 'situation_geographie'
        },
        {
            comp: 'input', label: 'Numero de telephone 1', htmlType: 'number', name: 'contact_1',
            value: '', ph: '00000000', id: '', errmsgname: "numero", dbKey: 'contact'
        },
        {
            comp: 'input', label: 'Numero de telephone 2', htmlType: 'number', name: 'contact_2',
            value: '', ph: '00000000', id: '', errmsgname: "numero", dbKey: 'contact2'
        },
        {
            comp: 'select', label: "Type de l'entreprise", name: 'type_entreprise',
            options: [
                { value: 'Commerce', ph: 'Commerce' },
                { value: 'Prestation', ph: 'Prestation' },
                { value: 'Finance', ph: 'Finance' }
            ],
            value: '', ph: '18', id: '', errmsgname: "type de l'entreprise", dbKey: 'type'

        },
        {
            comp: 'input', label: "Logo de l'entreprise", htmlType: 'file', name: 'logo_entreprise',
            value: '', ph: '00000000', id: 'logo_photo', errmsgname: "logo de l'entreprise", dbKey: 'logo_url'

        },
        {
            comp: 'textarea', label: "Une petite description de l'entreprise", name: 'description_entreprise',
            value: '', ph: '00000000', id: '', errmsgname: "description de l'entreprise", dbKey: 'description'
        }
    ]
}