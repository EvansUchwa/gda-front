export const userDataKey = {
    entreprise: [
        { title: 'Ifu', key: 'ifu' },
        { title: 'Telephone 1', key: 'contact' },
        { title: 'Telephone 2', key: 'contact2' },
        { title: 'Domaine', key: 'type' },
        { title: 'Description', key: 'description' },
    ],
    candidat: [
        { title: 'Sexe', key: 'sexe' },
        { title: 'Pays', key: 'pays' },
        { title: 'Nationalité', key: 'nationality' },
        { title: 'Date de naissance', key: 'date_naissance' },
        { title: 'Telephone 1', key: 'tel' },
        { title: 'Telephone 2', key: 'tel2' },
        { title: 'Niveau', key: 'niveau' },
        { title: 'Competence', key: 'competences' },
        { title: 'Poste evisagé', key: 'poste_envisager' },
        { title: 'Ecole', key: 'ecole' },
        { title: 'Moyen de deplacement', data: 'moyens_de_deplacement' },
        { title: 'Experience', key: 'experience' },
        { title: 'Autre competence', key: 'autre_competence' },
    ]
}

export const userDetailModalKey = {
    entreprise: {
        tab1: [
            { title: 'Nom', key: 'nom' },
            { title: 'Prenom', key: 'prenom' },
            { title: 'Sexe', key: 'sexe' },
            { title: 'Age', key: 'Nom' },
            { title: 'Pays', key: 'pays' },
            { title: 'Lieu de Naissance', key: 'lieu' },
            { title: 'Ville de Residence', key: 'adresse' },
            { title: 'Nationalité', key: 'nationality' },
            { title: 'Situation Matrimonial', key: 'situation_matrimonial' },
            { title: 'Moyen de deplacement', key: 'moyens_de_deplacement' },
        ],
        tab2: [
            { title: 'Niveau', key: 'niveau' },
            { title: 'Ecole', key: 'ecole' },
            { title: 'Filiere de formatin', key: 'filiere' },
        ],
        tab3: [
            { title: 'Competence general', key: 'competences' },
            { title: 'Experience', key: 'experiences' },
            { title: 'Autre Competence', key: 'autre_competence' },
        ],

        tab4: [
            { title: 'Poste envisagé', key: 'poste_envisager' },
            { title: 'Salaire envisagé', key: 'pretention_salarials' },
        ]
    },

    candidat: {
        tab1: [
            { title: 'Cloture', key: 'date_cloture' },
            { title: 'Poste', key: 'post' },
            { title: 'Nombre de Poste', key: 'poste_apouvoir' },
            { title: 'Salaire', key: 'salaire' },
            { title: 'Type de contrat', key: 'type_contrat' },
            { title: 'Lieu', key: 'adresse' },
            { title: 'Moyen de deplacement', key: 'moyen_deplacement' },
        ],
        tab2: [
            { title: 'Niveau', key: 'niveau_etude' },
            { title: 'Domaine', key: 'domaine_competence' },
            { title: 'Mission', key: 'mission' },
            { title: 'Profil', key: 'profil' },
        ],
    }
}