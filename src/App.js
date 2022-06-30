import { useState } from "react";
import BlogForm from "./components/BlogForm";
import BlogPost from "./components/BlogPost";
import './App.css'

const blogDATA = [{
    title: 'Original IPSUM Blog',
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates necessitatibus tenetur dolores, quas, placeat optio itaque illo labore excepturi possimus quasi quae repudiandae deleniti cum beatae sint commodi? Quaerat, expedita?"
}]

export default function App() {

    const [uid, setUid] = useState(2)
    const [formToggle, setFormToggle] = useState(false);
    const [editToggle, setEditToggle] = useState(false);
    const [posts, setPosts] = useState([...blogDATA]);

    const handleAddClick = () => {
        setFormToggle(!formToggle);
    }

    const form = (
        <div className="cms-blog-form">
                <BlogForm  setPosts={setPosts} posts={posts} uid={uid} setUid={setUid}/>
        </div>
    )

    const post = posts.map(item => 
    <BlogPost {...item}
    editToggle = {editToggle} 
    setEditToggle = {setEditToggle} 
    posts = {posts} 
    setPosts={setPosts}/>)

    return(
        
        <div className="container">
            <div><button type="button" onClick={handleAddClick}>Add</button></div>
            <div>{formToggle && form}</div>
            <div>{post}</div>
        </div>
    )
}