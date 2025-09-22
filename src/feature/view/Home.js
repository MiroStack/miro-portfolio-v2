import React from "react"
export const Home = ({ theme }) => {
    return (
        <div className={`
            ${theme == "dark"?"text-black":"bg-black text-white"}
            h-screen 

             flex flex-col
              justify-center
               items-center`}>
            <h1>Hi I'm Miro Ivan D. Sarte</h1>
            <h1>Currently using React version: {React.version}</h1>
        </div>
    )
}