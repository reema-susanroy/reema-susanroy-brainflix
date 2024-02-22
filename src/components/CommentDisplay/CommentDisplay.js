import './CommentDisplay.scss';

function CommentDisplay({ comment }) {
    return (
        <>

            <div className="comment">
                <div className="comment__user">
                    <div className="comment__user--image-cont"> 
                        <p className="comment__user--image"> </p> 
                    </div>
                    <div className="comment__user--comment-cont">
                        <div className="comment__user--name-cont">
                            <p className="comment__user--name">{comment.name}</p>
                            <p className="comment__user--date">{comment.timestamp}</p>
                        </div>
                        <div className="comment__user--comment-cont">
                            <p className="comment__user--comment">{comment.comment}</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}


export default CommentDisplay;