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
            <div key={ data.id } class="grid overflow-x-clip grid-cols-8 gap-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="/ddkdl">
                    <img className="rounded-lg" src={ data.thumbnail } alt={ data.title } />
                </a>
            </div>
            )}
            
        </div>
    )
}