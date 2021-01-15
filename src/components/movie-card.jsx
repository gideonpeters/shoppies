// import { GiRoundStar } from "react-icons/gi";

import { useContext } from "react";
import MainContext from "../context/main-context";

const MovieCard = ({ movie }) => {
    const { nominations, setNominations } = useContext(MainContext);

    const isContained = (item) => item["imdbID"] === movie["imdbID"];

    function nominate() {
        if (!nominations.some(isContained)) {
            setNominations([...nominations, movie]);
        }
        console.log(nominations.some(isContained))
        console.log(movie)
        console.log(nominations)
    }

    return <div className="flex">
        <div className="flex bg-blue-200 h-44 w-7/12 justify-between p-8 cursor-pointer mr-3" style={{ backgroundImage: `url(${movie["Poster"]})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center' }}></div>
        <div className="flex flex-col w-5/12">
            <div>
                <div className="mb-4">{movie["Title"]}</div>
                <div className="text-gray-500">{movie["Year"]}</div>
            </div>
            <div className="mt-auto">
                <button disabled={nominations.some(isContained)} onClick={nominate} className="bg-yellow-400 text-xs px-5 py-2 rounded focus:outline-none hover:opacity-80 disabled:opacity-50">Nominate</button>
            </div>
        </div>
    </div>
}

export default MovieCard;