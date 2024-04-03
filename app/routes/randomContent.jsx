import { useEffect, useState } from "react"
import axios from "axios"

export default function HandleRandomContent() {
    const [randomDatas, setRandomDatas] = useState([])

    const baseURL = 'https://wikiodjango.onrender.com/randoms/'

    useEffect(() => {
        axios.get(baseURL)
        .then((response) => {
            const responseData = response.data;

            setRandomDatas(responseData)
        })
        .catch(error => {
            console.error('An error occured while fetching data from backend', error)
        })
            
    }, [])
    
    return(
        <div className="relative top-24">
            {randomDatas.map((randomData) => 
            <div className="mx-4 min-h-screen" key={ randomData.id }>
                <h1 className="text-3xl font-mono font-semibold max-lg:font-extrabold uppercase text-center">{ randomData.title }</h1>
                <p className="text-lg font-medium">{ randomData.content }</p>
            </div>)}
        </div>
    )
}