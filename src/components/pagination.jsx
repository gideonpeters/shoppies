import { useState, useEffect, useContext } from "react";
import MainContext from "../context/main-context";
import axios from "axios";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { search, setMovies, movies, total } = useContext(MainContext)

    async function fetchData() {
        if (currentPage > 1) {
            await axios.get(`?s=${search}&page=${currentPage}`).then(res => {
                if (res.data["Response"] === "True") {
                    setMovies(res.data["Search"])
                    // setCurrentPage(currentPage++);
                }
                console.log(res.data);
            });
        }
    }

    function increment() {
        console.log(total > (currentPage * 10) + (10 - movies.length))
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
    return <div className="flex items-center">
        <HiChevronLeft className="text-gray-500 cursor-pointer" onClick={decrement} />
        <div className="mx-2">{((currentPage - 1) * 10) + 1} - {(currentPage * 10) + movies.length - 10} of {total}</div>
        <HiChevronRight className="text-gray-500 cursor-pointer" onClick={increment} />

    </div>
}

export default Pagination;