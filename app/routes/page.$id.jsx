import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "@remix-run/react"

export default function PageRoute() {
    const [pageContent, setPageContent] = useState([])
    const params = useParams()
    const pageId = params.id
    ///console.log(pageId)

    const baseURL = 'https://wikiodjango.onrender.com/get_data/'
    const URL = baseURL.concat(pageId)

    useEffect(() => {
        axios.get(URL)
        .then((response) => {
            const responseData = response.data;

            setPageContent(responseData)
        })
        .catch(error => {
            console.error('An error occured while fetching data from backend', error)
        })
            
    }, [])
    
    return(
        <div className="relative top-24">
            {pageContent.map((page) => 
            <div className="mx-4 min-h-screen" key={ page.id }>
                <h1 className="text-3xl font-mono font-semibold max-lg:font-extrabold uppercase text-center">{ page.title }</h1>
                <div dangerouslySetInnerHTML={{ __html: page.content}} />
            </div>)}
        </div> 
    )
}