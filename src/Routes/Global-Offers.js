import { useState } from "react"
import { useParams } from "react-router-dom"
import { GlobalOfferLayout } from "../RoutesSubComponents/Global-offerComponents.js"

const toggleFilterSidebar = (event) => {
    event.preventDefault();
    document.querySelector('.filterSidebar').classList.toggle('toggleFilterSidebar')
}
const FilterBoutiqueForm = () => {
    return <form onSubmit={(event) => toggleFilterSidebar(event)}>
        <section className="formSegment">
            <label>Prix Minimum</label>
            <input type="number" placeholder="Ex: 500" />
        </section>
        <section className="formSegment">
            <label>Prix Maximum</label>
            <input type="number" placeholder="Ex: 500" />
        </section>
        <section className="formSegment">
            <label>Ville</label>
            <select>
                <option>Ville 1</option>
                <option>Ville 2</option>
                <option>Ville 3</option>
            </select>
        </section>
        <section className="formSegment">
            <label>Param 3</label>
            {[0, 0, 0, 0].map((inp, index) => <label key={'filterChk1' + index}
                htmlFor={'categorieCheck' + index}>
                <input type='checkbox' id={'categorieCheck' + index} />
                <span>Categorie {index + 1}(5 produits) </span>
            </label>)}
        </section>
        <div>
            <button className="semiRounded">Appliquer le filtre</button>
        </div>
    </form>
}
const FilterImmobilierForm = ({ props }) => {
    const { type } = props;
    const dispatchFIF = (type) => {
        if (type == 'Location') {
            const selectFieldTypeLocation = [{ ph: 'Entré Coucher', value: 'Entré Coucher' },
            { ph: 'Simple(1 chambre/1 salon)', value: 'Simple(1 chambre/1 salon)' },
            { ph: 'Simple(2 chambre/1 salon)', value: 'Simple(2 chambre/1 salon)' },
            { ph: 'Simple(3 chambre/1 salon)', value: 'Simple(3 chambre/1 salon)' },
            { ph: 'Simple(4 chambre/1 salon)', value: 'Simple(4 chambre/1 salon)' },
            { ph: 'Meubler(1 chambre/1 salon)', value: 'Meubler(1 chambre/1 salon)' },
            { ph: 'Meubler(2 chambre/1 salon)', value: 'Meubler(2 chambre/1 salon)' },
            { ph: 'Meubler(3 chambre/1 salon)', value: 'Meubler(3 chambre/1 salon)' },
            { ph: 'Meubler(4 chambre/1 salon)', value: 'Meubler(4 chambre/1 salon)' }
            ]
            return <>
                <section className="formSegment">
                    <label>Type de location</label>
                    <select>
                        {
                            selectFieldTypeLocation.map((sftl, index) => <option value={sftl.value}
                                key={'sftl' + index}>
                                {sftl.ph}
                            </option>)
                        }
                    </select>
                </section>
                <section className="formSegment">
                    <label>Sanitaire</label>
                    {["Oui", "Non"].map((inp, index) => <label key={'filterChk2' + index}
                        htmlFor={'categorieCheck' + index}>
                        <input type='radio' id={'categorieCheck' + index} name="titre_foncier" />
                        <span>{inp}(5 produits) </span>
                    </label>)}
                </section>
            </>
        } else {
            return <>
                <section className="formSegment">
                    <label>Mètre carée</label>
                    <input type="number" placeholder="Ex: 20" />
                </section>
                <section className="formSegment">
                    <label>Titre foncier</label>
                    {["Oui", "Non"].map((inp, index) => <label key={'filterChk2' + index}
                        htmlFor={'categorieCheck' + index}>
                        <input type='radio' id={'categorieCheck' + index} name="titre_foncier" />
                        <span>{inp}(5 produits) </span>
                    </label>)}
                </section>
                <section className="formSegment">
                    <label>Clôture</label>
                    {["Oui", "Non"].map((inp, index) => <label key={'filterChk2' + index}
                        htmlFor={'categorieCheck' + index}>
                        <input type='radio' id={'categorieCheck' + index} name="titre_foncier" />
                        <span>{inp}(5 produits) </span>
                    </label>)}
                </section>
            </>
        }
    }
    return <form onSubmit={(event) => toggleFilterSidebar(event)}>
        <section className="formSegment">
            <label>Prix Minimum</label>
            <input type="number" placeholder="Ex: 500" />
        </section>
        <section className="formSegment">
            <label>Prix Maximum</label>
            <input type="number" placeholder="Ex: 500" />
        </section>
        <section className="formSegment">
            <label>Ville</label>
            <select>
                <option>Ville 1</option>
                <option>Ville 2</option>
                <option>Ville 3</option>
            </select>
        </section>
        {dispatchFIF(type)}
        <div>
            <button className="semiRounded">Appliquer le filtre</button>
        </div>
    </form>
}


const Global_Offer = () => {
    const urlPram = useParams()
    const dispatchOfferFilterComponent = (typeOffer, subTypeOffer = null) => {
        if (['Boutique', 'Immobilier', 'Emplois'].includes(typeOffer)) {

            if (typeOffer == 'Boutique') {
                return <FilterBoutiqueForm />
            }
            else if (typeOffer == 'Emplois') {
                return <p>Pour acceder ....</p>
            }
            else {
                return <FilterImmobilierForm props={{ type: subTypeOffer }} />
            }

        } else {
            return <p>Erreur fdp</p>
        }
    }


    return <GlobalOfferLayout
        props={{
            typeOffer: urlPram.typeOffer,
            filterFormComponent: dispatchOfferFilterComponent(urlPram.typeOffer, urlPram.subTypeOffer),
            toggleFilterSidebar
        }} />;
}

export default Global_Offer;