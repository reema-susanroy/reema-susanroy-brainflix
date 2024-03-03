import axios from 'axios';
import { useEffect, useState } from 'react';
import CommentDisplay from '../CommentDisplay/CommentDisplay'
import './Comments.scss';
import avatar from '../../assets/images/photos/Mohan-muruge.jpg'

import { api_url, api_key ,postComments, getVideoDetais } from "../../utils/API";

// Component to Get, Post and Delete comments on API
// current video or the default video object containing entire video details is passed as props from the HomePage component 
function Comments({ mainVideo }) {
    let { id } = mainVideo;

    const [formCommet, setFormCommet] = useState();
    const [comments, setComment] = useState(mainVideo.comments);

    const handleChangeComment = (event) => {
        setFormCommet(event.target.value);
    };

    const handlePostComment = async (event) => {
        event.preventDefault();
        try {
            let data = {
                "name": "Mohan Murugan",
                "comment": formCommet
            };
            const respdata = await postComments(id, data);
            let newpost = respdata.data;
            setComment({ ...comments, newpost });
            setFormCommet("");
            getData(id);
        }
        catch (error) {
            console.log("Unable to fetch post the comment :" + error);
        }
    }

    useEffect(() => {
        getData(id);
    }, [id]);

    let getData = async (videoId) => {
        try {
            const response = await getVideoDetais(videoId);
            setComment(response.data.comments);
            return response.data.comments;
        }
        catch (error) {
            console.log("Unable to Get the updated comments : ", error)
        }
    }

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
            <h3 className='form__comments-title'>{comments.length} Comments</h3>
            <form onSubmit={handlePostComment} className='form__comments'>
                <div className='form__comments-image'>
                    <section className='form__comments--userImage'>
                        <img src={avatar} alt="avatar" />
                    </section>
                </div>
                <div className=" form__comments--userinput">
                    <section className=" form__comments--input">
                        <label className="form__comments--label">Join the Conversation</label>
                        <textarea onChange={handleChangeComment} value={formCommet} className='form__comments--input-box' placeholder="Add a new comment"
                            id="userComment" rows="4" ></textarea>
                    </section>
                    <div className='form__comments--button'>
                        <button className='form__comments--button-item'>Comment</button>
                    </div>
                </div>
            </form>
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