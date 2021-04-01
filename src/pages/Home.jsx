import React, { useEffect, useState } from 'react'
import Lote from '../components/Lote'

const Home = () => {
const [data, setData] = useState([])    

    //beforemount --LAYOUTEFFECT
    //didmounted -- USEFEECT
    //unmount
    //compomentdidchange

    useEffect(() => {
        getData()
    }, [])


    useEffect(() => {
        if(data.length > 0){
            alert()
        }
    }, [data])


    const getData = async() => {
        try {
            let res = await fetch('https://jsonplaceholder.typicode.com/todos/')
            res = await res.json()
            setData(res)
        } catch (error) {
            
        }

    }
    return (
        <div className="Home">
            {
                data.map((i, idx) =>  <Lote key={idx} title={i.title} userId={i.userId} />
                )
            }

        </div>
    )
}
export default Home
