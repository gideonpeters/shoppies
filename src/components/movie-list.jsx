import MovieCard from "./movie-card";
import TitleText from "./title-text";

const MovieList = () => <div>
    <TitleText title="Search Results" />
    <div className="grid grid-cols-3 gap-8 mt-4">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
    </div>
</div>

export default MovieList;