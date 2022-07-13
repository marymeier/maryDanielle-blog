import React, {useState} from 'react';

interface BlogProps {
    title: string;
    content: string;
}

const Blog: React.FC<BlogProps> = props => {
    const [blogPost, setBlogPost] = useState({title:'', content:''})
    const [blogList, setBlogList] = useState<any[]>([]);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setBlogList(blogList => [...blogList, blogPost]); 
    }

    // Creating a function to delete from the blogList when the button is clicked
    function handleDelete(event: React.FormEvent<HTMLFormElement>) {
        const title = event.target.getAttribute("title")
        setBlogList(blogList.filter(item => item.title !== title));
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
                        value={blogPost.title}
                        onChange={(e) => setBlogPost({...blogPost,title:e.target.value})}
                    />
                    <h2>Blog Content</h2>
                    <input 
                        type="text"
                        placeholder="Write your post here"
                        value={blogPost.content}
                        onChange={(e) => setBlogPost({...blogPost,content:e.target.value})}                    
                    />
                    <div>
                        <input
                            type="submit"
                            value="Submit Post"
                        />
                        {blogList.map(({title, content}) => (
                            <p key={title}>{title}: {content}</p>
                        ))}
                    </div>
                    <div>
                        <button onClick={() => handleDelete}>Delete Post</button>
                        {/* <button onClick={() => onDelete(props.id)}>Delete</button> */}
                    </div>
                </form>
            </div>
        </div>
    ) 
}

export default Blog;