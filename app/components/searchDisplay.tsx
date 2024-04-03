import { useRecoilState } from "recoil"
import { responseState } from "./store"

export default function HandleSearchDisplay() {
    const [response] = useRecoilState(responseState)
    return(
        <>
            <div className="absolute bg-slate-900 top-[65%] left-[15%] h-[30vh] z-10 w-[75vw] rounded-lg overflow-y-auto scr opacity-95">
                <div className="text-lg">
                    {response.map((data) =>  data != null ? 
                    
                    <div className="rounded-lg space-x-4 bg-slate-700 p-2">
                        <a key={ data.id } href={ relativeUrl + data.id } className="">
                            <p>{ data.title }</p>
                        </a>
                    </div>
                    
                    : <h3 key={ data.id } className="opacity-70">There seems to be no content available</h3>
                    )}
                </div>
            </div>
        </>
    )
};

const relativeUrl = '/page/'