import React, {useState} from "react";
import Search from "./Components/Search";
import URL from "./Components/Api/URL";
import "./Desigin.scss"
import Video from "./Components/Video";
import ListVideos from "./Components/ListVideos";


function App() {

  const [videos, setVideos] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState({id:{}, snippet:{}});


  async function videoSubmit(serachTerm) {
    const {data: { items: videos}} = await URL.get("search", {
      params: {
        part: "snippet",
        maxResult:10,
        key:'AIzaSyDU3JxQUiUjgYfGGTn7mKMASNIYQsf4pU4',
        q: serachTerm
      }
    });

    console.log(videos);
    setVideos(videos);
    setSelectedVideos(videos[0]);

  }

  return (
    <>
    <div className="searchsection">
      <Search onSubmit={videoSubmit} />
    </div>

    <div className="videoMain">
     <div className="videoSection">
     <Video video={selectedVideos}/>
     </div>
     <div className="videoList">
       <ListVideos videos={videos} onVideoSelect={setSelectedVideos}/>
     </div>
    </div>
    </>
  );
}

export default App;
