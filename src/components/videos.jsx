import "../styles/videos.css"
import { useState,useEffect } from "react";
import icon from "../images/videoIcon.png"
const Videos = () => {
    let [video, setVideo] = useState([])

    useEffect(()=>{
        let fetchData = async() =>{
            let response = await fetch('http://localhost:4000/videos')
            let data = await response.json()
            setVideo(data)
        }
        fetchData()
    })

    let removeVideo = (id,name) =>{
        fetch(`http://localhost:4000/videos/${id}`,{
            method:'DELETE'
        })
        alert(`${name} video got removed`)

        // let result = video.filter( (x)=> x.id!==id )
        // setVideo(result)
        // alert(`${name} video got removed`)

    }

    return (
        <div className="videos">
            <div className="title">
                <div className="titleIcon">
                    <img width="60" style={{marginLeft:"15px"}} src={icon} alt="" />
                </div>
                <div className="titleHeader">
                    <h1>Featured Videos</h1>
                    <div className="line"></div>
                </div>
            </div>
            <div className="videoData">
                {video.map((data) => {
                    return (
                        <div className="video">
                            <img src={data.thumbnail} alt="" />
                            <div className="videoDetails">
                                <h3>{data.title}</h3>
                                <p>{data.channel}</p>
                                <p>{data.views}</p>
                                <a onClick={()=>removeVideo(data.id,data.channel)}>Remove</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Videos;