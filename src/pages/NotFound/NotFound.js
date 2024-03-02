import './NotFound.scss';

function NotFound() {
    return (
        <div className="notfound">
            <h2 className="notfound__data">Page Not Found</h2>
            <p className="notfound__data">Please go back to HomePage!</p>
            {/* <button className="notfound__data">Go Home</button> */}
        </div>
    )
}

export default NotFound;