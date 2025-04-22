import { createContext, useContext } from 'react'

import { CarouselContextProps } from './Carousel.static'

export const CarouselContext = createContext<CarouselContextProps | undefined>(undefined)

export const useCarousel = () => {
    const context = useContext(CarouselContext)
    if (!context) {
        throw new Error('useCarousel must be used within a CarouselProvider')
    }
    return context
}
