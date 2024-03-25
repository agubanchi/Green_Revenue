/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useRef, useState,useCallback } from 'react'
import greenvideo from '../assets/GR_Video.mp4'
import VideoControls from './VideoControls'
import videoBG from '../assets/video_bg.png'



const Videoplayer = () => {

const videoRef= useRef(null);

  const [isPlaying, setisPlaying] = useState(false);
  const [volume, setVolume] = useState(1)
  const [playbackRate, setPlaybackRate] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [ progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)

useEffect(()=>{
  const video = videoRef.current;
  const handleTimeUpdate = () => setProgress(video.currentTime)
  const handleDurationChange = () => setDuration(video.duration);
  
  video.addEventListener('timeupdate',handleTimeUpdate);
  video.addEventListener('durationchange',handleDurationChange);
  return()=>{
    video.removeEventListener('timeupdate',handleTimeUpdate);
    video.removeEventListener('durationchange',handleDurationChange);
  }
},[]);

const togglePlay = useCallback(
  () => { 
const video =  videoRef.current;
if(video.paused){
  video.play();
  setisPlaying(true);
}else{
  video.pause();
  setisPlaying(false);
}
  })

const handleVolumeChange = useCallback(
  (e) => {
   const newVolume = e.target.value;
   videoRef.current.volume = newVolume
   setVolume(newVolume)

  },);


  const handlePlaybackRateChange = useCallback(
    (e) => {
     const newPlaybackRate = e.target.value;
     videoRef.current.playbackRate = newPlaybackRate
     setPlaybackRate(newPlaybackRate)
  
    },);


    const toggleFullScreen = useCallback(()=>{
      const video =  videoRef.current;
      if(!isFullscreen){
        if(video.requestFullscreen){
          video.requestFullscreen()
        }
        else if(video.webkitRequestFullscreen){
          video.webkitRequestFullscreen()
        }
        else if(video.mskitRequestFullscreen){
          video.mskitRequestFullscreen()
        }
        else{
          if(document.FullscreenElement){
            document.exitFullscreen()
          }
          else if(document.webkitRequestFullscreenElement){
            document.webkitRequestFullscreen()
          }
          else if(document.mskitRequestFullscreenElement){
            document.msExitkitFullscreen()
          }
          else if(document.mozkitRequestFullscreenElement){
            document.mozCancelFullscreen()
          }
        }
        
      }

      setIsFullscreen(!isFullscreen);
    }
    
    ,[isFullscreen]);


    const handleProgressChange = useCallback(
      (e) => {
        const newProgress = e.target.value;
        videoRef.current.currentTime = newProgress
        setProgress(newProgress)
      },
      [],
    )
    

  return (
    <div className='relative  rounded-md overflow-hidden w-full  drop-shadow-sm '><video poster={videoBG} src={greenvideo} className=' h-full object-cover w-[100vw]' ref={videoRef} onClick={togglePlay}></video>
    <VideoControls 
    // Estados
    progress={progress}
    duration={duration}
    isPlaying={isPlaying}
    volume={volume}
    playbackRate={playbackRate}
    isFullscreen={isFullscreen}

    // Funciones del Reproductor
    togglePlay={togglePlay}
    handleVolumeChange={handleVolumeChange}
    handlePlaybackRateChange={handlePlaybackRateChange}
    toggleFullScreen={toggleFullScreen}
    handleProgressChange={handleProgressChange}

    />
    </div>
  )
}

export default Videoplayer