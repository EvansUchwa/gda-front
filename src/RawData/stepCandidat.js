import axios from "axios";
import { candidatsFields } from "./fields";
export const candidateSteps = {
    step1: [
        candidatsFields.nom,
        candidatsFields.prenom,
        candidatsFields.sexe,
        candidatsFields.age,
        candidatsFields.lieu_de_naissance,
        candidatsFields.numero_1,
        candidatsFields.numero_2],
    step2: [
        candidatsFields.niveau,
        candidatsFields.filiere,
        candidatsFields.ecole,
        candidatsFields.pays,
        candidatsFields.ville,
        candidatsFields.nationalité,
        candidatsFields.moyen_de_deplacement,
        candidatsFields.situation_matrimonial],
    step3: [
        candidatsFields.poste,
        candidatsFields.salaire,
        candidatsFields.domaine_competence,
        candidatsFields.autre_competence,
        candidatsFields.photo1,
        candidatsFields.photo2
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

export const insertCandidateDataOnLastStep = (userOtherInfo, mail, updateOtherUserInfo, apiInfos) => {
    const { baseApi, headerApi } = apiInfos;

    const formData = new FormData()
    formData.append("email", mail)
    formData.append("nom", userOtherInfo.nom)
    formData.append("prenom", userOtherInfo.prenom)
    formData.append("sexe", userOtherInfo.sexe)
    formData.append("date_naissance", "2020-12-21")
    formData.append("lieu", userOtherInfo.lieu_de_naissance)
    formData.append("tel", userOtherInfo.numero_1)
    formData.append("tel2", userOtherInfo.numero_2)
    formData.append("adresse", userOtherInfo.ville)
    formData.append("niveau", userOtherInfo.niveau_detude)
    formData.append("situation_matrimonial", userOtherInfo.situation_matrimoniale)
    formData.append("filiere", userOtherInfo.filière_serie)
    formData.append("ecole", userOtherInfo.ecole)
    formData.append("competences", userOtherInfo.domaine_de_competence)
    formData.append("autre_competence", userOtherInfo.autre_competence)
    formData.append("experience", "Une experience")
    formData.append("poste_envisager", userOtherInfo.poste_envisagé)
    formData.append("moyens_de_deplacement", userOtherInfo.moyen_de_deplacement)
    formData.append("pretention_salarials", userOtherInfo.salaire_envisagé)
    formData.append("pays", userOtherInfo.pays)
    formData.append("nationality", userOtherInfo.nationalité)
    formData.append("photo1", userOtherInfo.photo_1)
    formData.append("photo2", userOtherInfo.photo_2)

    axios.post(baseApi + '/api/auth/register/candidat/sept', formData, { headers: headerApi })
        .then(res => {
            updateOtherUserInfo(res.data.data)
        })
        .catch(err => console.log(err))
}