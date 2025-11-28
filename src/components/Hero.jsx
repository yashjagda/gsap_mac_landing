import React, { useEffect, useRef } from 'react'

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
  }, []);
  return (
    <section id="hero"> 
       <div>
            <h1>Macbook Pro</h1>
            <img src="/title.png" alt="Macbook Pro" />
        </div> 

        <video src="/videos/hero.mp4" autoPlay muted playsInline ref={videoRef}/>
        <button>Buy</button>
        <p>From $1599 or $133/mo. for 12 months</p>
    </section> 
  )
}

export default Hero