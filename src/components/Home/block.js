import React from 'react';
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'


const generateBlocks = (blocks) =>(
    blocks ? 
        blocks.map( item=>(
            <Fade key={item.id} bottom duration={500}>
                <div className={`item ${item.type}`}>
                     <div className="veil"></div>
                     <div className="image"
                     style={{
                         background:`url(/images/blocks/${item.image}) no-repeat`
                     }}>
                         
                     </div>
                     <div className="title">
                        <Link to={item.link}>{item.title}</Link>
                     </div>
                </div>
            </Fade>
        ))
    :null
)

const Blocks = (props) => {
    
    
    return(
        <div className="home_block">
            {generateBlocks(props.blocks)}

        </div>
    )
}

export default Blocks