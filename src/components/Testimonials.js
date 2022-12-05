import React from 'react';
import image1 from "../images/model1.jpeg";
import image2 from "../images/model2.jpg";
import image3 from "../images/model3.jpg";
const Testimonials = () => {
    return (
        <div  id="testimonials" className='testimonialBackground' data-aos="flip-up">
            <section class="text-gray-600 body-font">
            <p class="uppercase text-peach text-2xl mt-4 ml-96 font-bold">We'll let our clients do the talking</p>
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/3 lg:mb-0 mb-6">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src= {image1} />
          <p class="leading-relaxed px-3">I'm a big fan of interior design, I'm always looking for new design ideas and looking for ideas for my own home. You guys provided me the dream designs that I never had.</p>
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
          <p class="text-gray-500">Senior Product Designer</p>
        </div>
      </div>
      <div class="lg:w-1/3 lg:mb-0 mb-6">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"  src= {image2}  />
          <p class="leading-relaxed px-3">I'm a big fan of interior design, I'm always looking for new design ideas and looking for ideas for my own home. You guys provided me the dream designs that I never had.</p>
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
          <p class="text-gray-500">UI Develeoper</p>
        </div>
      </div>
      <div class="lg:w-1/3 lg:mb-0">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"  src= {image3}  />
          <p class="leading-relaxed px-3">I'm a big fan of interior design, I'm always looking for new design ideas and looking for ideas for my own home. You guys provided me the dream designs that I never had.</p>
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
          <p class="text-gray-500">CTO</p>
        </div>
      </div>
    </div>
  </div>
</section>
<hr className="breaker"/>
        </div>
    )
}

export default Testimonials