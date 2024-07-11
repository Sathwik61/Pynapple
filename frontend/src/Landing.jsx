import React from 'react'
import { Link } from 'react-router-dom'
function Landing() {
  return (
    
<div class="bg-gray-100 font-sans leading-normal tracking-normal">

<header class="bg-white border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
    <div class="flex items-center justify-between mb-4 md:mb-0">
        <h1 class="leading-none text-2xl text-gray-900">Your File Sharing System</h1>
    </div>
    <nav>
        <ul class="list-reset md:flex md:items-center">
            <li><a href="#" class="block md:inline-block mt-4 md:mt-0 mr-6 text-gray-900 hover:text-blue-500">Home</a></li>
            <li><a href="#" class="block md:inline-block mt-4 md:mt-0 mr-6 text-gray-900 hover:text-blue-500">Features</a></li>
            <li><a href="#" class="block md:inline-block mt-4 md:mt-0 text-gray-900 hover:text-blue-500">About</a></li>
        </ul>
    </nav>
</header>

<section class="bg-white border-b py-8">
    <div class="container mx-auto px-2 md:flex md:items-center">
        <div class="w-full md:w-1/2 py-6 text-center">
            {/* <img class="w-full md:w-4/5 mx-auto" src="hero-image.jpg" alt="Hero Image"> */}
        </div>
        <div class="w-full md:w-1/2 py-6 text-center">
            <h2 class="text-3xl leading-tight mb-4">Securely Share and Receive Files</h2>
            <p class="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod
                convallis aliquam. Curabitur ac ante ultrices, mattis lorem ut, bibendum turpis.</p>
            <div class="mt-8">
                <Link to="/login" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">Login</Link>
                <Link to="/signup" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Sign Up</Link>
            </div>
        </div>
    </div>
</section>

<footer class="bg-white border-t border-gray-400 shadow">
    <div class="container mx-auto flex py-8">
        <div class="w-full mx-auto flex flex-wrap">
            <div class="flex w-full lg:w-1/2 ">
                <div class="px-8">
                    <h3 class="font-bold text-gray-900">About Us</h3>
                    <p class="py-4 text-gray-600 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel nulla sed dolor
                        tincidunt
                        congue.
                    </p>
                </div>
            </div>
            <div class="flex w-full lg:w-1/2 lg:justify-end lg:text-right">
                <div class="px-8">
                    <h3 class="font-bold text-gray-900">Social Media</h3>
                    <ul class="list-reset items-center text-sm pt-3">
                        <li>
                            <a class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:underline py-1"
                                href="#">Add social media links here</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>

</div>
  )
}

export default Landing