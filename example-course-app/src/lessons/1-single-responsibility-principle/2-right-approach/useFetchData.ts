// ✅ Single responsibility: managing data
import {useEffect, useState} from "react";

export function useFetchData() {
    const [data, setData] = useState();

    useEffect(() => {
        fetch('/api/data')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return data;
}