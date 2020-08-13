import React from 'react';
import Post from './Post';

export default ({posts}) => {
    if (!posts.length) {
        return(
            <p> no posts available yet</p>
        )
    }
    return (
        <div>
            {posts.map(item => { return (<Post post={item} key={item} />) })}
        </div>
    );
}