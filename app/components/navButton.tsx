
export default function NavButton() {
    return(
        <div style={{
            position: "absolute",
            display: "flex",
            top: "80vh",
            left: "75%"
            
        }}>
          <a className="sticky text-yellow-300 bg-slate-700 font-medium rounded-3xl p-4 z-40 ease-in animate-bounce" href="/indexes"><button>GoTo</button></a>
      </div>
    )
}