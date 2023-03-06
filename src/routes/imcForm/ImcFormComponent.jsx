import { useSelector, useDispatch } from "react-redux"
import { Navigate } from "react-router-dom"
import { useRef } from "react"
import { addImcAction } from "./imcSlice"

const ImcFormComponent = () => {

    const dispatch = useDispatch()
    const isLogged = useSelector(state => state.authSlice.isLogged)
    const imcTab = useSelector(state => state.imcSlice.imc)
    const weightRef = useRef()
    const dateRef = useRef()
    const heightRef = useRef()

    const handleForm = (event) => {
        event.preventDefault()

        const height = heightRef.current.value
        const weight = weightRef.current.value
        const date = dateRef.current.value
        const roundedImc = (weight / Math.pow(height,2)).toFixed(2)
        const imc = parseFloat(roundedImc)
        let interpretation = ""
        let badgeClass = ""

        switch (true) {
            case imc < 16.5:
                badgeClass = "badge rounded-pill text-bg-light"
                interpretation = "dénutrition"
                break;
            case imc > 16.5 && imc < 18.5:
                badgeClass = "badge rounded-pill text-bg-light"
                interpretation = "maigreur"
                break;
            case imc > 18.5 && imc < 25:
                badgeClass = "badge rounded-pill text-bg-success"
                interpretation = "poids normal"
                break;
            case imc > 25 && imc < 30:
                badgeClass = "badge rounded-pill text-bg-secondary"
                interpretation = "surpoids"
                break;
            case imc > 30 && imc < 35:
                badgeClass = "badge rounded-pill text-bg-secondary"
                interpretation = "obésité modérée "
                break;
            case imc > 35 && imc < 40:
                badgeClass = "badge rounded-pill rounded-pill text-bg-warning"
                interpretation = "obésité sévère"
                break;
            case imc > 40 :
                badgeClass = "badge rounded-pill text-bg-danger"
                interpretation = "obésité morbide"
                break;
        }

        const newImc = {date, height, weight, imc, badgeClass, interpretation}

        heightRef.current.value = ""
        weightRef.current.value = ""
        dateRef.current.value = ""

        dispatch(addImcAction([newImc]))
    }

    if (isLogged) {
        const todayDate = new Date().toISOString().split('T')[0]
        return (
            <>
            <div className="d-flex justify-content-center">
                <div className="bg-dark text-light w-75 m-2 p-3 rounded">
                    <form onSubmit={handleForm}>
                        <h3>Nouvel IMC</h3>
                        <hr />
                        <label htmlFor="height" className="form-label">Entrez votre taille en mètre</label>
                        <input type="number" className="form-control" placeholder="X.XX" step="0.01" required ref={heightRef}/>

                        <label htmlFor="weight" className="form-label mt-2">Entrez votre poids en Kilogramme</label>
                        <input type="number" className="form-control mb-2" placeholder="XX.XX" step="0.01" required ref={weightRef}/>

                        <label htmlFor="date" className="form-label">Choisissez la date à laquelle vous souhaitez enregistrer ce poids</label>
                        <input type="date" min={todayDate} className="form-control" required ref={dateRef}/>

                        <button className="btn btn-outline-primary mt-3 w-100">Valider</button>
                    </form>
                </div>
            </div>
            </>
        )
    } else {
        return (
            <>
            <Navigate to={`/authentication`}/>
            </>
        )
    }
}

export default ImcFormComponent