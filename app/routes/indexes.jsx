import { useEffect, useState } from "react"
import axios from "axios"

export default function Indexes() {
    const [datas, setDatas] = useState([])

    const baseURL = 'http://127.0.0.1:8000'

    useEffect(() => {
        axios.get(baseURL)
        .then((response) => {           
            setDatas(response.data)
            console.log(response)
        })
        .catch(error => {
            console.error('An error occured while fetching data from backend', error)
        })
            
    }, [])
    
    return(
        <div className="relative top-24 mx-4 justify-center">
            <div className="inline-grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {datas.map((data) =>  data != null ? 
                
                <a key={ data.id } href={ relativeUrl + data.id } className="bg-slate-100 rounded-lg">
                    <div className="w-[20rem] h-[14rem] gap-4">
                        <div className="flex relative justify-center">
                            <img className="rounded-lg w-[18rem] h-[12rem] object-cover" src={ baseURL + data.thumbnail } alt={ data.title } />
                        </div>
                    </div>
                    <p className="relative text-wrap text-justify text-lg font-mono font-bold p-3 bottom-7">{ data.title }</p>
                </a>
                
                : <h3 key={ data.id } className="">There seems to be no content available</h3>
                )}
            </div>
        </div>
    )
}

const relativeUrl = '/page/'
