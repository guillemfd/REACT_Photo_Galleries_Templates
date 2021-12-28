import './GalleryOne.css';
import React from 'react';
import Img1 from '../../images/Gallery1.jpg'
import Img2 from '../../images/Gallery2.jpg'
import Img3 from '../../images/Gallery3.jpg'
import Img4 from '../../images/Gallery4.jpg'
import Img5 from '../../images/Gallery5.jpg'
import Img6 from '../../images/Gallery6.jpg'
import Img7 from '../../images/Gallery7.jpg'
import Img8 from '../../images/Gallery8.jpg'
import Img9 from '../../images/Gallery9.jpg'
import Img10 from '../../images/Gallery10.jpg'
import Img11 from '../../images/Gallery11.jpg'

const GalleryOne = () => {

    let data = [
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id: 6,
            imgSrc: Img6,
        },
        {
            id: 7,
            imgSrc: Img7,
        },
        {
            id: 8,
            imgSrc: Img8,
        },
        {
            id: 9,
            imgSrc: Img9,
        },
        {
            id: 10,
            imgSrc: Img10,
        },
        {
            id: 11,
            imgSrc: Img11,
        },
    ]

    return(
        <>
        <div>
            <h1 className='title'>Gallery One</h1>    
            <div className='gallery'>
                {data.map((item, index) => {
                    return (
                        <div className='pics' key={index}>
                            <img src={item.imgSrc} alt='GalleryOneImg'/>
                        </div>
                    )
                })}

            </div>
        </div>
        </>
    )
}

export default GalleryOne;