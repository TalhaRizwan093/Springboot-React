import { useState, useEffect } from "react";
import axios from 'axios';
const useGetAxios = (url) => {

    const [isPending, setIsPending] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {

        // fetch('http://localhost:8000/blogs')
        // .then(res =>{
        //     return res.json();
        // })
        // .then((data) =>{
        //     setBlog(data);
        //     setIsPending(false);
        // })
        // .catch(err =>{
        //     console.log(err.message);
        // })
        let source = axios.CancelToken.source();
        setTimeout(() => {
            
            axios.get(url, { cancelToken: source.token })
                .then(res => {
                    return res.data;
                })

                .then(data => {
                    console.log(data);
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    if (axios.isCancel(err)) {
                        console.log('fetch aborted');
                    }
                    else {
                        setError(err.message);
                        setIsPending(false);
                        return err.message;
                    }

                })
        }, 1000);
        return () => {
            source.cancel();
        };
    }, [url]);



    return { data, isPending, error }



}

export default useGetAxios;