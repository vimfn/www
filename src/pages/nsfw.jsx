import React, { useEffect } from 'react';

const Button = () => {
    useEffect(() => {
        // Set the page title
        document.title = '?';
    });
    const audioElement = React.useRef(null)
    const [isPlaying, setIsPlaying] = React.useState(false)
    const [color, setColor] = React.useState('white')

    const handleClick = () => {
        audioElement.current.play()
        setIsPlaying(true)
    }
    const handleAudioEnded = () => {
        setIsPlaying(false)
    }
    React.useEffect(() => {
        document.body.style.backgroundColor = color
        if (isPlaying) {
            const interval = setInterval(() => {
                setColor(getRandomColor())
            }, 250)
            return () => clearInterval(interval)
        }
    }, [isPlaying, color])

    return (
        <html lang="en">
            <body>
                <div className='nsfw' >
                    {!isPlaying && <button onClick={handleClick}><div className='button w-40 h-16 bg-blue-500 rounded-lg cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
    border-b-[1px] border-blue-400
  '>
                        <span className='flex flex-col justify-center items-center h-full text-white font-bold text-lg '>Trust Me</span>
                    </div></button>}
                    {isPlaying && <img className="dancing-image" src="/static/images/cat.webp" alt="Audio is playing" />}
                    <audio ref={audioElement} src="/static/sounds/audio.mp3" onEnded={handleAudioEnded} />
                </div>
            </body>
        </html>
    )
}

function getRandomColor() {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

export default Button;