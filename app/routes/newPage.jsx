import axios from "axios"
import { useState } from "react"
import TiptapEditor from "../components/Editor"


export default function HandleNewPage() {
    const [create, SetCreate] = useState({
        title: '',
        content: '',
    })

    function handleInput(e) {
        SetCreate({
            ...create, [e.target.name]: e.target.value
        })
    }
    function handleSubmit(e){
        e.preventDefault()

        axios.post('http://127.0.0.1:8000/newPage/', create)
        .then(response => console.log(response))
        .catch(err => console.error(err))
    }
    return(
        <div className="mx-4">
            <div className="relative top-24">
                <h1 className="text-3xl font-mono font-semibold max-lg:font-extrabold uppercase text-center">Create new Page</h1>
                <form onSubmit={handleSubmit} className="border-2 justify-center">
                    Title: <input onChange={handleInput} className="outline-2 border-2 border-black" type="text" name="title"></input><br></br>
                    <TiptapEditor />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}