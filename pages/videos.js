import Head from 'next/head'
import Image from 'next/image'
import YoutubeVideoPlayer from "../components/youtubeVideoPlayer";
import YouTubeSubscribe from "../components/youtubeSubscribeBtn";
import { useState } from 'react';

const scrollTop = () =>{
  window.scrollTo({top: 0, behavior: 'smooth'});
};

const Videos = ( {results} ) => {
  
  const[currentVideo, setCurrentVideo] = useState(results[0]);
  const[playing, setPlaying] = useState(false);
  let channelid = "UCbIsUS2IVCx3cUxhsR0sGmg";
  return (
    <div className="content-container">
         <Head>
        <title>Viedos | Skywagons.com</title>
        <meta property="og:title" content="Viedos | Skywagons.com" key="title" />
       
      </Head>
      <h1 className="text-xl p-8">Skywagon University</h1>
      <div className="h-96">
      <YoutubeVideoPlayer id={currentVideo.snippet.resourceId.videoId} 
      playing={playing}
      className=""
      />
 
      </div>

      <div className="grid justify-center">
       <YouTubeSubscribe
         
          channelid={channelid}
          theme={"default"}
          layout={"full"}
          count={"default"}
          
         
        />
      </div>

      <div className="grid grid-cols-3 gap-10 p-10">
      {results?.map((video, index) => (
            <div key={index} className="">
              
              
              <a onClick={() => {setCurrentVideo(video); setPlaying(true); scrollTop();}}>
              <Image  src={video.snippet.thumbnails.high?.url ||  "https://via.placeholder.com/300"}
                    layout="intrinsic"
                    width={1000}
                    height={720}
                    alt={video.snippet.title}
                    
              />
              </a>
              <h2>{video.snippet.title}</h2>
              
            </div>
          ))} 

      </div>
      
      <div className="grid justify-center p-10 pb-14">
        
        <a href="https://www.youtube.com/channel/UCbIsUS2IVCx3cUxhsR0sGmg/featured" target="_blank" rel="noopener noreferrer">
        <button class="bg-red-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
          More Videos
        </button></a></div>

      </div>
    )
} 

export async function getStaticProps() {
  const MY_PLAYLIST = process.env.YOUTUBE_PLAYLIST_ID;
  const API_KEY = process.env.YOUTUBE_API_KEY;

  const REQUEST_URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${MY_PLAYLIST}&key=${API_KEY}&maxResults=21`;

  // const REQUEST_URL = 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUbIsUS2IVCx3cUxhsR0sGmg&key=AIzaSyBBYoXwK7T4l5h5C4Lj2OwfAAmO_Lhl7Ww&maxResults=20';

  const response = await fetch(REQUEST_URL);
  const results = await response.json();

  return {
    props: { results: results.items },
    revalidate: 10,
  };
}



export default Videos
