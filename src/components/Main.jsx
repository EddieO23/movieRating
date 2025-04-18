import React from 'react'
import './Main.css'
import Aside from './Aside'

function Main() {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <section className='grid grid-cols-3 gap-6'>
        <div className="col-span-2">
          <div className="relative ">
          {/* Image Div */}
          <div className="banner-slider bg-cover">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          </div>
          {/* Positioned abosluite Div */}
          <div class="absolute ml-10 -bottom-14">
              <div class="flex lg:gap-16 sm:gap-8 gap-4 md:flex-row flex-col">
                <img class="w-40" src="../src/assets/civil_war.jpg" alt=""/>
                <div>
                  <h2 class="lg:text-5xl md:text-4x sm:text-3xl text-2x text-white">
                    Civil War
                  </h2>
                  <p class="lg:mt-4 text-stone-400 text-wrap lg:block min-w-72">In the near future, a group of war journalists attempt to survive while reporting the truth as the United States stands on the brink of civil war.</p>
                  <p class="mt-4 text-stone-400">Genres: War, Action, Drama</p>
                  <p class="mt-4 text-stone-400">
                    <img src="../src/assets/star.png" class="w-[16px] inline" alt="rating"/>
                    Rating : 7.2
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
       <Aside/>
      </section>
    </div>
  )
}

export default Main
