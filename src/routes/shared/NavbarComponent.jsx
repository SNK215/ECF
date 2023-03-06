import { Outlet, NavLink, Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { removeUser } from "../authentication/authSlice"

const NavbarComponent = () => {

    const dispatch = useDispatch()
    const isLogged = useSelector(state => state.authSlice.isLogged)

    return (
        <>
        <header>
            <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}><i className="bi bi-heart-pulse"></i> eIMC</Link>                
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                                <NavLink className="nav-link" to={"/"}>Accueil</NavLink>                
                                <NavLink className={isLogged ? "nav-link" : "nav-link disabled"} to={"/imcDisplay"}><i className="bi bi-info-circle"></i> Mes infos</NavLink>                
                                <NavLink className={isLogged ? "nav-link" : "nav-link disabled"} to={"/imcForm"}><i className="bi bi-plus-circle"></i> Entrer un IMC</NavLink>                
                        </div>
                    </div>
                    {isLogged && <button className="btn btn-danger" onClick={()=>dispatch(removeUser())}>Déconnexion</button>}
                    {!isLogged && <Link to="/authentication" className="ms-auto"><button className="btn btn-primary">Connexion</button></Link>}
                </div>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
        </>
    )
}

export default NavbarComponent