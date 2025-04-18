import React from 'react'

function Aside() {
  return (
    <>
      <aside className='xl:mt-0 mt-24 '>
      <p className='text-yellow-500 font-bold text-xl py-4'>Up Next</p>
      <div className="bg-gradient-to-b from-zinc-900 via-zin-900 to-black p-4">
        <div className='flex gap-4 mb-4'>
          <img className='w-20 h-[100%]' src="../src/assets/farFromMan.jpg" alt="movie_1" />
          <div className="">
            <p className='text-stone-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, modi! Corrupti fuga est ipsa mollitia. Quod ut doloremque accusantium vitae?</p>
            <p className='text-stone-400'>Genres: War, Action, Drama</p>
            <p className='text-stone-400'>Rating: 7.2</p>
          </div>
        </div>

        <div className='flex gap-4 mb-4'>
          <img className='w-20 h-[100%]' src="../src/assets/fightClub.jpg" alt="movie_2" />
          <div className="">
            <p className='text-stone-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, modi! Corrupti fuga est ipsa mollitia. Quod ut doloremque accusantium vitae?</p>
            <p className='text-stone-400'>Genres: War, Action, Drama</p>
            <p className='text-stone-400'>Rating: 9.0</p>
          </div>
        </div>


        <div className='flex gap-4 mb-4'>
          <img className='w-20 h-[100%]' src="../src/assets/godFather.jpg" alt="movie_3" />
          <div className="">
            <p className='text-stone-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, modi! Corrupti fuga est ipsa mollitia. </p>
            <p className='text-stone-400'>Genres: War, Action, Drama</p>
            <p className='text-stone-400'>Rating: 8.3</p>
          </div>
        </div>

      </div>
      </aside>
    </>
  )
}

export default Aside
