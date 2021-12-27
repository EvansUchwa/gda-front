export const addJobFormFields = [
    {
        comp: 'input', label: 'Date de cloture', htmlType: 'data', name: 'date_de_cloture',
        value: '', ph: 'AaZz', id: '', errmsgname: "date de cloture",
        onChange: false, onClick: false, handleChange: '', handleClick: ''
    },
    {
        comp: 'input', label: 'Adresse', htmlType: 'text', name: 'adresse',
        value: '', ph: 'AaZz', id: '', errmsgname: "adresse",
        onChange: false, onClick: false, handleChange: '', handleClick: ''
    },
    {
        comp: 'select', label: 'Type de contrat', name: 'type_de_contrat', value: '',
        options: [{ value: 'CDI', ph: 'CDI' }, { value: 'CDD', ph: 'CDD' },
        { value: 'Stage', ph: 'Stage' }, { value: 'Freelance', ph: 'Freelance' }],
        id: '', errmsgname: "type de contrat",
        onChange: false, onClick: false, handleChange: '', handleClick: ''
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
        value: '', ph: '18', id: '', errmsgname: "niveau d'etude",
        onChange: false, onClick: false, handleChange: '', handleClick: ''
    },
    {
        comp: 'select', label: 'Avoir un Moyen de deplacement', name: 'moyen_de_deplacement',
        options: [
            { value: 'Oui', ph: 'Oui' }, { value: 'Non', ph: 'Non' }],
        value: '', ph: '18', id: '', errmsgname: "moyen de deplacement",
        onChange: false, onClick: false, handleChange: '', handleClick: ''
    },
    {
        comp: 'input', label: 'Poste', htmlType: 'text', name: 'poste', value: '',
        ph: 'Consultant', id: '', errmsgname: "poste",
        onChange: false, onClick: false, handleChange: '', handleClick: ''
    },
    {
        comp: 'input', label: 'Salaire', htmlType: 'number', name: 'salaire',
        value: '', ph: '50000', id: '', errmsgname: "salaire",
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
        comp: 'textarea', label: 'Description du poste', htmlType: 'number', name: 'description',
        value: '', ph: 'AaZz', id: 'formAreaDescription', errmsgname: "description",
        onChange: false, onClick: false, handleChange: '', handleClick: ''
    }
]


export const addJobFormValidator = (offerInfo) => {
    const { date_de_cloture, adresse,
        type_de_contrat, niveau_detude,
        moyen_de_deplacement, poste, salaire,
        domaine_de_competence, description } = offerInfo;

    return (date_de_cloture != '' && adresse != '' && type_de_contrat != ""
        && niveau_detude != "" && moyen_de_deplacement != ""
        && poste != "" && salaire != "" && domaine_de_competence != ''
        && description != "")
}