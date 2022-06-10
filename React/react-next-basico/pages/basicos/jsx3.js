export default function () {
    const meuNome = "João Cícero Vicente Sousa"
    return (
        <div>
            <h1> Integração JS e JSX</h1>
            <h2>{meuNome}</h2>
            <h3>{3**3}</h3>
            <h4>{mostraAlgo(1)}</h4>
        </div>
    )
}

function mostraAlgo(min){
    return min
}