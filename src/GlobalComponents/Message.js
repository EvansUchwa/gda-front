import { IllustrationImage } from "./Img"

export const DataNotFound = ({ props }) => {
    const { dataType } = props
    return <div className="notFound">
        <IllustrationImage props={{ src: 'noData.svg', alt: 'Data not found', className: '' }} />
        <h4>Desolé aucune {dataType}  retrouvé</h4>
    </div>
}

export const DataNotPosted = ({ props }) => {
    const { dataType } = props
    return <div className="notFound">
        <IllustrationImage props={{ src: 'noData.svg', alt: 'Data not found', className: '' }} />
        <h4>Desolé aucune {dataType}  mise en ligne</h4>
    </div>
}
