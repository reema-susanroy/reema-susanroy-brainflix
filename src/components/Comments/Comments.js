import axios from 'axios';
import { useEffect , useState } from 'react';


import CommentDisplay from '../CommentDisplay/CommentDisplay'
import './Comments.scss';
import avatar from '../../assets/images/photos/Mohan-muruge.jpg'

function Comments({ mainVideo }) {
    const { comments } = mainVideo;


    const [formCommet, setFormCommet] = useState();
    const handleChangeComment = (event) => {
        console.log("here")
        setFormCommet(event.target.value);
        // console.log(event.target.value);
      };
      console.log({formCommet});
      const [comment, setComment] = useState();


    const api_url = "https://unit-3-project-api-0a5620414506.herokuapp.com";
    const api_key = "485e90e7-2da9-42b1-9f2e-b89898b94889";
    let id = '84e96018-4022-434e-80bf-000ce4cd12b8';
    
    async function handlePostComment(event){
        event.preventDefault();
        console.log("Entered hanldepostcomment");
        try{
            console.log({id})
            let data ={
                "name": "random user",
                "comment" : formCommet
            }
            const respdata = await postComments(id, data);
            console.log(respdata);
        }
        catch(error){
            console.log("unable to fetch postcomments method" + error);
        }
        // return ;
    }

    // useEffect(() => {
    const postComments = async (videoId, data) => {
        try {
            console.log("Entered postComments");
            console.log({videoId});
            const response = await axios.post(`${api_url}/videos/${videoId}/comments?api_key=${api_key}`, data);
            console.log("after api call");
            console.log(response.data);

        }
        catch (error) {
            console.log("Unable to post comments : ", error)
        }
// return;
    }

// }, []);
    return (
        <div className='form__comments-cont'>
            <h3 className='form__comments-title'>{comments.length} Comments</h3>
            <form className='form__comments'>
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
                        <button onClick={handlePostComment} className='form__comments--button-item'>Comment</button>
                    </div>

                </div>
            </form>
            <div className="comments">
                {comments.map((comment) => {
                    return (
                        <CommentDisplay key={comment.id} comment={comment} />)
                }
                )}
            </div>
        </div>
    )

}

export default Comments;