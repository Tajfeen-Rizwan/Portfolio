import React from 'react'

const Skills = () => {
  return (
    <div className='container pt-32'>
        <div className='grid md:grid-cols-2  gap-20 items-center'>
         <div>
            <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
            <p className='text-gray-500 pt-2'>
            I have a solid foundation in HTML and CSS, which I continue to refine as I work on new projects. My journey with TypeScript has given me a deeper understanding of JavaScript, although I am still in the process of mastering it. Recently, I’ve started exploring Next.js and Tailwind CSS, and I am excited to leverage these technologies to build dynamic and responsive websites. While I am constantly learning and improving, I’m eager to apply my growing skill set to create modern, user-friendly applications.  
            </p>
         </div>
         <div>
            <div className='grid grid-cols-2 text-amber-400 text-3xl sm:text-4xl'>
                <div className='space-y-2'>
                    <h2 data-aos="flip-up">Typescript</h2>
                    <h2 data-aos="flip-up">HTML</h2>
                    <h2 data-aos="flip-up">CSS</h2>
                </div>
                <div className='space-y-2'>
                    <h2 data-aos="flip-up">Adaptability</h2>
                    <h2 data-aos="flip-up">Perseverance</h2>
                    <h2 data-aos="flip-up">Visualization</h2>
                </div>
            </div>
         </div>
        </div>
    </div>
  )
}

export default Skills
