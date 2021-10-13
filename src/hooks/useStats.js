import { useState, useEffect } from 'react';

const useStats = () => {
    const [stats, setStats] = useState();
    useEffect(() => {
        const ENDPOINT = `enlighten.json`;
        const URL = `https://raw.githubusercontent.com/sourcecodebd/online-course-api-by-nafi/main/${ENDPOINT}`;
        fetch(URL)
            .then(res => res.json())
            .then(data => setStats(data));
    }, [])
    return [stats, setStats];
};

export default useStats;