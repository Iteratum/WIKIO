import axios from "axios"
import { useState } from "react"
import MCEEditor from "../components/MCEEditor"


export default function HandleNewPage() {
    const [create, SetCreate] = useState({
        title: '',
        content: '',
    })

    function handleTitleInput(e) {
        SetCreate({
            ...create,
            title: e.target.value,
        })
    }

    function handleContentInput(data) {
        SetCreate({
            ...create,
            content: data,
        })
    }

    function handleSubmit(e){
        e.preventDefault()

        axios.post('http://127.0.0.1:8000/newPage/', create)
        .then(response => console.log(response))
        .catch(err => console.error(err))
    }

    
    return(
        <div className="mx-4 " style={{maxWidth: '90vw'}}>
            <div className="relative top-24">
                <h1 className="text-3xl font-mono font-semibold max-lg:font-extrabold uppercase text-center">Create new Page</h1>
                <form onSubmit={handleSubmit} className="">
                    
                    <p className="block md:text-3xl font-bold pb-3">Title</p>
                    <input type="text" onChange={ handleTitleInput } name="title" className="focus:border-gray-900" style={{
                        display: "flex",
                        position: "static",
                        borderWidth: "2px",
                        borderColor: "gray",
                        borderRadius: "10px",
                        width: "70%",
                        height: "50px",
                        paddingBottom: "15px",
                    }}></input><br></br> 
                    
                    <p className="md:text-3xl font-bold">Content</p><br></br>
                    <div className="editor_container pb-8">
                    <MCEEditor editorContent={ handleContentInput }/>
                    </div>
                    
                    <p className="block md:text-3xl font-bold pb-3">Thumbnail</p>
                    <div className="thumbnail">
                        <div className="flex items-center justify-center max-w-8/12">
                            <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input id="dropzone-file" type="file" name="thumbnail" className="hidden" />
                            </label>
                        </div> 
                    </div>
                    
                    <button className="py-4 px-7 bg-gray-700 my-5">Submit</button>
                </form>
            </div>
        </div>
    )
}