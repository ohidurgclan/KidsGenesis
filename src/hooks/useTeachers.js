import { useEffect, useState } from "react"

const useTeachers = () =>{
    const [teachers , setTeachers] = useState([]);
    useEffect(()=>{
        fetch('https://ohidurgclan.github.io/course9api/teacher.json')
        .then(res => res.json())
        .then(data => setTeachers(data))
    },[]);
    return [teachers];
}
export default useTeachers;