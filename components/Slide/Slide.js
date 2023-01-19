import React from 'react'
import { Link } from 'next/link'
import Image from 'next/image'

const Slide = (props) => {
    const {img, title, content} = props
    console.log(props)
    return (
        <div className="item"> 
        <Image className="d-block w-100" src={img} alt="First slide"/>

            <div className="caption d-md-block">
                <div className="display">{title} </div>
                <div className="content">{content}</div>
                <Link href="/about-us" className="view_more" title="View More">View More</Link>
                <Link href="/contact-us" className="view_more contact_us" title="Contact Us">Contact Us</Link>
            </div>

        </div>

    )
}

export default Slide