import React from 'react'

export default function About() {
  return (
 <section  className=' py-40'>
    <div className=' max-w-[90rem]  w-full   mx-auto ' >
        <div className=' flex  justify-center'>
            <div>
             <h1 className=' text-5xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-blue-500 to-purple-500'>About <span className=' text-5xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-purple-500 to-blue-500'>Us</span></h1>
            </div>
        </div>
        <div className=' max-w-[40rem] w-full mx-auto py-10'>
           <div className='  gird grid-cols-1 text-center '>
               <div>
                  <h1 className=' text-2x1 font-bold'>Our story</h1>
               </div>
               <p>Welcome to Logo, your destination for [briefly describe what your website offers or its purpose]. Since its inception, 
                   Logo has been committed to [mention your dedication, values, or goals].</p>
           </div>
        </div>
        <div className=' max-w-[40rem] w-full mx-auto py-5'>
           <div className='  gird grid-cols-1 text-center '>
               <div>
                  <h1 className=' text-2x1 font-bold'>Our Mission</h1>
               </div>
               <p>At Logo, our mission is to [state your website's mission statement or core objective]. We strive to [briefly describe how you aim to fulfill your mission]..</p>
           </div>
        </div>
        <div className=' max-w-[40rem] w-full mx-auto py-5'>
           <div className='  gird grid-cols-1 text-center '>
               <div>
                  <h1 className=' text-2x1 font-bold'>Join Our Community</h1>
               </div>
               <p>Become a part of the Logo community! [Describe how visitors can engage with your website, such as subscribing to newsletters,
                 joining forums, or following on social media.].</p>
           </div>
        </div>

        

    </div>
 </section>
  )
}
