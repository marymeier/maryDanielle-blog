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
    // function handleDelete(event: any) {
    //     const title = event.target.getAttribute("title")
    //     setBlogList(blogList.filter(item => item.title !== title));
    // }

    return (
        <div>
            <h1>Create New Blogs</h1>
            <div style={{backgroundColor: "#f4f0ec" , width: 400, height: 300, margin: "auto" }}>
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
                    </div>
                    
                </form>
                
            </div>
            <div className="list">
                {blogList.map(({title, content}) => (
                <p className="active" key={title}>{title}: {content}</p>
            ))}
            </div>
            {/* <div>
                <button onClick={() => handleDelete}>Delete Post</button>
                <button onClick={() => onDelete(props.id)}>Delete</button>
            </div> */}
        </div>
    ) 
}

export default Blog;