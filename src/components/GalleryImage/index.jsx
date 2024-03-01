import React from 'react'

const GalleryImage = ({ hero }) => {
  return (
    <div className='gallery-image'>
        <img src={hero.images.sm} />
    </div>
  )
}

export default GalleryImage