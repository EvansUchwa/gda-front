import { Link } from "react-router-dom"
export const Pagination = () => {
    const pagesTab = [0, 0, 0, 0, 0]
    return <div className="itemsPagination">
        <Link to='/'>Prev</Link>
        <section>
            <Link to='/'>1</Link>
            <Link to='/'>2</Link>
            <Link to='/'>3</Link>
            <Link to='/'>4</Link>
            <Link to='/'>5</Link>
            <Link to='/'>1</Link>
            <Link to='/'>2</Link>
            <Link to='/'>3</Link>
            <Link to='/'>4</Link>
            <Link to='/'>5</Link>
        </section>
        <Link to='/'>Next</Link>
    </div>
}