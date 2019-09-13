import React from 'react';
import Slider from 'react-slick';


const settings={
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:1,
    slidesToScrool:1    
}

const generateSlides = (slides) => (
    slides?
        <Slider {...settings}>
            {slides.map(item =>(
                <div key={item.id}>
                    <div 
                    className="item_slider" style={{
                    background:`url(/images/covers/${item.cover})`
                    }}>
                        <div className="caption">
                            <h4>{item.topic}</h4>
                            <p>{item.title}</p>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    :null
)

const SliderWidget = (props) => {

    return(
        <>
            {generateSlides(props.slides)}
        </>
    )

}

export default SliderWidget