export const candidateSteps = {
    step1: [
        {
            comp: 'input', label: 'Nom', htmlType: 'text', name: 'nom',
            value: '', ph: 'AaZz', id: '', errmsgname: "nom",
            onChange: false, onClick: false, handleChange: '', handleClick: ''
        },
        {
            comp: 'input', label: 'Prenom', htmlType: 'text', name: 'prenom',
            value: '', ph: 'AaZz', id: '', errmsgname: "prenom",
            onChange: false, onClick: false, handleChange: '', handleClick: ''
        },
        {
            comp: 'select', label: 'Sexe', name: 'sexe', value: '',
            options: [{ value: 'Homme', ph: 'Homme' }, { value: 'Femme', ph: 'Femme' }],
            id: '', errmsgname: "sexe",
            onChange: false, onClick: false, handleChange: '', handleClick: ''
        },
        {
            comp: 'input', label: 'Age', htmlType: 'number', name: 'age', value: '',
            ph: '18', id: '', errmsgname: "age",
            onChange: false, onClick: false, handleChange: '', handleClick: ''
        },
        {
            comp: 'input', label: 'Lieu de Naissance', htmlType: 'text', name: 'lieu_de_naissance',
            value: '', ph: 'AaZz', id: '', errmsgname: "lieu de naissance",
            onChange: false, onClick: false, handleChange: '', handleClick: ''
        },
        {
            comp: 'input', label: 'Numero de telephone 1', htmlType: 'number', name: 'numero_1',
            value: '', ph: '00000000', id: '', errmsgname: "numero",
            onChange: false, onClick: false, handleChange: '', handleClick: ''
        },
        {
            comp: 'input', label: 'Numero de telephone 2', htmlType: 'number', name: 'numero_2',
            value: '', ph: '00000000', id: '', errmsgname: "numero",
            onChange: false, onClick: false, handleChange: '', handleClick: ''
        }],
    step2: [
        {
            comp: 'select', label: 'Niveau d\'etude', name: 'niveau_detude',
            options: [
                { value: 'CEP', ph: 'CEP' }, { value: 'BEPC', ph: 'BEPC' },
                { value: 'CAP', ph: 'CAP' }, { value: 'BAC', ph: 'BAC' },
                { value: 'BAC + 1', ph: 'BAC + 1' },
                { value: 'BAC + 2', ph: 'BAC + 2' },
                { value: 'BAC + 3', ph: 'BAC + 3' },
                { value: 'Master', ph: 'Master' }, { value: 'Doctorat', ph: 'Doctorat' }],
            value: '', ph: '18', id: '', errmsgname: "niveau d'etude",
            onChange: false, onClick: false, handleChange: '', handleClick: ''
        },
        ,
        {
            comp: 'input', label: 'Filière ou serie', htmlType: 'text', name: 'filière_serie',
            value: '', ph: 'AaZz', id: '', errmsgname: "filière ou serie",
            onChange: false, onClick: false, handleChange: '', handleClick: ''
        },
        {
            comp: 'input', label: 'Ecole', htmlType: 'text', name: 'ecole',
            value: '', ph: 'AaZz', id: '', errmsgname: "école",
            onChange: false, onClick: false, handleChange: '', handleClick: ''
        },
        {
            comp: 'select', label: 'Pays', name: 'pays',
            options: [
                { value: 'Benin', ph: 'Benin' },
                { value: 'Ac', ph: 'AVh' },],
            value: '', ph: '18', id: '', errmsgname: "pays",
            onChange: false, onClick: false, handleChange: '', handleClick: ''
        },
        {
            comp: 'select', label: 'Ville', name: 'ville',
            options: [
                { value: 'Cotonou', ph: 'Cotonou' },
                { value: 'Abomey-calavi', ph: 'Abomey-calavi' },
                { value: 'Parakou', ph: 'Parakou' }
            ],
            value: '', ph: '18', id: '', errmsgname: "ville",
            onChange: false, onClick: false, handleChange: '', handleClick: ''
        },
        {
            comp: 'select', label: 'Nationalité', name: 'nationalité',
            options: [
                { value: 'Beninoise', ph: 'Beninoise' }],
            value: '', ph: '18', id: '', errmsgname: "nationalité",
            onChange: false, onClick: false, handleChange: '', handleClick: ''
        },
        {
            comp: 'select', label: 'Moyen de deplacement', name: 'moyen_de_deplacement',
            options: [
                { value: 'Oui', ph: 'Oui' }, { value: 'Non', ph: 'Non' },
                { value: 'Bientot', ph: 'Bientot' }],
            value: '', ph: '18', id: '', errmsgname: "moyen de deplacement",
            onChange: false, onClick: false, handleChange: '', handleClick: ''
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
            onChange: false, onClick: false, handleChange: '', handleClick: ''
        }],
    step3: [
        {
            comp: 'input', label: 'Poste_envisagé', htmlType: 'text', name: 'poste_envisagé', value: '',
            ph: '18', id: '', errmsgname: "poste envisagé",
            onChange: false, onClick: false, handleChange: '', handleClick: ''
        },
        {
            comp: 'input', label: 'Salaire envisagé', htmlType: 'number', name: 'salaire_envisagé',
            value: '', ph: 'AaZz', id: '', errmsgname: "salaire envisagé",
            onChange: false, onClick: false, handleChange: '', handleClick: ''
        },
        {
            comp: 'select', label: 'Domaine de competence', name: 'domaine_de_competence',
            options: [
                { value: 'Marketting', ph: 'Marketting' }, { value: 'Bureautique', ph: 'Bureautique' },
                { value: 'Commerce', ph: 'Commerce' }],
            value: '', ph: '18', id: '', errmsgname: "domaine de competence",
            onChange: false, onClick: false, handleChange: '', handleClick: ''
        },
        {
            comp: 'textarea', label: 'Autre competence', htmlType: 'number', name: 'autre_competence',
            value: '', ph: 'AaZz', id: '', errmsgname: "autre competence",
            onChange: false, onClick: false, handleChange: '', handleClick: ''
        },
        {
            comp: 'input', label: 'Photo 1', htmlType: 'file', name: 'photo_1',
            value: '', ph: 'AaZz', id: 'photo_1', errmsgname: "photo 1",
            onChange: false, onClick: false, handleChange: '', handleClick: ''
        },
        {
            comp: 'input', label: 'Photo 2', htmlType: 'file', name: 'photo_2',
            value: '', ph: 'AaZz', id: 'photo_2', errmsgname: "photo 2",
            onChange: false, onClick: false, handleChange: '', handleClick: ''
        }
    ],
}


export const stepCandidateValidator = (stepId, userOtherInfo) => {
    const { nom, prenom, sexe,
        age, lieu_de_naissance,
        numero_1, numero_2,
        niveau_detude, filière_serie, ecole,
        pays, ville, nationalité,
        moyen_de_deplacement, situation_matrimoniale,
        poste_envisagé, salaire_envisagé,
        domaine_de_competence, autre_competence,
        photo_1, photo_2 } = userOtherInfo;

    if (stepId == 1) {
        return nom != "" && prenom != "" && sexe != ""
            && age != "" && lieu_de_naissance != ""
            && numero_1 != "" && numero_2 != "";
    }
    else if (stepId == 2) {
        return niveau_detude != "" && filière_serie != "" && ecole != ""
            && pays != "" && ville != "" && nationalité != ""
            && moyen_de_deplacement != "" && situation_matrimoniale != "";
    }
    else if (stepId == 3) {
        return poste_envisagé != "" && salaire_envisagé != ""
            && domaine_de_competence != "" && autre_competence != ""
            && (photo_1 != "" || photo_2 != "");
    }
}