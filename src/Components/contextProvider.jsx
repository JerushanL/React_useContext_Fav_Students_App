import React, {createContext, useState} from "react";

export const StudentContext = createContext()

function StudentProvider({children}){
    const [students] = useState(["Jeru","Shan","Saja","Vijay","Lemi","Kate","Mia"])
    const [favourites,setFavourites] = useState([])

    return(
        <div class="b">
            <StudentContext.Provider value={{students,favourites,setFavourites}}>
                {children}
            </StudentContext.Provider>
        </div>
    )
}
export default StudentProvider