import FeatureCard from './../components/feature-card';
import MovieList from './../components/movie-list';
import NominationList from './../components/nomination-list';
import { useContext, useEffect, useCallback } from 'react';
import MainContext from '../context/main-context';

const Home = () => {
    const { nominations, movies, search, isLoading } = useContext(MainContext)

    const storeNominations = useCallback((evt) => {
        localStorage.setItem('shoppies-nominations', JSON.stringify(nominations))
        return evt.returnValue = "Unloading"
    }, [nominations])

    useEffect(() => {
        window.addEventListener("beforeunload", storeNominations);

        return () => {
            window.removeEventListener("beforeunload", storeNominations);
        }
    }, [storeNominations])


    return <div className="container mx-auto w-screen overflow-x-hidden min-h-screen py-10">
        <FeatureCard max={(movies.length > 0 || (search.length > 0 && !isLoading)) || nominations.length > 0} />
        <div className="flex lg:flex-row flex-col lg:justify-around items-center lg:items-start">
            <div className={(movies.length > 0 || (search.length > 0 && !isLoading)) ? "lg:w-6/12 w-11/12" : ""}>
                {(movies.length > 0 || (search.length > 0 && !isLoading)) && <MovieList />}
            </div>
            <div className={movies.length > 0 ? "lg:w-5/12 w-11/12 lg:mt-0 mt-10" : "w-full"}>
                {(nominations.length > 0 || movies.length > 0) && <NominationList />}
            </div>
        </div>
    </div>
}

export default Home;