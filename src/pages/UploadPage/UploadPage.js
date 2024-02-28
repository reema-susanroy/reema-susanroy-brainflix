import './UploadPage.scss'

import { useNavigate } from "react-router";
import { useState } from "react";
import img from '../../assets/images/photos/Upload-video-preview.jpg'

function UploadPage() {

    const navigate = useNavigate();
    const [uploadForm, setUploadForm] = useState(false);

    const goToHomepage = (event) => {
        event.preventDefault();
        event.target.reset();
        setUploadForm(true);

        // after 5 seconds, send the user to /contestants
        setTimeout(() => {
            navigate("/");
        }, 5000);
    }

    return (
        <>
            <div className="" >

                <h1 className="upload">Upload Video</h1>
                <div className='upload-cont'>
                    <section className='upload-cont__divider'>
                        <article className='upload__thumbnail'>
                            <h3 className='upload__thumbnail--title'>VIDEO THUMBNAIL</h3>
                            <div className='upload__thumbnail--image-cont'>
                                <img className='upload__thumbnail--image' src={img} alt="video-upload" />
                            </div>
                        </article>
                        <form onSubmit={goToHomepage} className='form__upload'>
                            <section className='form-video'>
                                <label className='form-video__title'>TITLE YOUR VIDEO
                                    <input className='form-video__title-input' type="text" placeholder='Add a title to your video' />
                                </label>
                                <label className='form-video__title'>ADD A VIDEO DESCRIPTION
                                    <textarea className='form-video__description-input' type="text" rows={4} placeholder='Add a description to your video' />
                                </label>
                            </section>
                            <div className='form__button'>
                                <button className='form__button--publish'>PUBLISH</button>
                                <button className='form__button--cancel'>CANCEL</button>
                                {/* <button disabled={uploadForm}>Submit Form</button> */}
                            </div>
                        </form>
                    </section>
                </div>
                {uploadForm && (
                    <div>Successfully submitted form. Taking you to the view contestants page</div>
                )}
            </div>
        </>
    )

}

export default UploadPage;