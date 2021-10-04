import { useEffect, useState } from "react"

const useTeacher = () =>{
    const [teacher , setTeacher] = useState([]);
    useEffect(()=>{
        fetch('https://ohidurgclan.github.io/course9api/teacher.json')
        .then(res => res.json())
        .then(data => setTeacher(data))
    },[]);
    return [teacher, setTeacher];
}
export default useTeacher;