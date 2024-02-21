import React, { useState } from 'react';

export default function WriteBlog({ onBlogSubmit }) {
    const [selectedImage, setSelectedImage] = useState(null);
    const [blogTitle, setBlogTitle] = useState('');
    const [blogDescription, setBlogDescription] = useState('');
    const [hashtags, setHashtags] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const blogData = {
            title: blogTitle,
            image: selectedImage,
            description: blogDescription,
            hashtags: hashtags,
        };
        onBlogSubmit(blogData);
    };

    return (
        <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <div className="container">
                <h2 className="text-center">Write a Blog</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="blogTitle" className="form-label">
                            Blog Title
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="blogTitle"
                            value={blogTitle}
                            onChange={(e) => setBlogTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="blogImage" className="form-label">
                            Upload Image
                        </label>
                        <input
                            type="file"
                            className="form-control"
                            id="blogImage"
                            onChange={handleImageChange}
                        />
                        {selectedImage && (
                            <div className="text-center mt-3">
                                <img
                                    src={selectedImage}
                                    alt="Selected"
                                    className="img-fluid"
                                    style={{ maxHeight: '300px', maxWidth: '300px' }}
                                />
                            </div>
                        )}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="blogDescription" className="form-label">
                            Blog Description
                        </label>
                        <textarea
                            className="form-control"
                            id="blogDescription"
                            rows="4"
                            value={blogDescription}
                            onChange={(e) => setBlogDescription(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="hashtags" className="form-label">
                            Hashtags
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="hashtags"
                            value={hashtags}
                            onChange={(e) => setHashtags(e.target.value)}
                            required
                        />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
