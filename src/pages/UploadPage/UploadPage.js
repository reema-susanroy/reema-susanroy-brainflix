import './UploadPage.scss'
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from 'axios';
import img from '../../assets/images/photos/Upload-video-preview.jpg'
import ErrorPage from "../ErrorPage/ErrorPage";


//A page to upload the video and navigates to homepage when clicked publish button and clears the form data
function UploadPage() {
    const navigate = useNavigate();
    const [uploadForm, setUploadForm] = useState(false);
    const [error, setError] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [posterImage, setPosterImage] = useState('http://localhost:8080/images/new-video.jpg');


    console.log(posterImage);
    const handleChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const handleChangeDescription = (event) => {
        setDescription(event.target.value)
    }
    const handleChangeImage = (event) => {
        setPosterImage(event.target.files[0]);
    }

    const formSubmit = async () => {

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('posterImage', posterImage);

        try {
            const postVideo = await axios.post('http://localhost:8080/videos', formData);
            console.log(postVideo)
        }
        catch (error) {
            console.log("Unable to post the video : " + error);
            setError(true);
        }
        setUploadForm(true);
    }

    const formCancel = () => {
        setUploadForm(false);
    }

    const goToHomepage = async (event) => {
        event.preventDefault();
        event.target.reset();
    }
    if (error) {
        return <ErrorPage />;
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
                                    <input onChange={handleChangeTitle} className='form-video__title-input' type="text" placeholder='Add a title to your video' />
                                </label>
                                <label className='form-video__title'>ADD A VIDEO DESCRIPTION
                                    <textarea onChange={handleChangeDescription} className='form-video__description-input' type="text" rows={4} placeholder='Add a description to your video' />
                                </label>
                                <label htmlFor='image' className='form-video__title'>UPLOAD AN IMAGE
                                    <input onChange={handleChangeImage} className='form-video__title-input' type="file" accept='image/*' id='posterImage' name='posterImage' />
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
                    <div className="modal">
                        <section className='modal__title-cont'>
                            <h2 className='modal__title--title'>Success</h2>
                            <p className='modal__title'>Your video was successfully published!</p>
                            <button onClick={closePopup} className='modal__button'>OK</button>
                        </section>
                    </div>
                </div>
            )}
        </main>
    )
}

export default UploadPage;