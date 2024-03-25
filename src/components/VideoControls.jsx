import React from 'react'
import { BsFillPlayBtnFill,BsFillPauseBtnFill  } from "react-icons/bs";
import { MdFullscreen } from 'react-icons/md'

const formatTime = time => {
	const minutes = Math.floor(time / 60);
	const seconds = Math.floor(time % 60);

	return `${minutes.toString().padStart(2, '0')}:${seconds
		.toString()
		.padStart(2, '0')}`;
};



const VideoControls = ({progress,
	duration,
	isPlaying,
	volume,
	playbackRate,
	isFullscreen,
	togglePlay,
	handleVolumeChange,
	handlePlaybackRateChange,
	toggleFullScreen,
	handleProgressChange,}) => {
  return (
<>

<div className='absolute top-0 bottom-5 flex items-center justify-center  w-full  mx-auto  z-[] '  onClick={togglePlay}>
<button className='text-darkGreen focus:outline-none rounded-full'>
  {
    isPlaying?"" : <BsFillPlayBtnFill  className='h-10 w-10 '/>
  }
  </button>
        </div>
    
    <div className='absolute bottom-0  w-full px-4 py-4 flex items-center bg-deepGreen '>




  
<div className="flex items-center gap-2 w-full">
<button className='text-white focus:outline-none' onClick={togglePlay}>
  {
    isPlaying?<BsFillPauseBtnFill  className='h-8 w-8 '/> : <BsFillPlayBtnFill className='h-8 w-8 '/>
  }
  </button>
  <span className="text-white mr-2">{formatTime(progress)}</span>
  <div className="relative w-64 h-1.5 bg-darkGreen rounded-full mr-2">
    <input type="range" className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" min="0" max={duration}
    step={1}
    value={progress}
    onChange={handleProgressChange}
    />
    <div className="absolute top-0 left-0 h-full bg-gray-500 rounded-full accent-darkGreen" style={{width:`${(progress/duration)*100}%`}}></div>
    
  </div>
  <span className="text-white mr-2 py-2">
  {formatTime(duration)}
    </span>
  <div className="flex items-center">
    <input type="range" className="w-16 h-1.5 bg-white rounded-full mr-2 accent-darkGreen" 
    min={0}
    max={1}
    step={0.1} 
    value={volume}
    onChange={handleVolumeChange}
    />
    <select name="" id="" className="bg-darkGreen text-white px-2 py-1 rounded-md foucs:outline-none accent-darkGreen" value={playbackRate} onChange={handlePlaybackRateChange}>
      <option value="0.5">0.5x</option>
      <option value="1">1x</option>
      <option value="1.5">1.5x</option>
      <option value="2">2x</option>
    </select>
  </div>
  <button className='text-white focus:outline-none' onClick={toggleFullScreen}>
    <MdFullscreen size={24}/>
  </button>
</div>
        </div>
   
    </>
  )
}

export default VideoControls