import { useEffect, useState } from "react"
import axios from "axios"

export default function Indexes() {
    const [datas, setDatas] = useState([])

    const baseURL = 'http://127.0.0.1:8000'

    useEffect(() => {
        axios.get(baseURL)
        .then((response) => {
            const responseData = response.data;

            setDatas(responseData)
        })
        .catch(error => {
            console.error('An error occured while fetching data from backend', error)
        })
            
    }, [])
    
    return(
        <div className="relative top-24">
            {datas.map((data) => 
            <ul className="mx-4" key={ data.id }>
                <li className="text-3xl font-mono font-semibold max-lg:font-extrabold uppercase text-center">{ data.title }</li>
            </ul>)}
            <ul className="mx-4" key={ datas.id }>
                <li className="text-3xl font-mono font-semibold max-lg:font-extrabold uppercase text-center">{ datas.title }</li>
            </ul>
        </div>
    )
}