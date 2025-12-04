import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'

const Showcase = () => {
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  
    useGSAP(() => {
        if(!isTablet){
            const timeline = gsap.timeline({
              scrollTrigger: {
                trigger: "#showcase",
                start: "top top",
                end: "bottom top",
                scrub: true,
                pin: true,
              }
        });
            timeline.to('.mask img', {
                transform: 'scale(1.1)'
            }).to('.content', {opacity: 1, y: 0, ease: 'power1.in'})
        }
    })
  
    return (
    <section id="showcase">
        <div className = "media">
            <video src="/videos/game.mp4" autoPlay loop muted />
            <div className="mask">
                <img src="/mask-logo.svg" alt="mask-logo" />
            </div>
        </div>

        <div className="content">
            <div className="wrapper">
                <div className="lg:max-w-md">
                    <h2>Rocket Chip</h2>
                    <div className="space-y-5 mt-7 pe-10">
                        <p>
                            Introducing {" "}
                            <span className="text-white">
                                M4, the next generation of Apple silicon
                            </span>
                            . M4 powers
                        </p>
                        <p> It drives the performance of the new Macbook Pro</p>
                        <p> while delivering the same battery life as the previous generation.</p>
                        <p> M4 is the first chip designed for Mac to be built using TSMC's 5nm process.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Showcase