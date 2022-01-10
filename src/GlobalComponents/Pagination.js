import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
export const Pagination = ({ props }) => {
    const { totalPage, currentPage, link } = props.pageInfos;

    const [plk, setPlk] = useState([
        { lk: 1, state: '' },
        { lk: null, state: '' },
        { lk: null, state: '' },
        { lk: totalPage === 1 ? null : 12, state: '' }
    ])

    const [pageVisible, setPageVisible] = useState()


    useEffect(() => {
        const plkCopy = plk;
        if (currentPage <= totalPage) {

            if (currentPage < totalPage && currentPage > 1) {
                plkCopy[1] = { lk: currentPage, state: '' }
                plkCopy[2] = { lk: currentPage + 1 < totalPage ? currentPage + 1 : null, state: '' }
            } else if (currentPage == totalPage || currentPage + 1 == totalPage) {
                plkCopy[1] = { lk: currentPage - 2 < totalPage && currentPage > 1 ? currentPage - 2 : null, state: '' }
                plkCopy[2] = { lk: currentPage - 1 < totalPage && currentPage > 1 ? currentPage - 1 : null, state: '' }
            }
            else {
                plkCopy[1] = { lk: null, state: '' }
                plkCopy[2] = { lk: currentPage + 1 < totalPage ? currentPage + 1 : null, state: '' }
            }

            setPageVisible(plkCopy)
        }

    }, [props.pageInfos.currentPage])

    return <div className="itemsPagination">
        {
            totalPage ?
                <><Link to={link + '/' + (currentPage > 1 ? currentPage - 1 : 1)}>
                    Prev</Link>
                    <section>
                        {
                            pageVisible ?
                                pageVisible.filter(pg => pg.lk != null).map((pge, index) => <Link
                                    to={link + '/' + (pge.lk)}
                                    className={pge.lk === currentPage ? 'pageActive' : ""}
                                    key={'pageItem' + index}>
                                    {pge.lk} </Link>)
                                : ''
                        }
                    </section>
                    <Link to={link + '/' + (currentPage < totalPage ? currentPage + 1 : totalPage)}>
                        Next</Link>
                </>
                : ''
        }
    </div>
}