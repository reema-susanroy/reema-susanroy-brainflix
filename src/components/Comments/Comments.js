import axios from 'axios';
import { useEffect, useState } from 'react';
import CommentDisplay from '../CommentDisplay/CommentDisplay'
import './Comments.scss';
import avatar from '../../assets/images/photos/Mohan-muruge.jpg'

import { api_url, api_key, postComments, getVideoDetais } from "../../utils/API";

// Component to Get, Post and Delete comments on API
// current video or the default video object containing entire video details is passed as props from the HomePage component 
function Comments({ mainVideo }) {
    let { id } = mainVideo;

    const [formCommet, setFormCommet] = useState();
    const [comments, setComment] = useState(mainVideo.comments);
    const [commentCount, setCommentCount] = useState(mainVideo.comments.length); //useState for current video comments count
    const [error, setError] = useState(false);

    //useEffect to get the video details from API based on each selection, video id is passed as dependency
    useEffect(() => {
        getData(id);
    }, [id]);

    //to set formCommet useState with value entered in the comments field
    const handleChangeComment = (event) => {
        setFormCommet(event.target.value);

        if (event.target.value.trim() === ' ') {
            setError(true);
        }
        else
            setError(false);
    };

    //to post comment when form is submitted based on validation
    const handlePostComment = async (event) => {
        event.preventDefault();

        if (formCommet.trim() === '') {
            setError(true);
            setFormCommet("");
        }
        else {
            try {
                let data = {
                    "name": "Mohan Murugan",
                    "comment": formCommet
                };
                const respdata = await postComments(id, data);
                setFormCommet("");
                let newpost = respdata.data;
                setComment({ ...comments, newpost });
                setCommentCount(comments.length + 1);
                getData(id);                
            }
            catch (error) {
                console.log("Unable to fetch post the comment :" + error);
            }
        }
    }

    //to get video details from the API
    const getData = async (videoId) => {
        try {
            const response = await getVideoDetais(videoId);
            setComment(response.data.comments);
            setCommentCount(response.data.comments.length);

            return response.data.comments;
        }
        catch (error) {
            console.log("Unable to Get the updated comments : ", error)
        }
    }

    //to delete comment from API
    const handleDeleteComment = async (commentId) => {
        try {
            await axios.delete(`${api_url}/videos/${id}/comments/${commentId}?api_key=${api_key}`);
            getData(id)
        }
        catch (error) {
            console.log("Unable to Delete comment : " + error);
        }
    }

    return (
        <div className='form__comments-cont'>
            <h3 className='form__comments-title'>{commentCount} Comments</h3>
            <form onSubmit={handlePostComment} className='form__comments'>
                <div className='form__comments-image'>
                    <section className='form__comments--userImage'>
                        <img src={avatar} alt="avatar" />
                    </section>
                </div>
                <div className=" form__comments--userinput">
                    <section className=" form__comments--input">
                        <label className="form__comments--label">Join the Conversation</label>
                        <textarea onChange={handleChangeComment} value={formCommet} placeholder="Add a new comment"
                            id="userComment" rows="4" className={error ? 'form__comments--error': 'form__comments--input-box'}></textarea>
                    </section>
                    <div className='form__comments--button'>
                        <button className='form__comments--button-item'>Comment</button>
                    </div>
                </div>
            </form>
            <div className='errormessage'>
                {error && <p>Please enter a valid comment</p>}
                </div>
            <div className="comments">
                {Object.values(comments).map((comment) => {
                    return (
                        <CommentDisplay key={comment.id} commnetId={comment.id} name={comment.name} timestamp={comment.timestamp} userComment={comment.comment} handleDeleteComment={handleDeleteComment} />)
                }
                )}
            </div>
        </div>
    )
}

export default Comments;