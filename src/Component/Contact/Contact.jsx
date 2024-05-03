import React from 'react'

export default function Contact() {
  return (
    <section  className=' py-40'>
    <div className=' max-w-[90rem]  w-full   mx-auto mb-4' >
        <div className=' flex  justify-center'>
            <div>
             <h1 className=' text-5xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-blue-500 to-purple-500'>Contact <span className=' text-5xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-purple-500 to-blue-500'>Us</span></h1>
            </div>
        </div>
        <div className="container max-w-[40rem] w-full mx-auto mt-8 px-4">
        <form action="mailto:your@email.com" method="POST" enctype="text/plain">
            <div className="mb-4">
                <label for="name" className="block text-gray-700">Name:</label>
                <input type="text" id="name" name="name" placeholder='Enter Your Name' className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required></input>
            </div>
            <div className="mb-4">
                <label for="email" class="block text-gray-700">Email:</label>
                <input type="text" id="email" name="email" placeholder='Logo123@gmail.com' className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required></input>
            </div>
            <div className="mb-4">
                <label for="message" className="block text-gray-700">Message:</label>
                <textarea id="message" name="message" rows="4" placeholder='Write Here' className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
        </form>
    </div>
    </div>
 </section>
  )
}
