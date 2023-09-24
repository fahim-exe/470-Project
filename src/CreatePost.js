import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import "./CreatePost.css"
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useStateValue } from './StateProvider';
import db from "./firebase";
import firebase from 'firebase/compat/app';

function CreatePost() {
    const [{ user }, dispatch] = useStateValue();

    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            status: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        });

        setInput("");
        setImageUrl("");
    };

    return (
        <div className='createPost'>
            <div className='createPost__top'>
                <Avatar src={user.photoURL} />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className='createPost__input'
                        placeholder={`${user.displayName}, If you're not gaming?`} />
                    <input
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder='image or URL (optional)' />

                    <button onClick={handleSubmit} type='submit'>
                        Hidden submit
                    </button>

                </form>
            </div>


            <div className='createPost__bottom'>
                <div className='createPost__option'>
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Go Live</h3>
                </div>

                <div className='createPost__option'>
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>

                <div className='createPost__option'>
                    <InsertEmoticonIcon style={{ color: "red" }} />
                    <h3>Feeling/Activity</h3>
                </div>



            </div>
        </div>
    )
}

export default CreatePost