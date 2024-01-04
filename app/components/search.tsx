import searchIcon from 'public/assets/151773.png'
export default function HandleSearchColumn() {
    return(
        <div style={{
            position: "absolute",
            display: "flex",
            top: "50%",
            left: "15%"
            
        }}>
            <input type="text" name="search" placeholder="Enter the keyword..." className="backdrop-blur-2xl focus:outline-none placeholder:text-slate-900 placeholder:italic" style={{
                borderWidth: "2px",
                borderColor: "black",
                borderRadius: "100px",
                padding: "30px",
                width: "75vw",
                height: "5rem",
                backgroundColor: "transparent",
            }}></input>
            <img alt="searchIcon" src={searchIcon} style={{
                display: "flex",
                position: "relative",
                width: "30px",
                height: "30px",
                translate: "-5rem 1.5rem",
            }}></img>
        </div>
    )
}