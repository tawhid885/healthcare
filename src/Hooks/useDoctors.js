import { useState, useEffect } from "react";

const useDoctors =()=>{
    const [doctors, setDoctors] = useState([]);
    
    useEffect(()=>{
        const url = `./data.json`;
        fetch(url)
        .then(res=> res.json())
        .then(data => setDoctors(data))
    },[]);

    return {
        doctors,
        setDoctors
    }
}

export default useDoctors;