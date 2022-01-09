import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
export const Pagination = ({ props }) => {
    const { pageInfos } = props
    const { totalPage, currentPage, link } = pageInfos;
    const limit = 5;
    const [pageVisible, setPageVisible] = useState([])

    useEffect(() => {
        const copy = [];
        let cf = currentPage < totalPage ? currentPage + 1 : currentPage;

        for (let index = 1; index <= cf; index++) {
            copy.push(<Link to={link + '/' + (index)}
                className={currentPage === (index) || index == totalPage ? 'pageActive' : ''}
                key={'pageItem' + index}>
                {index} </Link>)
        }
        setPageVisible([copy[currentPage - 2], copy[currentPage - 1], copy[currentPage]])
    }, [totalPage, currentPage])
    const n = [0, 0, 0, 0];
    return <div className="itemsPagination">
        {
            totalPage ?
                <><Link to={link + '/' + (currentPage > 1 ? currentPage - 1 : 1)}>
                    Prev </Link>
                    <section>
                        {
                            pageVisible.map((index, item) => index)
                        }
                    </section>
                    <Link to={link + '/' + (currentPage < totalPage ? currentPage + 1 : totalPage)}>
                        Next</Link>
                </>
                : ''
        }
    </div>
}