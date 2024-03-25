import React from 'react'

const Modal = ({ visible, onClose }) => {

  const handleOnClose = (e) => {
    if (e.target.id === "container-modal") onClose();
  };


  if (!visible) return null;

  return (
    <div id='container-modal' className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-[9999]' onClick={handleOnClose}>
      <div className="bg-white p-2 rounded w-3/4 mt-2">
        <div className='flex justify-end mr-6 mt-2'>
          <img id='container-modal' src='/times.png' className='modal-close cursor-pointer' onClick={() => handleOnClose()} />
        </div>
        <iframe src="https://api.leadconnectorhq.com/widget/booking/7ZW4TIE2pUKcC51y3g5G"
          style={{ width: `100%`, border: `none`, overflow: `hidden`, height: `782px` }}
          id="Qosrxg9jSQrbLv3457A5_1694540693949" className="ep-iFrame">
        </iframe>
      </div>
    </div>
  )
}

export default Modal