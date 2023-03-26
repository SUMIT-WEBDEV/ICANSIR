import React from 'react'
import Navbar from '../Navigation/Navbar'
import "./Work.css"

function Work({img, description, imgStart, Header}) {

    
    const work__bottomWrapper = imgStart === 'start' ? 'xyz' : 'uvw'
    const work__bottomImg = imgStart === 'start' ? 'img_start' : 'img_end'
    const work__bottomText = imgStart === 'start' ? 'text_start' : 'text_end'

    return (
        <div className="work">

            <div className="work__bottom">


                <div className={`${work__bottomWrapper} wrapper`}>

                    <div className={`${work__bottomImg} bottomImg`}>
                        <img 
                        src={img}
                        alt="" />
                    </div>

                    <div className={`${work__bottomText}} bottomText`}>
                        <h1>{Header}</h1>
                        <p>{description}</p>
                    </div>

                </div>
            </div>   
        </div>
    )
}

export default Work
