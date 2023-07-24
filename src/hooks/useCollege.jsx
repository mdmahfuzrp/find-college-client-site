import { useEffect, useState } from "react";

const useCollege = () => {
    
    const [allcollege, setAllCollege] = useState([])

    useEffect(() => {

        fetch('https://find-college-server.vercel.app/all-college')
        .then(res => res.json())
        .then(data => setAllCollege(data))
    }, [])

    return allcollege
};

export default useCollege;