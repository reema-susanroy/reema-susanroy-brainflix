import axios from 'axios';
import { useEffect, useState } from 'react';
import CommentDisplay from '../CommentDisplay/CommentDisplay'
import './Comments.scss';
import avatar from '../../assets/images/photos/Mohan-muruge.jpg'

// Component to Get, Post and Delete comments 
// current video or the default video object containing entire video details is passed from the HomePage component 
function Comments({ mainVideo }) {
    let { id } = mainVideo;

    const [formCommet, setFormCommet] = useState();
    const [comments, setComment] = useState(mainVideo.comments);
    // const [isLoaded, setIsLoaded] = useState(false);

    const handleChangeComment = (event) => {
        setFormCommet(event.target.value);
    };

    const api_url = "https://unit-3-project-api-0a5620414506.herokuapp.com";
    const api_key = "485e90e7-2da9-42b1-9f2e-b89898b94889";

    const handlePostComment= async (event) => {
        event.preventDefault();
        try {
            let data = {
                "name": "Mohan Murugan",
                "comment": formCommet
            };
            const respdata = await axios.post(`${api_url}/videos/${id}/comments?api_key=${api_key}`, data);
            let newpost = respdata.data;
            setComment({ ...comments, newpost });
            setFormCommet("");
            getData(id);
        }
        catch (error) {
            console.log("Unable to fetch post the comment :" + error);
        }
    }
    console.log({comments});
    // const dataArray = Object.values(comments);

    useEffect(() => {
        getData(id);
    }, [id]);

    let getData = async (videoId) => {
        try {
            const response = await axios.get(`${api_url}/videos/${videoId}/?api_key=${api_key}`);
            setComment(response.data.comments);
            return response.data.comments;
        }
        catch (error) {
            console.log("Unable to Get the updated comments : ", error)
        }
    }

    const handleDeleteComment = async (commentId) =>{
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
                        <textarea onChange={handleChangeComment} value={formCommet} className="form__comments--input-box" placeholder="Add a new comment"
                            id="userComment" rows="4"></textarea>
                    </section>
                    <div className='form__comments--button'>
                        <button className='form__comments--button-item'>Comment</button>
                    </div>
                </div>
            </form>
            <div className="comments">
                {Object.values(comments).map((comment) => {
                    return (
                        <CommentDisplay key={comment.id} commnetId={comment.id} name={comment.name} timestamp={comment.timestamp} userComment={comment.comment} handleDeleteComment={handleDeleteComment}/>)
                }
                )}
            </div>
        </div>
    )
}

export default Comments;