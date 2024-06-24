import { useContext } from "react"
import { StudentContext } from "./contextProvider"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';




function Favourite() {
    const { favourites, setFavourites } = useContext(StudentContext)

    const removeFromFavourite = (student) => {
        const updatedFavourites = favourites.filter((favo) => favo !== student)
        setFavourites(updatedFavourites)

    }
    return (
        <div>
            <h1 className="py-3 text-center text-2xl font-bold">Favourites
                {favourites.length === 0 ?
                    <FontAwesomeIcon className='text-red-600 pl-2' icon={regularHeart} /> :
                    <FontAwesomeIcon className='text-red-600 pl-2' icon={solidHeart} />}
            </h1>

            {favourites.length === 0 ? <p className='text-center text-red-600 text-xl'>You haven't added any students <br /> to the favourite list.</p> : <p></p>}
            {favourites.map((student) => {
                return (
                    <div className='flex items-center justify-evenly text-right'>

                        <li className=" text-xl -ml-4 ">{student}</li>

                        <button className='bg-red-500 px-2 py-1 text-white my-3 text-right  border rounded-md active:scale-95' onClick={() => removeFromFavourite(student)}>Remove</button>
                    </div>
                )
            })}
        </div>
    )
}
export default Favourite