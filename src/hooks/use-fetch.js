import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import MainContext from '../context/main-context';

export const useFetch = (url = "", options = {}) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const { search } = useContext(MainContext)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${url}?s=${search}`, options);
                const data = await res.data;
                setResponse(data);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, []);
    return { response, error };
};
