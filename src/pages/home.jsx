import FeatureCard from './../components/feature-card';
import MovieList from './../components/movie-list';
import NominationList from './../components/nomination-list';
import { useState } from 'react';

const Home = () => {
    const [movies, setMovies] = useState([1])
    const [nominations, setNominations] = useState([1])

    return <div className="container mx-auto w-screen overflow-x-hidden min-h-screen py-10">
        <div className={nominations.length > 0 ? "grid grid-cols-3" : "grid grid-cols-1"}>
            <div className={nominations.length > 0 ? "col-span-2" : "col-span-3"}>
                <FeatureCard max={nominations.length > 0 || movies.length > 0} />
                {movies.length > 0 && <MovieList />}
            </div>
            {nominations.length > 0 && <NominationList />}
        </div>
    </div>
}

export default Home;