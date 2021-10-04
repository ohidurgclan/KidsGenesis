import { useEffect, useState } from "react"

const useCourse = () => {
    const [course, setCourse] = useState([]);
    useEffect(()=>{
        fetch('https://ohidurgclan.github.io/course9api/course.json')
        .then(res => res.json())
        .then(data => setCourse(data))
    }, [])
    return [course, setCourse];
}
export default useCourse;