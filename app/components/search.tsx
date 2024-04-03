import searchIcon from 'public/assets/151773.png'
import { useEffect, useState } from "react"
import axios from "axios"
import { useRecoilState } from 'recoil'
import { inputState, responseState } from "./store"

export default function HandleSearchColumn() {
   
    const [searchInput, setSearchInput] = useState()
    const [response, setResponse] = useRecoilState(responseState)
    const [inputstatus, setInputstatus] = useRecoilState(inputState)


    const baseURL = 'http://127.0.0.1:8000/search/'

    
    /*useEffect(() => {
        axios.get(baseURL)
        .then((response) => {           
            setResponse(response.data)
            console.log(response)
        })
        .catch(error => {
            console.error('An error occured while fetching data from backend', error)
        })
            
    }, [])*/

    function SearchHandler(e:any) {
        e.preventDefault()
        axios.get(baseURL, {
            params: {
                title: searchInput
            }
        })
        .then((response) => {           
            setResponse(response.data)
            console.log(response)
        })
        .catch(error => {
            console.error('An error occured while fetching data from backend', error)
        })
    }

    function HandleInput(e:any) {
        setSearchInput(e.target.value)
    }

    function HandleInputStatus() {
        setInputstatus(true)
    }

    function RemoveFocus() {
        setInputstatus(false)
    }

    return(
        <div style={{
            position: "absolute",
            display: "flex",
            top: "50%",
            left: "15%"
            
        }}>
            <form onSubmit={ SearchHandler }>
                <input type="text" value={ searchInput } onBlur={ RemoveFocus } onKeyDown={ HandleInputStatus } onChange={ HandleInput } placeholder="Enter the keyword..." className="bg-slate-900 focus:outline-none placeholder:text-slate-900 placeholder:italic" style={{
                    borderWidth: "2px",
                    borderColor: "black",
                    borderRadius: "100px",
                    padding: "30px",
                    width: "75vw",
                    height: "5rem",
                    fontSize: "24px",
                    opacity: "0.7"
                }}></input>
            </form>
            
            <img onClick={ SearchHandler } alt="searchIcon" src={searchIcon} style={{
                display: "flex",
                position: "relative",
                width: "30px",
                height: "30px",
                translate: "-5rem 1.5rem",
                cursor: "pointer",
            }}></img>
        </div>
    )
}

/*export function HandleSearchDisplay() {
    return(
        <>
            <div className="absolute flex top-[65%] left-[15%] h-[30vh] z-10 w-[75vw] rounded-lg opacity-95 bg-slate-900">
                <div className="p-4 text-2xl">
                    {respon}
                </div>
            </div>
        </>
    )
};*/