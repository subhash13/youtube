import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const AddVideo = () => {
    let navigate = useNavigate()

    let thumbnail = useRef(null)
    let title = useRef(null)
    let channel = useRef(null)
    let views = useRef(null)

    let upload = (e) =>{
        e.preventDefault() //prevents the page from reloading
        let data = {
            thumbnail:thumbnail.current.value,
            title : title.current.value,
            channel : channel.current.value,
            views : views.current.value 
        }
        fetch('http://localhost:4000/videos',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        alert('video uploaded successfully')
        navigate('/') //navigating to different routes
    }

    return (
        <div className="addVideo">
            <form action="" onSubmit={upload}>
                <input ref={thumbnail} type="url" placeholder="enter thumbnail url" />
                <input ref={title} type="text" placeholder="enter the title of the video" />
                <input ref={channel} type="text" placeholder="enter channel name" />
                <input ref={views} type="text" placeholder="enter views" />
                <button>Upload video</button>
            </form>
        </div>
    );
}

export default AddVideo;