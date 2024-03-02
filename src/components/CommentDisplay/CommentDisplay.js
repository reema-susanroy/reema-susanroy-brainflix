import './CommentDisplay.scss';
import {TimeFormat} from '../../utils/TimeFormat';

function CommentDisplay({ commnetId, name, timestamp, userComment, handleDeleteComment}) {

    const handleClick = () =>{
        handleDeleteComment(commnetId);
    }
    return (
        <>
            <div className="comment">
                <div className="comment__user">
                    <div className="comment__user--image-cont">
                        <p className="comment__user--image"> </p>
                    </div>
                    <div className="comment__user--comment-cont">
                        <div className="comment__user--name-cont">
                            <p className="comment__user--name">{name}</p>

                            {/* Calls a function timeFormat to calculate dynamic timestamp */}
                            <p className="comment__user--date">{TimeFormat(timestamp)}</p>
                        </div>
                        <div className="comment__user--comment-cont">
                            <p className="comment__user--comment">{userComment}</p>
                        </div>
                        <div className='comment__user--button-cont'>
                            <button onClick={handleClick} className='comment__user--button'>DELETE</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default CommentDisplay;