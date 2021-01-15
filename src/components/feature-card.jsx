import { MdSearch } from "react-icons/md";
import Background from '../assets/images/shoppies-bg.png';
import { useEffect, useContext } from "react";
import MainContext from "../context/main-context";
import axios from 'axios';
import useDebounce from "../hooks/use-debounce";

const FeatureCard = ({ max }) => {
    const { search, setSearch, setMovies, setTotal, setIsLoading, currentPage } = useContext(MainContext)

    const debouncedSearchInput = useDebounce(search, 500);

    async function fetchMovies() {
        setIsLoading(true);
        if (debouncedSearchInput.length >= 3) {
            await axios.get(`?s=${search}`).then(res => {
                setIsLoading(false);

                if (res.data["Response"] === "True") {
                    setMovies(res.data["Search"])
                    setTotal(res.data["totalResults"])
                } else {
                    setMovies([])
                    setTotal(0)
                }
            });
        } else {
            setMovies([])
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchMovies();
    }, [debouncedSearchInput])


    var sectionStyle = {
        backgroundRepeat: 'no-repeat',
        height: `${!max ? '800px' : '28rem'}`,
        minHeight: '28rem',
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover"
    };

    const handleChange = (e) => {
        setIsLoading(true)
        setSearch(e.target.value);
    }

    return <div className="flex items-center justify-center align-middle relative mb-16" >
        <div className="bg-green-300 w-full rounded-2xl p-16 z-40 relative " style={sectionStyle}>
            <div className="absolute bg-black bg-opacity-30 z-50 h-full w-full top-0 left-0 right-0 rounded-2xl flex flex-col items-center justify-center">
                <div className="font-bold text-4xl text-white">The Shoppies:</div>
                <div className="text-2xl text-white mt-5 text-center">Movie awards for entrepreneurs</div>
                <div className="pt-20 w-10/12">
                    <div className="flex bg-white bg-opacity-70 h-14 rounded-full justify-between items-center px-8">
                        <input placeholder="Enter at least 3 characters and search begins automatically" pattern="/^.{3,}$/" onChange={(e) => { handleChange(e) }} type="text" className="h-14 w-11/12 outline-none bg-white bg-opacity-5" />
                        {<MdSearch className="text-3xl cursor-pointer" />}
                    </div>
                </div>
            </div>
        </div>
        <div className="w-11/12 flex justify-center absolute -bottom-5">
            <div className=" z-30 bg-green-300 bg-opacity-30 w-full mx-8 rounded-2xl p-16"></div>
        </div>
        <div className="w-11/12 flex justify-center absolute -bottom-10">
            <div className=" z-20 bg-green-300 bg-opacity-20 w-full mx-16 rounded-2xl p-16"></div>
        </div>
    </div>
}


export default FeatureCard;