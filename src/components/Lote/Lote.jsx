import React, { useState } from 'react'

const Lote = props => {

    const [click, setClick] = useState(false)
    const [nuevoTitulo, setnuevoTituylo] = useState(null)

    const mifuncion = async (id) => {
       let res = await fetch('https://jsonplaceholder.typicode.com/todos/' + id)
        res = await res.json()
        setnuevoTituylo(res.title)
    }

    return (
        <div className="Lote">
            <div>Titulo: {props.title}</div>
            <div>Usuraio id: {props.userId}</div>
            <button onClick={() => mifuncion(props.userId)}>Mostrar mas</button>
            {
                nuevoTitulo && <div className="infoExpandida">
                    nuevo titulo: {nuevoTitulo}
                    </div>
            }

        </div>
    )
}

export default Lote
