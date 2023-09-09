import './GallerySection.css'
import { useState } from 'react'
import { galleryImages } from './GalleryImages'

import {
  AiOutlineCloseCircle,
  AiFillCaretLeft,
  AiFillCaretRight
} from 'react-icons/ai'


const GallerySection = () => {
  
  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1)
  }

  // Next Image  
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1)
  }

  return (
    <div>

      {openModal &&
        <div className='sliderWrap'>
          <AiOutlineCloseCircle className='btnClose' onClick={handleCloseModal} />
          <AiFillCaretLeft className='btnPrev' onClick={prevSlide} />
          <AiFillCaretRight className='btnNext' onClick={nextSlide} />
          <div className='fullScreenImage'>
            <img src={galleryImages[slideNumber].img} alt='' />
          </div>
        </div>
      }

      <div className='galleryWrap'>
        {
          galleryImages && galleryImages.map((slide, index) => {
            return (
              <div
                className='single'
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img src={slide.img} alt='' height={'300px'} />
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default GallerySection