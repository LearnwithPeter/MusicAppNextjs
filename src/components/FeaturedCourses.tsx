"use client"
import React from 'react'
import Link from 'next/link'
import { Button } from './ui/moving-border'
import CourseData from "@/data/music_cources.json"
import { p } from 'motion/react-client'
import { BackgroundGradient } from './ui/background-gradient'

interface Course{
      id:number,
      title:string,
      slug: string,
      description: string,
      price:number,
      instructor: string,
      isFeatured: boolean,

}
function FeaturedCourses() {
  const featuredcourses=CourseData.courses.filter((course:Course)=>course.isFeatured)
  return (
    <div className='py-12 bg-gray-900'>
      <div className='text-center'>
        <h2 className='text-xl text-teal-600 font-semibold tracking-wide'>FEATURED COURSES </h2>
        <p className='text-5xl mt-4 font-extrabold  tracking-tight leading-8 sm:text-4xl '>Learn With The Best</p>
        </div>
      
      <div className='mt-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
          {featuredcourses.map((course:Course)=>(
           <div key={course.id} className="flex justify-center">
                <BackgroundGradient className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
                  <div className='p-4 sm:p-6 flex flex-col items-center text-center flexx-grow'>
                    <p className="text-lg
sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                      {course.description}
                      </p>
                    <Link href={`/courses/${course.slug}`} className='bg-white text-black mt-4 pl-3 pr-3 pt-2 pb-2 rounded-2xl ' > Learn More</Link>
                  </div>
                </BackgroundGradient>
           </div>

            ))}
        </div>
      </div>
     
      <div className='mt-20 text-center'>
        <Button>
        <Link href={"/courses"}>View All Coureses</Link>
        </Button>
      </div>
    </div>
  )
}

export default FeaturedCourses
