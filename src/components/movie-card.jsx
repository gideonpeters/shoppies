import { GiRoundStar } from "react-icons/gi";

const MovieCard = () => <div className="flex">
    {/* <div> */}
    <div className="flex bg-blue-200 h-44 w-9/12 justify-between p-8 cursor-pointer mr-5"></div>
    <div className="flex flex-col">
        {/* <GiRoundStar className="text-2xl text-yellow-300" /> */}
        <div>
            <div className="mb-4">Name of the movie will go right here</div>
            <div>2019</div>
        </div>
        <div className="mt-auto">
            <button className="bg-blue-300 px-5 py-2 rounded">Nominate</button>
        </div>
    </div>
    {/* </div> */}
</div>

export default MovieCard;