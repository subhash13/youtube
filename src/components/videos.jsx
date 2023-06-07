import "../styles/videos.css"
import { useState } from "react";
import icon from "../images/videoIcon.png"
const Videos = () => {
    let [video, setVideo] = useState([
        {
            thumbnail: "	https://i.ytimg.com/vi/RtD4q4LnLUw/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBJxJvKq6fiXFVxOUHpveXgA2V-sQ",
            title: "Celebrating the Super Kings Way | #CHAMPION5 #IPL2023",
            channel: "Chennai Super Kings",
            views: "1.1M views",
            id:1
        },
        {
            thumbnail: "	https://i.ytimg.com/vi/UJoZjKx0SgU/hq720.jpg?sqp=-…RhyIFAoQDAP&rs=AOn4CLBxTf6Ptz6vdzIGNH_I-uHnrnAxDw",
            title: "Best of Arijit Singh 2020 superhit romantic and sad song Arijit Singh",
            channel: "BS7 Gaming YT",
            views: "8M views",
            id:2
        },
        {
            thumbnail: "	https://i.ytimg.com/vi/gXofyAeb_1E/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCo9go18YazZ1v7sSNkl-GdK_92Jw",
            title: "My REAL Advice - iPhone 14 Pro Max vs Samsung S23 Ultra !",
            channel: "TechBar",
            views: "1.9M views",
            id:3
        },
        {
            thumbnail: "	https://i.ytimg.com/vi/_w12h1RCbHQ/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAiUFHrM435SlXdZJ3lko8j0aAu6w",
            title: "हिंदी Oggy and the Cockroaches 💥🥊 THE BIG FIGHT 💥🥊 Hindi Cartoons for Kids",
            channel: "Oggy Hindi - हिन्दी",
            views: "10M views",
            id:4
        },
        {
            thumbnail: "	https://i.ytimg.com/vi/kBW-oDpamZg/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLC7uDx1sYUlKG2AKSJQxOIp71jFNA",
            title: "The World of BIRDS in 4K ( 12K HDR 120fps Dolby Vision ) - The Healing Power Of Bird Sounds",
            channel: "Our Planet 4K",
            views: "694K views",
            id:5
        },
        {
            thumbnail: "	https://i.ytimg.com/vi/es4x5R-rV9s/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDE3HP-LWUfwXnV_EbJG3WbK6Tv8w",
            title: "Amazon 4k - The World’s Largest Tropical Rainforest Part 2 | Jungle Sounds | Scenic Relaxation Film",
            channel: "Scenic Scenes",
            views: "23M views",
            id:6
        },
        {
            thumbnail: "https://i.ytimg.com/vi/9AlcPIDsGjg/hq720.jpg?sqp=-…RhIIFsoZTAP&rs=AOn4CLCU8LaktE08_Zh02r1ZvLV95DnKlw",
            title: "Apna Bana Le - Full Audio | Bhediya | Varun Dhawan, Kriti Sanon| Sachin-Jigar,Arijit Singh,Amitabh B",
            channel: "Kicked Kind",
            views: "2.1M views",
            id:7
        },
        {
            thumbnail: "	https://i.ytimg.com/vi/apf9p7duPsc/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDDxQtTRp9dNgkgJMLvjifAQpsv_w",
            title: "ROYAL ENFIELD reaction in JAPAN II Indian in Japan II",
            channel: "Ajay Pandey",
            views: "5.4M views",
            id:8
        },
        {
            thumbnail: "	https://i.ytimg.com/vi/jf2gOSORoqU/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBqBLzbmCdQUQ1XxW7jD2mdz7QIng",
            title: "Jab We Met | Full Movie | Kareena Kapoor | Shahid Kapoor | Bollywood Movie",
            channel: "Shemaroo",
            views: "35M views",
            id:9
        },
        {
            thumbnail: "	https://i.ytimg.com/vi/id00R-3OmJ0/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBhP2_qvTwijZLq2kXrZa7lUGB1HQ",
            title: "Mystery of Titanic | How the World's Greatest Ship Disappeared? | Dhruv Rathee in Hindi",
            channel: "Dhruv Rathee",
            views: "13M views",
            id:10
        },
        {
            thumbnail: "	https://i.ytimg.com/vi/Eypuw9PrclM/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCVdYHPI-NNIBG97ZybanhL-394Og",
            title: "Surya Kumar Does Mimicry Of Babu Rao | The Kapil Sharma Show Season 2 | Full Episode",
            channel: "Sony LIV",
            views: "10M views",
            id:11
        },
        {
            thumbnail: "	https://i.ytimg.com/vi/FIeJs8aeR3Y/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCA9LTWKFo04JbjFuQpWnl8iImiKg",
            title: "Ram Siya Ram  | Lofi Version | Mangal Bhavan Amangal Hari | राम सिया राम | 1 hour straight |",
            channel: "TIME LOFI AND CHILL ",
            views: "6.8M views",
            id:12
        }
    ])

    let removeVideo = (id,name) =>{
        let result = video.filter( (x)=> x.id!==id )
        setVideo(result)
        alert(`${name} video got removed`)
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