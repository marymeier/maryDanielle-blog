import React, {useState} from 'react';

interface BlogProps {
    name: string;
    content: string;
}

const Blog: React.FC<BlogProps> = props => {
    const [blogPost, setBlogPost] = useState({name:'name', content:'content'})
    const [blogList, setBlogList] = useState(string[]);

    function handleSubmit(event: React.FormEvent<HTMLInputElement>) {
        event.preventDefault();
        setBlogList(blogList => [...blogList, blogPost]);
    }

    return (
        <div>
            <h1>Create New Blogs</h1>
            <div style={{backgroundColor: "grey" , width: 400, height: 300, margin: "auto" }}>
                <form onSubmit={handleSubmit}>
                    <h2>Blog Name</h2>
                    <input 
                        type="text"
                        placeholder="Name your blog"
                        value={blogPost.name}
                        onChange={(e) => setBlogPost({...blogPost,name:e.target.value})}
                    />
                    <h2>Blog Content</h2>
                    <input 
                        type="text"
                        placeholder="Write your post here"
                        value={blogPost.content}
                        onChange={(e) => setBlogPost({...blogPost,content:e.target.value})}                    
                    />
                    <div>
                        <button type="submit">Submit Post </button>
                        <input
                            type="submit"
                        />
                    </div>
                </form>
            </div>
            <p></p>
        </div>
    ) 
}

export default Blog;