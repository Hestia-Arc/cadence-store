import React from 'react'

export const Blog = () => {
  return (
    <section className='h-[657px] px-[160px] py-[80px]'>
        <div className='h-[44px] flex justify-between'>
            <div>Articles</div>
            <div>More Articles</div>
        </div>

        {/*  */}
        <div className='h-[413px] flex justify-between'>
            <div className='w-[357px] flex flex-col gap-[24px]'>
                <div className='h-[325px] bg-gray-200'></div>

                {/*  */}
                <div className='h-[64px] bg-gray-300'>
                    <p>7 ways to decor your home</p>
                    <p>Read More</p>
                </div>

            </div>
        </div>

    </section>
  )
}
