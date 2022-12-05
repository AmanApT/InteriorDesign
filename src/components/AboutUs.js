import React from "react";

const AboutUs = () => {
  return (
    <div  id="about" className="aboutUs" data-aos="fade">
     <section class="text-gray-400 body-font bg-gray-900">
  <div class="container flex flex-wrap px-5 py-24 mx-auto -mt-24 items-center">
    <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 md:mb-0 mb-10 pb-10 border-b border-gray-800">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-red">About Us....</h1>
      <p class="leading-relaxed text-base">
      We are an interior desiging company that aims to achieve perfection that suits you, that reflects your personality, that
              make you love your environment. We believe in customer
              satisfaction and we bind by this pledge.
      </p>
    </div>
    <div class="flex flex-col md:w-1/2 md:pl-12 -mt-9">
    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-red">Contact</h1>
      <nav class="flex flex-wrap list-none -mb-1">
        <li class="lg:w-1/3 mb-1 w-1/2">
        <p class="font-medium">Name: Dinesh Bembi</p>
        </li>
        <li class="lg:w-1/3 mb-1 pl-4 w-1/2">
        <p class="font-medium">Call Assistance: 9971824245</p>
        </li>
        <li class="lg:w-1/3 mb-1 w-1/2">
        <p class="font-medium ml-5">Email: example@gmail.com</p>
        </li>
      
      </nav>
    </div>
  </div>
</section>
    </div>
  );
};

export default AboutUs;