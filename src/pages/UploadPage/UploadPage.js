import './UploadPage.scss'
import { useNavigate } from "react-router";
import { useState } from "react";
import img from '../../assets/images/photos/Upload-video-preview.jpg'

function UploadPage() {
    const navigate = useNavigate();
    const [uploadForm, setUploadForm] = useState(false);
    // const [buttonStatus, setButtonStatus] = useState(false);

    const formSubmit = () => {
        setUploadForm(true);
    }
    const formCancel = () => {
        console.log("1")
        setUploadForm(false);
    }
    const goToHomepage = (event) => {
        console.log("2")
        event.preventDefault();
        event.target.reset();
    //     if (uploadForm) 
    //         setButtonStatus(true);
    //     else
    //     {console.log("3")
    //         setButtonStatus(false);
    // }
    }
    const closePopup = () => {
        navigate("/");
    };

    return (
        <main>
            <h1 className="upload">Upload Video</h1>
            <div className='upload-cont'>
                <form onSubmit={goToHomepage}>
                    <section className='upload-cont__divider'>
                        <article className='upload__thumbnail'>
                            <h3 className='upload__thumbnail--title'>VIDEO THUMBNAIL</h3>
                            <div className='upload__thumbnail--image-cont'>
                                <img className='upload__thumbnail--image' src={img} alt="video-upload" />
                            </div>
                        </article>
                        <div className='form__upload'>
                            <section className='form-video'>
                                <label className='form-video__title'>TITLE YOUR VIDEO
                                    <input className='form-video__title-input' type="text" placeholder='Add a title to your video' />
                                </label>
                                <label className='form-video__title'>ADD A VIDEO DESCRIPTION
                                    <textarea className='form-video__description-input' type="text" rows={4} placeholder='Add a description to your video' />
                                </label>
                            </section>
                        </div>
                    </section>
                    <div className='form__button'>
                        <button onClick={formSubmit} className='form__button--publish'>PUBLISH</button>
                        <button onClick={formCancel} className='form__button--cancel'>CANCEL</button>
                    </div>
                </form>
            </div>

            {uploadForm && (
                <div className="modal-overlay">
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <span className="modal__close" onClick={closePopup}>
                            &times;
                        </span>
                        <section className='modal__title-cont'>
                            <h2 className='modal__title--title'>Success</h2>
                            <p className='modal__title'>Uploaded the video. </p>
                            <p className='modal__title'>Taking you to the home page.</p>
                        </section>
                    </div>
                </div>
            )}
        </main>
    )
}

export default UploadPage;