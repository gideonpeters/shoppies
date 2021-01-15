import MovieCard from "./movie-card";
import TitleText from "./title-text";
import { useContext } from "react";
import MainContext from "../context/main-context";
import Pagination from "./pagination";
import Empty from './../assets/images/empty.svg'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const MovieList = () => {
    const { movies, search, isLoading } = useContext(MainContext);

    return <div>
        {isLoading ? <div>
            <TitleText title="Fetching Movies" />
            <div className="flex justify-center mt-10">
                <AiOutlineLoading3Quarters color={"green"} className="spin-animation text-9xl green-500" />
            </div>
        </div> :
            <div>
                <TitleText title={`Search Results for "${search}"`} />


                {movies.length > 0 ?
                    <div>
                        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-4 mt-4">
                            {movies.map((movie, ix) => <MovieCard key={ix} movie={movie} />)}
                        </div>

                    </div>
                    :
                    <div className="flex flex-col items-center mb-8">
                        <img src={Empty} alt="all movies" className="h-52 my-10" />
                        <div>No results for this search...</div>
                    </div>}
            </div>}
        <div className="flex w-full justify-center">
            {movies.length > 0 && <Pagination />}
        </div>
    </div>
}

export default MovieList;