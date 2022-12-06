import React from 'react'


const UserInfo = () => {
  return (
    <section class="text-grey-600 body-font pt-10 -mt-14">
      {/* <div class="container px-16 py-20 mx-auto flex flex-wrap items-center"> */}

      <div class="lg:w-80 md:w-1/3 bg-grey rounded-lg p-8 flex flex-col md:ml-auto w-full mr-20 md:mt-0">
        <h2 class="text-grey-900 text-lg font-medium title-font mb-4">Book here</h2>
        <div class="relative mb-4">
          <label for="full-name" class="leading-7 text-md text-grey-600">Full Name</label>
          <input type="text" id="full-name" name="full-name" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-md text-gray-600">Email</label>
          <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <button class="text-white bg-red border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Submit</button>
      </div>
      {/* </div> */}
    </section>
  )
}

export default UserInfo