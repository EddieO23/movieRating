import React from 'react';

function MovieCard() {
const starImg = '../src/assets/star.png'

  return (
    <>
      <section>
        <h2 className='text-2xl text-yellow-500 font-bold ml-6'>
          Top Rated Movies
        </h2>
        {/* Movie Cards */}
        <div className='grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-10 px-4 md:px-8 '>
          <a href='#' className='hover:scale-105 transition-transform'>
            <div className='flex fle-col my-3 rounded-lg overflow-hidden duration-200'>
              <div className='relative cursor-pointer'>
                <img
                  src='../src/assets/darkKnight.jpeg'
                  className='object-fit w-46'
                  alt=''
                />
                <div className="absolute z-10 bottom-2 left-2 flex gap-2 items-center"></div>
                <div className="absolute -bottom-10 w-full h-28  "></div>
              </div>
            </div>
            <div className='p-2 z-10 flex flex-col items-stretch gap-1 h-fit justify-between bg-[#222]'>
              <div className='cursor-pointer'>
                <h2 className='text-white text-left md:text-[17px] text-sm font-semibold line-clamp-1 w-fit hover:underline'>
                  Dark Knight
                </h2>
                <div className="mt-2 md:text-[15px] text-[13px] text-zinc-300 line-clamp-1">
                  <h3>
                    <img src={`${starImg}`} className='w-[16px]' alt="" />
                  </h3>
                </div>
                <h3 className='text-zinc-300 md:text-[14px] text-[13px]'>
                  Language: EN
                </h3>
                <h3 className='text-zinc-300 md:text-[14px] text-[13px]'>
                  Release : 2007
                </h3>
              </div>
            </div>
          </a>
          <a href='#' className='hover:scale-105 transition-transform'>
            <div className='flex fle-col my-3 rounded-lg overflow-hidden duration-200'>
              <div className='relative cursor-pointer'>
                <img
                  src='../src/assets/darkKnight.jpeg'
                  className='object-fit w-46'
                  alt=''
                />
                <div className="absolute z-10 bottom-2 left-2 flex gap-2 items-center"></div>
                <div className="absolute -bottom-10 w-full h-28  "></div>
              </div>
            </div>
            <div className='p-2 z-10 flex flex-col items-stretch gap-1 h-fit justify-between bg-[#222]'>
              <div className='cursor-pointer'>
                <h2 className='text-white text-left md:text-[17px] text-sm font-semibold line-clamp-1 w-fit hover:underline'>
                  Dark Knight
                </h2>
                <div className="mt-2 md:text-[15px] text-[13px] text-zinc-300 line-clamp-1">
                  <h3>
                    <img src={`${starImg}`} className='w-[16px]' alt="" />
                  </h3>
                </div>
                <h3 className='text-zinc-300 md:text-[14px] text-[13px]'>
                  Language: EN
                </h3>
                <h3 className='text-zinc-300 md:text-[14px] text-[13px]'>
                  Release : 2007
                </h3>
              </div>
            </div>
          </a>
          <a href='#' className='hover:scale-105 transition-transform'>
            <div className='flex fle-col my-3 rounded-lg overflow-hidden duration-200'>
              <div className='relative cursor-pointer'>
                <img
                  src='../src/assets/darkKnight.jpeg'
                  className='object-fit w-46'
                  alt=''
                />
                <div className="absolute z-10 bottom-2 left-2 flex gap-2 items-center"></div>
                <div className="absolute -bottom-10 w-full h-28  "></div>
              </div>
            </div>
            <div className='p-2 z-10 flex flex-col items-stretch gap-1 h-fit justify-between bg-[#222]'>
              <div className='cursor-pointer'>
                <h2 className='text-white text-left md:text-[17px] text-sm font-semibold line-clamp-1 w-fit hover:underline'>
                  Dark Knight
                </h2>
                <div className="mt-2 md:text-[15px] text-[13px] text-zinc-300 line-clamp-1">
                  <h3>
                    <img src={`${starImg}`} className='w-[16px]' alt="" />
                  </h3>
                </div>
                <h3 className='text-zinc-300 md:text-[14px] text-[13px]'>
                  Language: EN
                </h3>
                <h3 className='text-zinc-300 md:text-[14px] text-[13px]'>
                  Release : 2007
                </h3>
              </div>
            </div>
          </a>
          <a href='#' className='hover:scale-105 transition-transform'>
            <div className='flex fle-col my-3 rounded-lg overflow-hidden duration-200'>
              <div className='relative cursor-pointer'>
                <img
                  src='../src/assets/darkKnight.jpeg'
                  className='object-fit w-46'
                  alt=''
                />
                <div className="absolute z-10 bottom-2 left-2 flex gap-2 items-center"></div>
                <div className="absolute -bottom-10 w-full h-28  "></div>
              </div>
            </div>
            <div className='p-2 z-10 flex flex-col items-stretch gap-1 h-fit justify-between bg-[#222]'>
              <div className='cursor-pointer'>
                <h2 className='text-white text-left md:text-[17px] text-sm font-semibold line-clamp-1 w-fit hover:underline'>
                  Dark Knight
                </h2>
                <div className="mt-2 md:text-[15px] text-[13px] text-zinc-300 line-clamp-1">
                  <h3>
                    <img src={`${starImg}`} className='w-[16px]' alt="" />
                  </h3>
                </div>
                <h3 className='text-zinc-300 md:text-[14px] text-[13px]'>
                  Language: EN
                </h3>
                <h3 className='text-zinc-300 md:text-[14px] text-[13px]'>
                  Release : 2007
                </h3>
              </div>
            </div>
          </a>
          <a href='#' className='hover:scale-105 transition-transform'>
            <div className='flex fle-col my-3 rounded-lg overflow-hidden duration-200'>
              <div className='relative cursor-pointer'>
                <img
                  src='../src/assets/darkKnight.jpeg'
                  className='object-fit w-46'
                  alt=''
                />
                <div className="absolute z-10 bottom-2 left-2 flex gap-2 items-center"></div>
                <div className="absolute -bottom-10 w-full h-28  "></div>
              </div>
            </div>
            <div className='p-2 z-10 flex flex-col items-stretch gap-1 h-fit justify-between bg-[#222]'>
              <div className='cursor-pointer'>
                <h2 className='text-white text-left md:text-[17px] text-sm font-semibold line-clamp-1 w-fit hover:underline'>
                  Dark Knight
                </h2>
                <div className="mt-2 md:text-[15px] text-[13px] text-zinc-300 line-clamp-1">
                  <h3>
                    <img src={`${starImg}`} className='w-[16px]' alt="" />
                  </h3>
                </div>
                <h3 className='text-zinc-300 md:text-[14px] text-[13px]'>
                  Language: EN
                </h3>
                <h3 className='text-zinc-300 md:text-[14px] text-[13px]'>
                  Release : 2007
                </h3>
              </div>
            </div>
          </a>
          <a href='#' className='hover:scale-105 transition-transform'>
            <div className='flex fle-col my-3 rounded-lg overflow-hidden duration-200'>
              <div className='relative cursor-pointer'>
                <img
                  src='../src/assets/darkKnight.jpeg'
                  className='object-fit w-46'
                  alt=''
                />
                <div className="absolute z-10 bottom-2 left-2 flex gap-2 items-center"></div>
                <div className="absolute -bottom-10 w-full h-28  "></div>
              </div>
            </div>
            <div className='p-2 z-10 flex flex-col items-stretch gap-1 h-fit justify-between bg-[#222]'>
              <div className='cursor-pointer'>
                <h2 className='text-white text-left md:text-[17px] text-sm font-semibold line-clamp-1 w-fit hover:underline'>
                  Dark Knight
                </h2>
                <div className="mt-2 md:text-[15px] text-[13px] text-zinc-300 line-clamp-1">
                  <h3>
                    <img src={`${starImg}`} className='w-[16px]' alt="" />
                  </h3>
                </div>
                <h3 className='text-zinc-300 md:text-[14px] text-[13px]'>
                  Language: EN
                </h3>
                <h3 className='text-zinc-300 md:text-[14px] text-[13px]'>
                  Release : 2007
                </h3>
              </div>
            </div>
          </a>
          <a href='#' className='hover:scale-105 transition-transform'>
            <div className='flex fle-col my-3 rounded-lg overflow-hidden duration-200'>
              <div className='relative cursor-pointer'>
                <img
                  src='../src/assets/darkKnight.jpeg'
                  className='object-fit w-46'
                  alt=''
                />
                <div className="absolute z-10 bottom-2 left-2 flex gap-2 items-center"></div>
                <div className="absolute -bottom-10 w-full h-28  "></div>
              </div>
            </div>
            <div className='p-2 z-10 flex flex-col items-stretch gap-1 h-fit justify-between bg-[#222]'>
              <div className='cursor-pointer'>
                <h2 className='text-white text-left md:text-[17px] text-sm font-semibold line-clamp-1 w-fit hover:underline'>
                  Dark Knight
                </h2>
                <div className="mt-2 md:text-[15px] text-[13px] text-zinc-300 line-clamp-1">
                  <h3>
                    <img src={`${starImg}`} className='w-[16px]' alt="" />
                  </h3>
                </div>
                <h3 className='text-zinc-300 md:text-[14px] text-[13px]'>
                  Language: EN
                </h3>
                <h3 className='text-zinc-300 md:text-[14px] text-[13px]'>
                  Release : 2007
                </h3>
              </div>
            </div>
          </a>
          <a href='#' className='hover:scale-105 transition-transform'>
            <div className='flex fle-col my-3 rounded-lg overflow-hidden duration-200'>
              <div className='relative cursor-pointer'>
                <img
                  src='../src/assets/darkKnight.jpeg'
                  className='object-fit w-46'
                  alt=''
                />
                <div className="absolute z-10 bottom-2 left-2 flex gap-2 items-center"></div>
                <div className="absolute -bottom-10 w-full h-28  "></div>
              </div>
            </div>
            <div className='p-2 z-10 flex flex-col items-stretch gap-1 h-fit justify-between bg-[#222]'>
              <div className='cursor-pointer'>
                <h2 className='text-white text-left md:text-[17px] text-sm font-semibold line-clamp-1 w-fit hover:underline'>
                  Dark Knight
                </h2>
                <div className="mt-2 md:text-[15px] text-[13px] text-zinc-300 line-clamp-1">
                  <h3>
                    <img src={`${starImg}`} className='w-[16px]' alt="" />
                  </h3>
                </div>
                <h3 className='text-zinc-300 md:text-[14px] text-[13px]'>
                  Language: EN
                </h3>
                <h3 className='text-zinc-300 md:text-[14px] text-[13px]'>
                  Release : 2007
                </h3>
              </div>
            </div>
          </a>
          <a href='#' className='hover:scale-105 transition-transform'>
            <div className='flex fle-col my-3 rounded-lg overflow-hidden duration-200'>
              <div className='relative cursor-pointer'>
                <img
                  src='../src/assets/darkKnight.jpeg'
                  className='object-fit w-46'
                  alt=''
                />
                <div className="absolute z-10 bottom-2 left-2 flex gap-2 items-center"></div>
                <div className="absolute -bottom-10 w-full h-28  "></div>
              </div>
            </div>
            <div className='p-2 z-10 flex flex-col items-stretch gap-1 h-fit justify-between bg-[#222]'>
              <div className='cursor-pointer'>
                <h2 className='text-white text-left md:text-[17px] text-sm font-semibold line-clamp-1 w-fit hover:underline'>
                  Dark Knight
                </h2>
                <div className="mt-2 md:text-[15px] text-[13px] text-zinc-300 line-clamp-1">
                  <h3>
                    <img src={`${starImg}`} className='w-[16px]' alt="" />
                  </h3>
                </div>
                <h3 className='text-zinc-300 md:text-[14px] text-[13px]'>
                  Language: EN
                </h3>
                <h3 className='text-zinc-300 md:text-[14px] text-[13px]'>
                  Release : 2007
                </h3>
              </div>
            </div>
          </a>
          <a href='#' className='hover:scale-105 transition-transform'>
            <div className='flex fle-col my-3 rounded-lg overflow-hidden duration-200'>
              <div className='relative cursor-pointer'>
                <img
                  src='../src/assets/darkKnight.jpeg'
                  className='object-fit w-46'
                  alt=''
                />
                <div className="absolute z-10 bottom-2 left-2 flex gap-2 items-center"></div>
                <div className="absolute -bottom-10 w-full h-28  "></div>
              </div>
            </div>
            <div className='p-2 z-10 flex flex-col items-stretch gap-1 h-fit justify-between bg-[#222]'>
              <div className='cursor-pointer'>
                <h2 className='text-white text-left md:text-[17px] text-sm font-semibold line-clamp-1 w-fit hover:underline'>
                  Dark Knight
                </h2>
                <div className="mt-2 md:text-[15px] text-[13px] text-zinc-300 line-clamp-1">
                  <h3>
                    <img src={`${starImg}`} className='w-[16px]' alt="" />
                  </h3>
                </div>
                <h3 className='text-zinc-300 md:text-[14px] text-[13px]'>
                  Language: EN
                </h3>
                <h3 className='text-zinc-300 md:text-[14px] text-[13px]'>
                  Release : 2007
                </h3>
              </div>
            </div>
          </a>
          
        </div>

        <div className="flex justify-center mt-8">
          <div className='mx-auto'>
            <button className='border border-white rounded-none py-2 px-6 text-white font-bold xl:text-xl hover:bg-white hover:text-black'>
              Load more...
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default MovieCard;
