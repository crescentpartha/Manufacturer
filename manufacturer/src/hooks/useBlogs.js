import { useEffect, useState } from "react"

const useBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('./api/blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);

    return [blogs, setBlogs];
}

export default useBlogs;