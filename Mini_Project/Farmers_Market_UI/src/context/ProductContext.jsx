import React, { useEffect, useState} from 'react';
import { getVeges, getFlowers } from '../api/DbConnect';


// component to fetch data from db.json
export const useProductContext = () => {
    const [veges, setVeges] = useState([]);
    const [flowers, setFlowers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>{
        const fetchAll = async () => {
            try{
                const [veges, flowers] = await Promise.all([getVeges(), getFlowers()]);

                setVeges(veges.data);
                setFlowers(flowers.data);
            } catch (err) {
                setError(err.message);
                console.log(err);
            } finally{
                setLoading(false);
            }
        };

        fetchAll();
    }, [])

    return {veges, flowers, setVeges, setFlowers, loading, error,}
}
