import React from 'react'

export default function Blog() {
  return (
    <section  className=' py-7'>
    <div className=' max-w-[90rem] w-full   mx-auto mb-4' >
        <div className=' flex  justify-center py-5'>
            <div>
             <h1 className=' text-5xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-blue-500  to-purple-500'>Our <span className=' text-5xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-purple-500 to-blue-500'>Blog</span></h1>
            </div>
        </div>
        <div className=' max-w-[45rem] w-full mx-auto py-3'>
           <div className='  gird grid-cols-1 '>
               <div>
                  <h1 className=' font-bold text-3xl text-gray-900 mb-2'>This is my fourth & latest post</h1>
               </div>
               <p className=' text-gray-400 text-lg'>23 Sep 2020 by Elango S</p>
               <p className=' text-gray-400 py-2 text-lg '>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, 
a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>
               <a href="" className=' text-indigo-500 text-lg font-bold'>Read more →</a>
           </div>
        </div>
        <div className=' max-w-[45rem] w-full mx-auto py-3'>
           <div className='  gird grid-cols-1 '>
               <div>
                  <h1 className=' font-bold text-3xl text-gray-900 mb-2'>This is my third post</h1>
               </div>
               <p className=' text-gray-400 text-lg'>23 Sep 2020 by Elango S</p>
               <p className=' text-gray-400 py-2 text-lg '>Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
                Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment..</p>
               <a href="" className=' text-indigo-500 text-lg font-bold'>Read more →</a>
           </div>
        </div>
        <div className=' max-w-[45rem] w-full mx-auto py-3'>
           <div className='  gird grid-cols-1 '>
               <div>
                  <h1 className=' font-bold text-3xl text-gray-900 '>This is my second post</h1>
               </div>
               <p className=' text-gray-400 text-lg'>23 Sep 2020 by Elango S</p>
               <p className=' text-gray-400 py-2 text-lg '>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward,
                a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution..</p>
               <a href="" className=' text-indigo-500 text-lg font-bold'>Read more →</a>
           </div>
        </div>
        <div className=' max-w-[45rem] w-full mx-auto py-3'>
           <div className='  gird grid-cols-1 '>
               <div>
                  <h1 className=' font-bold text-3xl text-gray-900 mb-2'>This is my first post</h1>
               </div>
               <p className=' text-gray-400 text-lg'>23 Sep 2020 by Elango S</p>
               <p className=' text-gray-400 py-2 text-lg '>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. 
               Override the digital divide with additional clickthroughs from DevOps..</p>
               <a href="" className=' text-indigo-500 text-lg font-bold'>Read more →</a>
           </div>
        </div>
    </div>
 </section>
  )
}
