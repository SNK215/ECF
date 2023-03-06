import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { signIn, signUp, setSignFormMode  } from "./authSlice";
import { useNavigate } from "react-router-dom";

const AuthFormComponent = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const formMode = useSelector(state => state.authSlice.formMode)
    const emailRef = useRef()
    const passwordRef = useRef()
    const heightRef = useRef()

    const handleForm = (event) => {
        event.preventDefault()

        const email = emailRef.current.value
        const password = passwordRef.current.value

        const credentials = {
            email,
            password,
            returnSecureToken: true
        }

        emailRef.current.value = ""
        passwordRef.current.value = ""

        const onSigningHandler = async (credentials) => {
            if (formMode === "Sign In") {
                await dispatch(signIn(credentials))
            } else if (formMode === "Sign Up") {
                await dispatch(signUp(credentials))
            }
        
            setSignFormMode("")
        }

        onSigningHandler(credentials)
        navigate("/")
    }

    return (
        <>
        <div className="d-flex justify-content-center">
            <div className="bg-dark text-light m-2 p-3 w-50 rounded">
                <form className="d-flex flex-column" onSubmit={handleForm}>
                    {formMode === "Sign In" ? <h3>Connexion</h3> : <h3>Inscription</h3>}
                    <hr />
                    <label htmlFor="email" className="form-label">Adresse mail :</label>
                    <input type="email" className="form-control" ref={emailRef} required/>

                    <label htmlFor="password" className="form-label">Mot de passe :</label>
                    <input type="password" placeholder="6 caractères minimum" className="form-control" ref={passwordRef} required/>

                    <button className="btn btn-outline-primary my-2">Valider</button>
                </form>
                {formMode === "Sign In" ? 
                    <button className="btn btn-outline-info w-100" onClick={()=>dispatch(setSignFormMode("Sign Up"))}>S'inscrire</button> :
                    <button className="btn btn-outline-info w-100" onClick={()=>dispatch(setSignFormMode("Sign In"))}>Connexion</button>}
            </div>
        </div>
        </>
    )
}

export default AuthFormComponent