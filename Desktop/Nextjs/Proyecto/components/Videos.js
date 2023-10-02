import React, { useEffect } from 'react';

const Video = () => {
  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


    window.onYouTubeIframeAPIReady = () => {
      const player = new window.YT.Player('player', {
        height: '200',
        width: '300',
        videoId: 'ar52Rv6KnnI',
        playerVars: {
          'autoplay': 0,
          'controls': 1,
          'rel': 0,
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    };

    const onPlayerReady = (event) => {
      
    }


    const onPlayerStateChange = (event) => {

    }

    return () => {
      
      window.onYouTubeIframeAPIReady = null;
    };
  }, []);

  return <div id="player"></div>;
}

export default Video;
