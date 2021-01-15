import { useState, useEffect, useContext } from "react";
import MainContext from "../context/main-context";
import axios from "axios";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { search, setMovies, movies, total, setIsLoading, } = useContext(MainContext)

    async function fetchData() {
        setIsLoading(true)
        if (currentPage > 1) {
            await axios.get(`?s=${search}&page=${currentPage}`).then(res => {
                setIsLoading(false)
                if (res.data["Response"] === "True") {
                    setMovies(res.data["Search"])
                } else {
                    setMovies([])
                }
            });
        }
        setIsLoading(false)
    }

    function increment() {
        if (total > (currentPage * 10) + (10 - movies.length)) {
            let page = currentPage + 1;
            setCurrentPage(page);
        }
    }

    function decrement() {
        if (currentPage > 0) {
            let page = currentPage - 1;
            setCurrentPage(page);
        }
    }

    useEffect(() => {
        fetchData();
    }, [currentPage])

    return <div className="flex items-center mt-5 font-bold">
        <BsArrowLeft className="text-gray-500 cursor-pointer w-16" onClick={() => decrement()} />
        <div className="mx-2">{((currentPage - 1) * 10) + 1} - {(currentPage * 10) + movies.length - 10} of {total}</div>
        <BsArrowRight className="text-gray-500 cursor-pointer w-16" onClick={() => increment()} />
    </div>
}

export default Pagination;