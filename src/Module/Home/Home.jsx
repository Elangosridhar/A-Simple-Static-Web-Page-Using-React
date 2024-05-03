import React from 'react'

export default function Home() {
  return (
     <section className='  py-40 '>
        <div className='max-w-[90rem]  w-full   mx-auto mb-4 '>
            <div className=' gird grid-cols-1 text-center '>
                <div>
                    <h1 className=' text-6xl '>Welcome to <span className=' bg-clip-text font-bold text-transparent bg-gradient-to-r from-blue-500 to-purple-500'>Neat Starter</span></h1>
                </div>
                <p className=' py-3'> <span className='decoration-dotted'>NEAT</span> Starter Template. Get Started by editing. /index.njk</p>
            </div>
            <div className='max-w-[40rem]  w-full   mx-auto py-4 '>
                <div className=' grid grid-cols-1 lg:grid-cols-2 gap-4  px-4 lg:mx-0 '>
                    <div className='p-5 border rounded-lg hover:border-indigo-500'>
                        <h1 className=' font-bold text-xl'>Netlify CMS →</h1>
                        <p>Open source content management for your Git workflow</p>
                    </div>
                    <div className=' p-5 border rounded-lg hover:border-indigo-500'>
                        <h1 className=' font-bold text-xl'>Eleventy →</h1>
                        <p>Eleventy is a simpler static site generator.</p>
                    </div>
                    <div className=' p-5 border rounded-lg hover:border-indigo-500'>
                        <h1 className=' font-bold text-xl'>Alpine.js →</h1>
                        <p>A minimal framework for composing JavaScript behavior in your markup.</p>
                    </div>
                    <div className=' p-5 border rounded-lg hover:border-indigo-500'>
                        <h1 className=' font-bold text-xl'>Tailwind CSS →</h1>
                        <p>A utility-first CSS framework for rapidly building custom designs.</p>
                    </div>
                </div>

            </div>

        </div>
     </section>
  )
}
