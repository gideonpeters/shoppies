import { MdSearch } from "react-icons/md";
import Background from '../assets/images/shoppies-bg.png';
import { useEffect, useContext, useState } from "react";
import MainContext from "../context/main-context";
import axios from 'axios';
import useDebounce from "../hooks/use-debounce";

const FeatureCard = ({ max }) => {
    const { search, setSearch, setMovies, setTotal, isLoading, setIsLoading } = useContext(MainContext)

    const debouncedSearchInput = useDebounce(search, 500);

    async function fetchMovies() {
        if (debouncedSearchInput.length >= 3) {
            setIsLoading(true);
            await axios.get(`?s=${search}`).then(res => {
                setIsLoading(false);

                if (res.data["Response"] === "True") {
                    setMovies(res.data["Search"])
                    setTotal(res.data["totalResults"])
                } else {
                    setMovies([])
                    setTotal(0)
                }
                console.log(res.data);
            });
        } else {
            setMovies([])
        }
    }

    useEffect(() => {
        fetchMovies();
    }, [debouncedSearchInput])

    var sectionStyle = {
        backgroundRepeat: 'no-repeat',
        height: `${!max ? '800px' : '28rem'}`,
        minHeight: '28rem',
        backgroundImage: `url(${Background})`
    };

    const handleChange = (e) => {
        setSearch(e.target.value);
        console.log(search);
    }

    return <div className="flex items-center justify-center align-middle relative mb-16" >
        <div className="bg-blue-300 w-11/12 rounded-2xl p-16 z-40 relative " style={sectionStyle}>
            <div className="absolute bg-black bg-opacity-30 z-50 h-full w-full top-0 left-0 right-0 rounded-2xl flex flex-col items-center justify-center">
                <div className="font-bold text-4xl text-white">The Shoppies:</div>
                <div className="text-2xl text-white mt-5 text-center">Movie awards for entrepreneurs</div>
                <div className="pt-20 w-10/12">
                    <div className="flex bg-white bg-opacity-70 h-14 rounded-full justify-between items-center px-8">
                        <input pattern="/^.{3,}$/" onChange={(e) => handleChange(e)} type="text" name="" id="" className="h-14 w-11/12 outline-none bg-white bg-opacity-5" />
                        {<MdSearch className="text-3xl cursor-pointer" />}
                    </div>
                </div>
            </div>
        </div>
        <div className="w-11/12 flex justify-center absolute -bottom-5">
            <div className=" z-30 bg-blue-200 w-full mx-8 rounded-2xl p-16"></div>
        </div>
        <div className="w-11/12 flex justify-center absolute -bottom-10">
            <div className=" z-20 bg-blue-100 w-full mx-16 rounded-2xl p-16"></div>
        </div>
    </div>
}


export default FeatureCard;