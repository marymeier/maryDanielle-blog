import {useState} from 'react';

const Blog = (props) => {
    const [title, setTitle] = useState([]);
    const [post, setPost] = useState([]);

   return (
    <div>
        <h1>Create New Blogs</h1>
        <div style={{backgroundColor: "grey" , width: 400, height: 300, margin: "auto" }}>
            <form onSubmit={e => e.preventDefault()}>
                <h2>Blog Name 
                    <input 
                    type="text"
                    placeholder="Name your blog"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </h2>
            </form>
            <form onSubmit={e => e.preventDefault()}>
                <h2>Blog Content 
                    <input 
                    type="text"
                    placeholder="Write your post here"
                    value={post}
                    onChange={(e) => setPost(e.target.value)}                    />
                </h2>
            </form>
        </div>
    </div>
   ) 
}

export default Blog;