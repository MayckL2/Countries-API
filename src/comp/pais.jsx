function Pais(props) {

    return (
        <div className="
        text-white
        bg-slate-700
        w-1/4
        pb-5
        rounded-md
        overflow-hidden">
            <img
                className="imagemBandeira"
                src={props.img} alt="" />

            <div className="mx-5">
                <h1 className="
                text-2xl
                font-bold
                my-3">
                {props.name}</h1>
                <h1>Population: <span className="
                text-white/60">{props.populacao}</span></h1>
                <h1>Region: <span className="
                text-white/60">{props.regiao}</span></h1>
                <h1>Capital: <span className="
                text-white/60">{props.capital}</span></h1>
            </div>
        </div>
    )
}


export default Pais