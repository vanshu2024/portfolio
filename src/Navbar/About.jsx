import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profilePic from "../assets/vanshuphoto.jpg";


const About = () => {
    return (
        <section
        id='about'
        className="py-12 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mt-16 md:mt-24 lg:mt-32">
            <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-12'>

                {/* left side - text */}
                <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>

                <h1 className='text-3xl sm:text-5xl font-bold text-white mb-2 leading-tight'>
                    Hi, I am 
                    </h1>

                    <h2 className='text-4xl sm:text-5xl md:text-3xl font-bold text-white mb-4 leading-tight'>
                        Vanshika Gangwar
                </h2>
                <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold text-[#8245ec] leading-tight space-x-2 mb-4'>
                    <span className='text-white'>
                        I am a
                    </span>
                    <ReactTypingEffect
                    text={[' Full Stack Developer.', 
                        ' Tech Enthusiast.',
                        ' Lifelong Learner.',
                        'Coder',
                        'App Developer']}
                    speed={100}
                    eraseSpeed={50}
                    typingDelay={500}
                    eraseDelay={2000}
                    cursorRenderer={cursor =>( 
                    <span className='text-[#8245ec]'>{cursor}</span>)}
                    >   </ReactTypingEffect>
                    
                    
                </h3>

                {/* description */}

                <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
                I am a passionate Full Stack Developer with a knack for creating dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I thrive on transforming ideas into functional digital experiences. My journey in tech is fueled by curiosity and a commitment to continuous learning, allowing me to stay updated with the latest industry trends. Let's connect and build something amazing together!
                </p> 

                <a
                href="https://drive.google.com/file/d/1B9Qs_26Uk9Ji3I23-kbnZQIo-28Ql-F_/view?usp=drivesdk"
                target='_blank'
                rel='noopener noreferrer' 
                className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105 hover:shadow-lg'     
                style={{
                    background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                    boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec , 0 0 40px #8245ec',
                }}  
                
                >
                Download Resume
                </a>
                
            </div>

            <div className='md:w-1/2 flex justify-between md:justify-end'>
                <Tilt className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w- lg:h-88 border-4 border-[#8245ec] rounded-full shadow-[0_0_40px_rgba(130,69,236,0.5)]"
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                perspective={1000}
                scale={1.05}
                transitionSpeed={1000}
                gyroscope={true}
                >
                    <img 
                    src={profilePic}
                    alt='Vanshika Gangwar' 
                    className='w-full h-full rounded-full object-cover drop-shadow-[0_0_10px_rgba(130,69,236,0.7)]'

                    />

                </Tilt>


            </div>
            </div>
            </section>
    )
};

export default About;