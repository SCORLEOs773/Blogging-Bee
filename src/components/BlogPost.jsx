import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';


export default function Blogger() {

    const { theme } = useContext(ThemeContext);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products/?limit=9')
            .then((response) => response.json())
            .then((data) => {
                const modifiedData = data.products.map((blog) => ({
                    ...blog,
                    likes: 0,
                    dislikes: 0,
                    isLiked: false,
                    isDisliked: false,
                }));
                setBlogs(modifiedData);
            })
            .catch((error) => console.log(error));
    }, []);

    const handleLike = (id) => {
        setBlogs((prevBlogs) =>
            prevBlogs.map((blog) =>
                blog.id === id
                    ? {
                        ...blog,
                        likes: blog.isLiked ? blog.likes - 1 : blog.likes + 1,
                        isLiked: !blog.isLiked,
                        isDisliked: false,
                        dislikes: blog.isDisliked ? blog.dislikes - 1 : blog.dislikes,
                    }
                    : blog
            )
        );
    };

    const handleDislike = (id) => {
        setBlogs((prevBlogs) =>
            prevBlogs.map((blog) =>
                blog.id === id
                    ? {
                        ...blog,
                        dislikes: blog.isDisliked ? blog.dislikes - 1 : blog.dislikes + 1,
                        isDisliked: !blog.isDisliked,
                        isLiked: false,
                        likes: blog.isLiked ? blog.likes - 1 : blog.likes,
                    }
                    : blog
            )
        );
    };

    return (
        <div className={`container ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light'}`} style={{ minHeight: '100vh' }}>

            <div className="row my-4">
                {blogs.map((blog) => (
                    <div key={blog.id} className="col-md-4">
                        <div className="card m-3" style={{ height: '450px' }}>
                            <img src={blog.thumbnail} alt={blog.title} className="card-img-top" style={{ height: '250px' }} />
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div>
                                    <h5 className="card-title">{blog.title}</h5>
                                    <p className="card-text">{blog.description.slice(0, 50) + ' . . . .'}</p>
                                </div>
                                <div className="text-center">
                                    <div className="d-flex justify-content-between">
                                        <button
                                            className={`btn btn-light thumb-button ${blog.isLiked ? 'active btn-primary' : ''}`}
                                            style={{
                                                backgroundColor: blog.isLiked ? '#318CE7' : 'white',
                                                color: blog.isLiked ? 'white' : 'black',
                                            }}
                                            onClick={() => handleLike(blog.id)}
                                        >
                                            <i className={`fas fa-thumbs-up ${blog.isLiked ? 'text-white' : ''} mx-2`}></i>
                                            Like ({blog.likes})
                                        </button>
                                        <button
                                            className={`btn btn-light thumb-button ${blog.isDisliked ? 'active btn-danger' : ''} mx-2`}
                                            style={{
                                                backgroundColor: blog.isDisliked ? 'red' : 'white',
                                                color: blog.isDisliked ? 'white' : 'black',
                                            }}
                                            onClick={() => handleDislike(blog.id)}
                                        >
                                            <i className={`fas fa-thumbs-down ${blog.isDisliked ? 'text-white' : ''} mx-2`}></i>
                                            Dislike ({blog.dislikes})
                                        </button>
                                    </div>
                                    {/* <a href={`/blog/${blog.id}`} className="btn btn-info mt-3 text-light">
                                        Read Blog
                                    </a> */}
                                    <Link to={`/blog/${blog.id}`} className="btn btn-info mt-3 text-light">
                                        Read Blog
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
