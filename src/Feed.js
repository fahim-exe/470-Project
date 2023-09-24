import React, { useEffect, useState } from 'react'
import CreatePost from './CreatePost';
import "./Feed.css"
import Post from './Post';
import Stories from './Stories';
import db from "./firebase";


function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        })
    }, [])


    return (
        <div className='feed'>
            <Stories />
            <CreatePost />

            {posts.map(post => (
                <Post
                    key={post.data.id}
                    profilePic={post.data.profilePic}
                    status={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))}


        </div>
    )
}

export default Feed;