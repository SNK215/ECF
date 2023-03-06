import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const ImcDisplayComponent = () => {

    const imcTab = useSelector(state => state.imcSlice.imc)
    const isLogged = useSelector(state => state.authSlice.isLogged)

    if (isLogged) {
        return (
            <>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="bg-dark text-light p-2 m-2 rounded d-flex justify-content-center">
                    <table className="table text-light text-center">
                        <thead>
                            <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Taille</th>
                                <th scope="col">Poids</th>
                                <th scope="col">IMC</th>
                                <th scope="col">Interprétation</th>
                            </tr>
                        </thead>
                        <tbody>
                        {imcTab.map((element, key)=> 
                            <tr key={key}>
                            <th scope="row">{element[0].date}</th>
                                <td>{element[0].height}m</td>
                                <td>{element[0].weight}Kg</td>
                                <td>{element[0].imc}</td>
                                <td><span className={element[0].badgeClass}>{element[0].interpretation}</span></td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
            </>
        )
    } else {
        return (
            <>
            <Navigate to="/authentication"/>
            </>
        )
    }
    
}

export default ImcDisplayComponent