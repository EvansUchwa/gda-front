export const SimpleImage = ({ props }) => {
    const { src, alt, rounded, className, id } = props;
    return <img alt={alt} className={className + ' ' + ((rounded) ? 'rounded' : '')}
        src={require('../Assets/images/' + src).default} />
}

export const ProfilImage = ({ props }) => {
    const { src, alt, rounded, className, id } = props;
    return <img alt={alt} className={className + ' ' + ((rounded) ? 'rounded' : '')}
        src={require('../Assets/images/profils/' + src).default} />
}

export const IllustrationImage = ({ props }) => {
    const { src, alt, rounded, className, id } = props;
    return <img alt={alt} className={className + ' ' + ((rounded) ? 'rounded' : '')}
        src={require('../Assets/images/illustrations/' + src).default} />
}


export const ProductImage = ({ props }) => {
    const { src, alt, rounded, className, id } = props;
    return <img alt={alt} className={className + ' ' + ((rounded) ? 'rounded' : '')}
        src={require('../Assets/images/produits/' + src).default} />
}

export const UrlImage = ({ props }) => {
    const { src, alt, rounded, className, id } = props;
    return <img alt={alt} className={className + ' ' + ((rounded) ? 'rounded' : '')}
        src={src} id={id} />
}