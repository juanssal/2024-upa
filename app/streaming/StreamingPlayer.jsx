import React from "react"
import Image from "next/image"
import playIcon from "../assets/play.svg"
import pauseIcon from "../assets/pause.svg"
import * as utils from "../utils/variables.js"


export default function StreamingPlayer() {
    const [isStreamingPlaying, setIsStreamingPlaying] = React.useState(false)

    // streaming player handles
    function handlePlay() {
        setIsStreamingPlaying(true)
        return (
            document.getElementById('audioPlayer').play()
        )
    }
    function handlePause() {
        setIsStreamingPlaying(false)
        return (
            document.getElementById('audioPlayer').pause()
        )
    }
    return (
        <div>
            {/* ADD STREAMING PLAYER MODULE HERE */}
            <div >
                {/* -------- Player starts -------*/}
                <div >
                    {!isStreamingPlaying ? <Image src={playIcon} alt="play-icon" onClick={handlePlay} priority={true} /> : <Image src={pauseIcon} alt="pause-icon" onClick={handlePause} priority={true} />}
                </div>
                <audio
                    id="audioPlayer"
                    src={utils.streamingURL}
                ></audio>
                {/* -------- Player ends ---------*/}
                {/* -------- Current song text starts∂ ------ */}
                <iframe
                    title="streaming"
                    className="streaming"
                    height="60"
                    frameBorder="0"
                    scrolling="no"
                    width="100%"
                    // style={dynamicStyle}
                    src={utils.streamingTextURL}
                    allowtransparency="true"
                ></iframe>
                {/* -------- Current song text end ------ */}
                
            </div>
        </div>
    )
}
