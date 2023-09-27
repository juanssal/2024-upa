import Image from "next/image"
import playIcon from "../assets/play.svg"
import pauseIcon from "../assets/pause.svg"


export default function StreamingPlayer() {
    return (
        <div>
            <Image src={playIcon} alt="play-icon"  />
            <Image src={pauseIcon} alt="pause-icon" />
            {/* ADD STREAMING PLAYER MODULE HERE */}
        </div>
    )
}
