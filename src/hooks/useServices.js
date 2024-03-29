import { useEffect, useState } from "react"

const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('https://ohidurgclan.github.io/course9api/course.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return [services];
}
export default useServices;