import './CommentDisplay.scss';
import {TimeFormat} from '../../utils/TimeFormat';

function CommentDisplay({ comment }) {
    // let time = comment.timestamp;
    // console.log({time})
    // function timeFormat(){
    //     // const currentTime = new Date().getTime();
    //     console.log("inside main fn")
    //     const currentTime = Date.parse(new Date().toISOString());
    //     // console.log({currentTime});
    //     const commentDate = Date.parse(new Date(comment.timestamp).toISOString());
    //     // console.log({commentDate})
    //     const calcTime = currentTime - commentDate;
    //     const seconds = Math.floor(calcTime / 1000);
    //     const minutes = Math.floor(seconds / 60);
    //     const hours = Math.floor(minutes / 60);
    //     const days = Math.floor(hours / 24);
    //     let time;
    //     if (days > 0) {
    //         time = days + ' day' + (days > 1 ? 's' : '') + ' ago';
    //     } else if (hours > 0) {
    //         time = hours + ' hour' + (hours > 1 ? 's' : '') + ' ago';
    //     } else if (minutes > 0) {
    //         time = minutes + ' minute' + (minutes > 1 ? 's' : '') + ' ago';
    //     } else {
    //         time = '< 1 min ago';
    //     }
    //     return time;
    // }

    // timeFormat(time);
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
                            <p className="comment__user--date">{TimeFormat(comment.timestamp)}</p>
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