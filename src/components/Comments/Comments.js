import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import CommentDisplay from '../CommentDisplay/CommentDisplay'
import './Comments.scss';
import avatar from '../../assets/images/photos/Mohan-muruge.jpg'

function Comments({ mainVideo }) {
    // const { comments } = mainVideo
    let { id } = mainVideo;
    let filteredObj;
    // let setComment;

    const [formCommet, setFormCommet] = useState();
    const [comments, setComment] = useState(mainVideo.comments);
    const [newComment, setNewComment] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);


    const handleChangeComment = (event) => {
        // console.log(event.target.value);
        setFormCommet(event.target.value);
    };

    // console.log({formCommet})
    const api_url = "https://unit-3-project-api-0a5620414506.herokuapp.com";
    const api_key = "485e90e7-2da9-42b1-9f2e-b89898b94889";

    async function handlePostComment(event) {
        event.preventDefault();
        try {
            console.log({ id })
            let data = {
                "name": "random user",
                "comment": formCommet
            }
            // const respdata = await postComments(id, data);
            const respdata = await axios.post(`${api_url}/videos/${id}/comments?api_key=${api_key}`, data);
            console.log(respdata);
            let newpost = respdata.data;
            setComment({ ...comments, newpost });
        }
        catch (error) {
            console.log("unable to fetch postcomments method" + error);
        }

    }
    const dataArray = Object.values(comments);
    // useEffect(() => {
    //     const postComments = async (videoId, data) => {
    //         try {
    //             console.log("Entered postComments");
    //             console.log({ videoId });
    //             const response = await axios.post(`${api_url}/videos/${videoId}/comments?api_key=${api_key}`, data);
    //             console.log("important")
    //             console.log(response.data)
    //             console.log("comments")
    //             console.log({ comments })
    //             // setNewComment(response.data);
    //             let store = response.data;
    //             filteredObj = { ...comments, store }
    //             // setComment({...comments, response.data}); //replace with get call
    //             setIsLoaded(true);
    //             console.log("filtered:: ", { filteredObj })
    //             console.log("inside post" + comments);
    //             setComment(filteredObj);
    //             console.log("after api call");
    //             console.log(response.data);
    //             return response.data;
    //         }
    //         catch (error) {
    //             console.log("Unable to post comments : ", error)
    //         }
    //     }
    // })
    
    useEffect(() => {
        getData(id);
    }, [id]);

    const getData = async (videoId) => {
        try {
            console.log("Entered get call");
            console.log({ videoId });
            const response = await axios.get(`${api_url}/videos/${videoId}/?api_key=${api_key}`);
            console.log("after api call");

            console.log(response.data.comments);
            setComment(response.data.comments);
            return response.data.comments;
        }
        catch (error) {
            console.log("Unable to post comments : ", error)
        }
    }

    return (
        <div className='form__comments-cont'>
            <h3 className='form__comments-title'>{comments.length} Comments</h3>
            <form onSubmit={handlePostComment} className='form__comments'>
                {/* <form className='form__comments'> */}
                <div className='form__comments-image'>
                    <section className='form__comments--userImage'>
                        <img src={avatar} alt="avatar" />
                    </section>
                </div>
                <div className=" form__comments--userinput">
                    <section className=" form__comments--input">
                        <label className="form__comments--label">Join the Conversation</label>
                        {/* <textarea className="form__comments--input-box" placeholder="Add a new comment"
                            id="userComment" rows="4"></textarea> */}
                        <textarea onChange={handleChangeComment} value={formCommet} className="form__comments--input-box" placeholder="Add a new comment"
                            id="userComment" rows="4"></textarea>
                    </section>
                    <div className='form__comments--button'>
                        <button className='form__comments--button-item'>Comment</button>
                    </div>
                </div>
            </form>
            <div className="comments">
                {dataArray.map((comment) => {
                    return (
                        // <></>)
                        <CommentDisplay key={comment.id} name={comment.name} timestamp={comment.timestamp} userComment={comment.comment} />)
                }
                )}
            </div>
        </div>
    )

}

export default Comments;
