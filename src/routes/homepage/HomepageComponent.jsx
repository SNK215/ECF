const HomepageComponent = () => {

    return (
        <>
        <div className="d-flex justify-content-center">
            <div className="bg-dark text-light w-75 rounded p-3 m-2 d-flex flex-column align-items-center">
                <h3>Bienvenue sur le site eIMC !</h3>
                <p className="mt-4 text-center">
                    Pour commencer à utiliser le site, veuillez cliquer sur "Ajouter un IMC" dans la barre de navigation
                    puis entrez votre poids et votre taille, et rendez-vous ensuite sur "Mes infos" pour visualiser votre imc selon la date.
                </p>
            </div>
        </div>
        </>
    )
}

export default HomepageComponent