import React from 'react'

const About = () => {
  return (
    <section id="about" className=' min-h-screen flex items-center justify-center py-20'>

        <div className='max-w-3xl mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-center'>About Me</h2>
        </div>

        <div className='rounded-xl p-8 border-white/10 hover:-translate-y-1 transition-all'>
            <p className='text-gray-300 mb-6'>
                Passionate developer with expertise in building scalable web applications and creating innovative solutions
            </p>

            <div>
                
            </div>
        </div>
    </section>
  )
}

export default About
