import CommentDisplay from '../CommentDisplay/CommentDisplay'
import './Comments.scss';
import avatar from '../../assets/images/Mohan-muruge.jpg'

function Comments({ mainVideo }) {
    const { comments } = mainVideo;

    return (
        <div className='form__comments-cont'>
            <h3 className='form__comments-title'>{comments.length} comments</h3>
            <form className='form__comments'>
                <div className='form__comments-image'>
                    <section className='form__comments--userImage'>
                        <img src={avatar} alt="avatar" />
                    </section>
                </div>
                <div className=" form__comments--userinput">
                    <section className=" form__comments--input">
                        <label className="form__comments--label">Join the Conversation</label>
                        <textarea className="form__comments--input-box" placeholder="Add a new comment"
                            id="userComment" rows="4"></textarea>
                    </section>
                    <div className='form__comments--button'>
                        <button className='form__comments--button-item'>Comment</button>
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