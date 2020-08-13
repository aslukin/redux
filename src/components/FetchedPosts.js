import React from 'react';

export default ( {posts} ) => {
    if (!posts.length) {
        return(
            <button type="button" className="btn btn-primary">load posts</button>
        )
    }
    
    return (
        <div>
            <h1> FetchedPosts</h1>
        </div>
    );
}