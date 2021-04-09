import React, { useState } from 'react'
import {Button} from '../ButtonElements'
// to change the video, just change the import file
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg,
        HeroContent, HeroH1, HeroP,
        HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer >
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Europes Top 5 Leagues</HeroH1>
                <HeroP>
                    Get all your news about the top 5 leagues of Europe
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup'
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
