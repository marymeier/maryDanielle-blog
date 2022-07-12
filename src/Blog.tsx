import {useState} from 'react';
// create tsx and interface to specify title and post
// interface blogPost with two String props title and post

interface Blog {

}
const Blog: React.FC<GameProps> = props => {
    const [blogPost, setBlogPost] = useState([{title:'title', post:'post'}])
    // const [title, setTitle] = useState([]);
    // const [post, setPost] = useState([]);
    // const inputChangeHandler = (event) => {
    //     setBlogPost({ [event.target.title]: event.target.post });
    // };

   return (
    <div>
        <h1>Create New Blogs</h1>
        <div style={{backgroundColor: "grey" , width: 400, height: 300, margin: "auto" }}>
            <form>
                <h2>Blog Name 
                    <input 
                    type="text"
                    placeholder="Name your blog"
                    value={blogPost}
                    // add button to create the blog
                    onChange={(e) => setBlogPost({...blogPost,title:e.target.value})}
                    />
                </h2>
            </form>
            <form>
                <h2>Blog Content 
                    <input 
                    type="text"
                    placeholder="Write your post here"
                    value={blogPost}
                    onChange={(e) => setBlogPost({...blogPost,post:e.target.value})}                    />
                </h2>
            </form>
        </div>
        <p></p>
    </div>
   ) 
}

export default Blog;