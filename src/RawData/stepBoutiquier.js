import axios from "axios";
export const boutiquierSteps = {
    step1: [
        {
            comp: 'input', label: 'Nom de la boutique', htmlType: 'text', name: 'nom',
            value: '', ph: 'AaZz', id: '', errmsgname: "nom de la bouitique"
        },
        {
            comp: 'select', label: 'Type de commerce', name: 'type_commerce', value: '',
            options: [{ value: 'Vetement', ph: 'Vetement' }, { value: 'Meuble', ph: 'Meuble' }],
            id: '', errmsgname: "type de commerce"
        },
    ],
    step2: [
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
            comp: 'input', label: 'Numero de telephone 1', htmlType: 'number', name: 'numero_1',
            value: '', ph: '00000000', id: '', errmsgname: "numero",

        }
    ],
    step3: [

        {
            comp: 'textarea', label: 'Description de ce que vous vendez',
            name: 'description',
            value: '', ph: 'AaZz', id: '', errmsgname: "description",
        },
        {
            comp: 'input', label: 'Photo 1', htmlType: 'file', name: 'profil',
            value: '', ph: 'AaZz', id: 'profil_photo', errmsgname: "photo de profil",
        }
    ],
}



export const stepBoutiquierValidator = (stepId, userOtherInfo) => {
    const { nom, type_commerce, numero_1,
        ville, profil, description } = userOtherInfo;
    if (stepId == 1) {
        return nom != "" && type_commerce != "";
    } else if (stepId == 2) {
        return ville != "" && numero_1 != "";
    }
    else if (stepId == 3) {
        return profil != "" && description != "";
    }
}


export const insertBoutiquierDataOnLastStep = (userOtherInfo, userId, mail, updateOtherUserInfo, apiInfos) => {
    const { baseApi, headerApi } = apiInfos;
    // {  user_id }
    const formData = new FormData()
    formData.append("email", mail)
    formData.append("nom", userOtherInfo.nom)
    formData.append("description", userOtherInfo.description)
    formData.append("contact", userOtherInfo.numero_1)
    formData.append("situation_geographie", userOtherInfo.ville)
    formData.append("type", userOtherInfo.type_commerce)
    formData.append("photo_boutique", userOtherInfo.profil)
    formData.append("user_id", userId)


    axios.post(baseApi + '/api/bout/boutique', formData, { headers: headerApi })
        .then(res => {
            updateOtherUserInfo(res.data.data)
            // console.log(res)
        })
        .catch(err => console.log(err))
}