import CommentDisplay from '../CommentDisplay/CommentDisplay'
import './Comments.scss';
import avatar from '../../assets/images/Mohan-muruge.jpg'

function Comments({ mainVideo }) {

    let commentArr = [];
    commentArr = mainVideo.comments;
    console.log({ commentArr });
    // console.log(commentArr[1].name)

    return (
        <>
            {commentArr && (
                <div>
                    <h3>{commentArr.length} comments</h3>
                    <form className='form__comments'>
                        <div className='form__comments-image'>
                            <section className='form__comments--userImage'>
                                <img src={avatar} alt="avatar" />
                            </section>
                        </div>
                        <div class=" form__comments--userinput">
                            <section class=" form__comments--input">
                                <label className="title">Join the Conversation</label>
                                <textarea className="form__comments--input-box" placeholder="Add a new comment"
                                    id="userComment" rows="4"></textarea>
                            <div className='form__comments--button'>
                            <button className='form__comments--button-item'>Comment</button>
                            </div>
                            </section>
                        </div>

                    </form>
                    <div className="comments">
                        {commentArr.map((comment) => (
                            <CommentDisplay key={comment.id} comment={comment} />
                        ))}
                    </div>
                </div>
            )}
        </>
    )

}

export default Comments;