import React from 'react';

function Navbar() {
  return (
    <header className='bg-zinc-900 py-6'>
      <nav className='flex justify-between max-w-screen-xl mx-auto items-center'>
        {/* Nav Logo */}
        <div className='flex gap-5 items-center'>
          <div className='text-yellow-500'>
            <div className=''>
              <p className='text-lg'>ALLABOUT</p>
            </div>
            <div className=''>
              <p className='text-lg font-bold'>Movies</p>
            </div>
          </div>
          <div className="text-md text-yellow-500">
            <p className=''>Explore</p>
          </div>
        </div>

        {/* Nav Search */}
        <div>
          <div className="">
            <input type="text" className='input lg:w-96 rounded-md placeholder:bg-black placeholder:text-zinc-600 placeholder:text-xl lg:p-2 p-1 bg-black border-none' placeholder='Search' />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
