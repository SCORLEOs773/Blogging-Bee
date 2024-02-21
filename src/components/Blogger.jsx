import React, { useState } from 'react';


export default function Blogger() {
    const [blogs, setBlogs] = useState([
        {
            id: 1,
            title: 'Blog 1',
            description: 'Description for Blog 1',
            image: 'https://picsum.photos/id/200/200',
            likes: 0,
            dislikes: 0,
            isLiked: false,
            isDisliked: false,
        },
        {
            id: 2,
            title: 'Blog 2',
            description: 'Description for Blog 2',
            image: 'https://picsum.photos/id/201/200',
            likes: 0,
            dislikes: 0,
            isLiked: false,
            isDisliked: false,
        },
        {
            id: 3,
            title: 'Blog 3',
            description: 'Description for Blog 3',
            image: 'https://picsum.photos/id/202/200',
            likes: 0,
            dislikes: 0,
            isLiked: false,
            isDisliked: false,
        },
        // Add more blogs as needed
    ]);

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
        <div className="container">
            <div className="row my-4">
                {blogs.map((blog) => (
                    <div key={blog.id} className="col-md-4">
                        <div className="card">
                            <img src={blog.image} alt={blog.title} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{blog.title}</h5>
                                <p className="card-text">{blog.description}</p>
                                <div className="d-flex justify-content-between">
                                    <button
                                        className={`btn btn-light thumb-button ${blog.isLiked ? 'active btn-primary' : ''
                                            }`}
                                        style={{
                                            backgroundColor: blog.isLiked ? '#318CE7' : 'white',
                                            color: blog.isLiked ? 'white' : 'black',
                                        }}
                                        onClick={() => handleLike(blog.id)}
                                    >
                                        <i
                                            className={`fas fa-thumbs-up ${blog.isLiked ? 'text-white' : ''} mx-2`}
                                        ></i>
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
                                        <i
                                            className={`fas fa-thumbs-down ${blog.isDisliked ? 'text-white' : ''} mx-2`}
                                        ></i>
                                        Dislike ({blog.dislikes})
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
