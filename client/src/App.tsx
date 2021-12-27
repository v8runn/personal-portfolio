import { useEffect, useState } from "react";
import Landing from "./Landing";
import PreLoader from "./PreLoader";

export default function App () {
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setTimeout(() => setLoading(false), 1000)
    }, [])

    return (
        <>
        {loading === false ? (<Landing />) : (<PreLoader />)}
        </>
    )
}