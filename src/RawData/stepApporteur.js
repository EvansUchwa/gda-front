import axios from "axios";
export const apporteurSteps = {
    step1: [
        {
            comp: 'input', label: 'Nom', htmlType: 'text', name: 'nom',
            value: '', ph: 'AaZz', id: '', errmsgname: "nom"
        },
        {
            comp: 'input', label: 'Prenom', htmlType: 'text', name: 'prenom',
            value: '', ph: 'AaZz', id: '', errmsgname: "prenom"
        },
    ],
    step2: [
        {
            comp: 'select', label: 'Sexe', name: 'sexe', value: '',
            options: [{ value: 'Homme', ph: 'Homme' }, { value: 'Femme', ph: 'Femme' }],
            id: '', errmsgname: "sexe"
        },
        {
            comp: 'input', label: 'Age', htmlType: 'number', name: 'age', value: '',
            ph: '18', id: '', errmsgname: "age"
        },
        {
            comp: 'input', label: 'Numero de telephone 1', htmlType: 'number', name: 'numero_1',
            value: '', ph: '00000000', id: '', errmsgname: "numero",

        }
    ],
    step3: [
        {
            comp: 'select', label: 'Pays', name: 'pays',
            options: [
                { value: 'Benin', ph: 'Benin' },
                { value: 'Ac', ph: 'AVh' },],
            value: '', ph: '18', id: '', errmsgname: "pays",
        },
        {
            comp: 'select', label: 'Ville', name: 'ville',
            options: [
                { value: 'Cotonou', ph: 'Cotonou' },
                { value: 'Abomey-calavi', ph: 'Abomey-calavi' },
                { value: 'Parakou', ph: 'Parakou' }
            ],
            value: '', ph: '18', id: '', errmsgname: "ville"
        },
        {
            comp: 'input', label: 'Photo', htmlType: 'file', name: 'profil',
            value: '', ph: 'AaZz', id: 'profil', errmsgname: "photo de profil",
        }
    ],
}



export const stepApporteurValidator = (stepId, userOtherInfo) => {
    const { nom, prenom, numero_1,
        pays, ville, sexe, age, profil } = userOtherInfo;
    if (stepId == 1) {
        return nom != "" && prenom != "";
    } else if (stepId == 2) {
        return sexe != "" && age != "" && numero_1 != "";
    }
    else if (stepId == 3) {
        return pays != "" && ville != "" && profil != "";
    }
}


export const insertApporteurDataOnLastStep = (userOtherInfo, mail, updateOtherUserInfo, apiInfos) => {
    const { baseApi, headerApi } = apiInfos;

    const formData = new FormData()
    formData.append("email", mail)
    formData.append("nom", userOtherInfo.nom)
    formData.append("prenom", userOtherInfo.prenom)
    formData.append("sexe", userOtherInfo.sexe)
    formData.append("date_naissance", "2020-12-21")
    formData.append("tel", userOtherInfo.numero_1)
    formData.append("ville", userOtherInfo.ville)
    formData.append("pays", userOtherInfo.pays)
    formData.append("profil", userOtherInfo.profil)


    axios.post(baseApi + '/api/auth/register/apporteur/sept', formData, { headers: headerApi })
        .then(res => {
            updateOtherUserInfo(res.data.data)
            // console.log(res)
        })
        .catch(err => console.log(err))
}