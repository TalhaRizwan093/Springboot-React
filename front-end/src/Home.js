
import Database from "./database"

import useFetch from "./axiosGet";
const Home = () => {
    
    //const [name, setName] = useState('Talha');

    const {data , isPending, error} = useFetch('http://localhost:8080/employee');
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlog(newBlogs);
    // }

    return (
        <div className="home">
            <h1>Talha's Blogs</h1>
            
            { isPending && <div>Loading...</div>}
            { error && <div>{error}</div>}
            {/* {blogs &&<BlogList blogs = {blogs} handleDelete = {handleDelete}/>} */}
            {/* <h2>Ali's Blog</h2>
            {blogs &&<BlogList blogs = {blogs.filter((blog) => blog.author === "Ali")}/>}
            <button onClick = {() => setName('Ali')}>Click me</button>
            <p>{name}</p> */}
            {/* {database && database.map(database =>(
                <div key={database.id}>
                    <p>{database.email}</p>
                </div>

            ))
            
            } */}

            { data && <Database databases = {data} />}
        </div>


    );
}

export default Home;