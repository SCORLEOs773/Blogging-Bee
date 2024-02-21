import React, { useState } from 'react';
import WriteBlog from './WriteBlog';
import Post from './Post';

export default function SubmitBlog() {
    const [blogData, setBlogData] = useState(null);

    const handleBlogSubmit = (data) => {
        setBlogData(data);
    };

    return (
        <div>
            {blogData ? (
                <Post blogData={blogData} />
            ) : (
                <WriteBlog onBlogSubmit={handleBlogSubmit} />
            )}
        </div>
    );
}
