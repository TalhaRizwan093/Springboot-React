import { useState, useEffect } from "react";
import  BlogList  from "./BlogList";

const Home = () => {
    const [blogs, setBlog] = useState(null)
    
    const [name, setName] = useState('Talha')

    const [isPending, setIsPending] = useState(true);
    

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlog(newBlogs);

    }

    useEffect(() =>{
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res =>{
                return res.json();
            })
            .then((data) =>{
                setBlog(data);
                setIsPending(false);
            })
            .catch(err =>{
                console.log(err.message);
            })
        }, 1000)
        
    },[]);


    return (
        <div className="home">
            <h1>Talha's Blogs</h1>
            { isPending && <div>Loading...</div>}
            {blogs &&<BlogList blogs = {blogs} handleDelete = {handleDelete}/>}
            {/* <h2>Ali's Blog</h2>
            {blogs &&<BlogList blogs = {blogs.filter((blog) => blog.author === "Ali")}/>}
            <button onClick = {() => setName('Ali')}>Click me</button>
            <p>{name}</p> */}
        </div>


    );
}

export default Home;