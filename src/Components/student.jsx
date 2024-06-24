import { useContext } from "react"
import { StudentContext } from "./contextProvider"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart, faUsers } from '@fortawesome/free-solid-svg-icons';





function Student() {
    const { students, favourites, setFavourites } = useContext(StudentContext)

    const addToFavourites = (student) => {
        setFavourites([...favourites, student])
    }
    console.log(favourites)
    return (
        <div >

            <h1 className="py-3 text-center text-2xl font-bold">Students List
                <FontAwesomeIcon className="pl-2" icon={faUsers} />
            </h1>
            {students.map((student) => {
                return (
                    <div>

                        <div className='flex items-center justify-evenly text-right gap-8' >
                            <li className='text-xl'>{student}</li>
                            {favourites.includes(student) ?
                                (<div>
                                    <button className="bg-gray-400 p-1 text-white my-3 text-right  border rounded-md " disabled>Added To Favourites
                                    </button>
                                    <FontAwesomeIcon className="mr-1 text-red-500 pl-2" icon={solidHeart} />
                                </div>) :
                                (<div>
                                    <button className="bg-black p-1 text-white my-3  px-3 border rounded-md active:scale-95 "
                                        onClick={() => addToFavourites(student)}>Add To Favourites
                                    </button>
                                    <FontAwesomeIcon className="mr-1 pl-3" icon={regularHeart} />
                                </div>)}
                        </div>
                    </div>

                )
            })}
        </div>
    )
}
export default Student