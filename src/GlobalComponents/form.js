import { useEffect, useState } from "react";


export const SelectModal = ({ props }) => {

    const [modalClass, setMC] = useState('');
    const [options, setOptions] = useState([]);
    const { modalInfo, assigner } = props;
    const { initialOptions, dataTitle, name } = modalInfo;
    useEffect(() => {
        if (initialOptions.length > 0) { setMC('modalSelect') }
        setOptions(initialOptions)
    }, [initialOptions]);

    const handleSearch = (event) => {
        let value = event.target.value;
        const res = initialOptions.filter(item => item.nom.toLowerCase().includes(value.toLowerCase()))
        res.length > 0 ? setOptions(res) : setOptions(['Aucun resultat trouvé'])
    }

    const closeSelectModal = () => {
        setMC('');
        setOptions([])
        document.querySelector('.modal').classList.remove(modalClass);
    }

    const selectOption = (value) => {
        assigner(name, value.nom)
        closeSelectModal();
    }

    return <div className={"modal " + modalClass}>
        <div className="selectModal modalBody">
            <p className="modalCloser" onClick={() => closeSelectModal()}>
                <i className="mdi mdi-close"></i></p>
            <div className="searchPart">
                <input type="search" placeholder="Chercher ici..."
                    onChange={(event) => handleSearch(event)} />
            </div>
            {
                options.length > 0
                    ? <>
                        <h3>Selectionnez {dataTitle} </h3>
                        <div className="selectList">
                            {
                                options.map(opt => <section key={opt.id}>
                                    <span>{opt.nom} </span>
                                    {opt !== 'Aucun resultat trouvé'
                                        ? < button onClick={() => selectOption(opt)}> Choisir</button>
                                        : ''}
                                </section>)
                            }
                        </div>
                    </>
                    : <p className="notFound">Une erreur s'est produite ,<br /> veuillez verifiez votre connexion</p>
            }
        </div>
    </div >
}


export const Input = ({ props }) => {
    const { type, name, value, placeholder, id, onChange, onClick, handleChange, handleClick, isPasswordField } = props;
    if (['text', 'mail', 'number', 'search', 'time', 'date'].includes(type)) {
        return <input type={type} placeholder={'Ex: ' + placeholder} name={name}
            onClick={() => onClick ? handleClick() : ''}
            onChange={(event) => onChange ? handleChange(event) : ''} />
    }
    else if (type == 'password') {
        return <input type={isPasswordField ? 'password' : 'text'} placeholder={placeholder} name={name}
            onClick={() => onClick ? handleClick() : ''}
            onChange={(event) => onChange ? handleChange(event) : ''} />
    }
    else {
        return <input type={type} name={name} id={id}
            value={value} />
    }
}

export const Select = ({ props }) => {
    const { name, defaultValue, id, options, onChange, handleChange } = props;

    return <select name={name} defaultValue={defaultValue} onChange={(event) => handleChange(event)} >
        <option disabled value="">Choisir...</option>
        {options.map((opt, index) => <option value={opt.value} key={opt.ph + index}>{opt.ph}</option>)}
    </select>
}