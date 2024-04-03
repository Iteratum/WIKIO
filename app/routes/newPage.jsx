import axios from "axios"
import { useState } from "react"
import MCEEditor from "../components/MCEEditor"
import { useRecoilState } from "recoil"
import { editorContentState } from "../components/store"


export default function HandleNewPage() {
    const [contents] = useRecoilState(editorContentState)
    const [create, SetCreate] = useState({
        title: '',
        //content: '',
        thumbnail: null,
    })

    const [response, setResponse] = useState('')

    const baseURL = 'https://wikiodjango.onrender.com/newPage/'
    console.log(contents)

    function handleTitleInput(e) {
        SetCreate({
            ...create,
            title: e.target.value,
        })
    }

    /*function handleContentInput() {
        SetCreate({
            ...create,
            content: contents,
        })
    }*/

    function handleThumbnailInput(e) {
        SetCreate({
            ...create,
            thumbnail: e.target.files[0],
        })
    }

    const { title } = create
    const { thumbnail } = create

    const formData = new FormData()
    formData.append('title', title)
    formData.append('content', contents)
    formData.append('thumbnail', thumbnail)

    function handleSubmit(e){
        e.preventDefault()

        axios.post(baseURL, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        } )
        .then((response) => {
            setResponse(response.data)
            console.log(response)
        })
        .catch(err => console.error(err))
    }
    
    
    return(
        <div className="mx-4 " style={{maxWidth: '90vw'}}>
            <div className="relative top-24">
                <h1 className="text-3xl font-mono font-semibold max-lg:font-extrabold uppercase text-center">Create new Page</h1>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    
                    <p className="block md:text-3xl font-bold pb-3">Title</p>
                    <input type="text" onChange={ handleTitleInput } name="title" className="focus:border-gray-900" style={{
                        display: "flex",
                        position: "relative",
                        borderWidth: "2px",
                        borderColor: "gray",
                        borderRadius: "10px",
                        width: "70%",
                        height: "50px",
                        paddingBottom: "15px",
                        padding: "4px",
                    }}></input><br></br> 
                    
                    <p className="md:text-3xl font-bold">Content</p><br></br>
                    <div className="editor_container pb-8">
                        <MCEEditor />
                    </div>
                    
                    <p className="block md:text-3xl font-bold pb-3">Thumbnail</p>
                    <input type="file" name="thumbnail" onChange={ handleThumbnailInput }></input>
                    
                    <button className="py-4 px-7 bg-gray-700 my-5">Submit</button>
                </form>
                <p>Response: { response }</p>
            </div>
        </div>
    )
}