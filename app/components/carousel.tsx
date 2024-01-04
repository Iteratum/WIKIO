import CarImage1 from "public/assets/forest-landscape_71767-127.avif"
import CarImage2 from "public/assets/photo-1503614472-8c93d56e92ce.avif"
import CarImage3 from "public/assets/landscape1.webp"
import CarImage4 from "public/assets/images (4).jpg"
import { useEffect, useState } from "react"


export default function HandleCarousel() {
    const CarouselImages = [
        CarImage1,
        CarImage2,
        CarImage3,
        CarImage4,
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timeout = setInterval(() => {
            setCurrentIndex(
                (PreIndex) => (PreIndex === CarouselImages.length - 1 ? 0 : PreIndex + 1)
            )
        }, 3000)
        return() => clearInterval(timeout)
    },)
    
    return(
        <div>
            
            <img src={CarouselImages[currentIndex]} alt='images' className='relative object-cover w-screen h-screen lg:w-[120vw] lg:h-[100vh]' />
        </div>
    )
}