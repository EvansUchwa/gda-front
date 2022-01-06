import { Link } from "react-router-dom"
export const Pagination = ({ props }) => {
    const { pageInfos } = props
    const { totalPage, currentPage, link } = pageInfos;
    const items = [];
    for (let index = 0; index < totalPage; index++) {
        items.push(<Link to={link + '/' + (index + 1)}
            className={currentPage === (index + 1) ? 'pageActive' : ''}
            key={'pageItem' + index}>
            {index + 1} </Link>)
    }
    const n = [0, 0, 0, 0];
    return <div className="itemsPagination">
        <Link to={link + '/' + (currentPage > 1 ? currentPage - 1 : 1)}>Prev </Link>
        <section>
            {
                items.map((index, item) => index)
            }
        </section>
        <Link to={link + '/' + (currentPage < totalPage ? currentPage + 1 : totalPage)}>Next</Link>
    </div>
}