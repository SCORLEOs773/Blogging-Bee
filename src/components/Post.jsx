import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export default function Post({ blogDataProp }) {
    const { id } = useParams();
    const [blogData, setBlogData] = useState(null);

    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setBlogData(data);
            })
            .catch((error) => console.log(error));
        setLikes(10);
        setDislikes(5);
    }, [id]);

    const handleLike = () => {
        if (isLiked) {
            setLikes((prevLikes) => (prevLikes > 0 ? prevLikes - 1 : 0));
            setIsLiked(false);
        } else {
            setLikes((prevLikes) => prevLikes + 1);
            setIsLiked(true);
            setIsDisliked(false);
            setDislikes((prevDislikes) => (prevDislikes > 0 ? prevDislikes - 1 : 0));
        }
    };

    const handleDislike = () => {
        if (isDisliked) {
            setDislikes((prevDislikes) => (prevDislikes > 0 ? prevDislikes - 1 : 0));
            setIsDisliked(false);
        } else {
            setDislikes((prevDislikes) => prevDislikes + 1);
            setIsDisliked(true);
            setIsLiked(false);
            setLikes((prevLikes) => (prevLikes > 0 ? prevLikes - 1 : 0));
        }
    };

    const handleComment = () => {
        if (comment.trim() !== '') {
            setComments([...comments, comment]);
            setComment('');
        }
    };

    if (!blogData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center text-uppercase mb-4">{blogData.title}</h2>
                            <div className="text-center">
                                <img src={blogData.thumbnail} alt="Blog" className="img-fluid mb-4" />
                            </div>
                            <p className="card-text text-center">{blogData.description}</p>
                            <p className="card-text text-center">Hashtags: <span className='text-primary'>{blogData.hashtags}</span></p>

                            <div className="text-center mb-3 d-flex justify-content-evenly">
                                <button
                                    className={`btn ${isLiked ? 'btn-primary' : 'btn-light'}`}
                                    onClick={handleLike}
                                >
                                    Like ({likes})
                                </button>
                                <button
                                    className={`btn ${isDisliked ? 'btn-danger' : 'btn-light'}`}
                                    onClick={handleDislike}
                                >
                                    Dislike ({dislikes})
                                </button>
                            </div>

                            <div>
                                <h4 className="mb-3">Comments</h4>
                                {comments.map((comment, index) => (
                                    <div key={index} className="d-flex align-items-center mb-3">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyNzPMaxTcVquUYhw4XmA7X-M2sTzCpEomRg&usqp=CAU"
                                            alt="Avatar"
                                            className="rounded-circle mx-3"
                                            style={{ width: '30px', height: '30px' }}
                                        />
                                        <p className="mb-0">{comment}</p>
                                    </div>
                                ))}
                                <div className="d-flex justify-content-between   align-items-center mb-3">
                                    <input
                                        type="text"
                                        placeholder="Add a comment"
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                        className="form-control mr-2"
                                        style={{ border: '1px solid #ced4da', borderRadius: '5px', width: '80%' }}
                                    />
                                    <button onClick={handleComment} className="btn btn-primary">
                                        Post Comment
                                        <i className="fas fa-angles-right fa-solid m-2" style={{ color: '#21ca81' }}></i>
                                    </button>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
