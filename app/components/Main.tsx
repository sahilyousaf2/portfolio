'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const Main = () => {
    const route = useRouter()
    return (
        <>
            <main className="main">
                <div className="main-div">
                    {/* text div */}
                    <div className='main-text-div'>
                        {/* heading */}
                        <div className="main-heading  ">
                            <h1>Hello I am <span className='main-heading-span'>Sahil Yousaf <br /></span> Frontend Developer.
                            </h1>
                        </div>
                        <div className="main-para">
                            <p>I m Frontend Developer | ❇️ 1+ year of Tech Experience | ✨ Building products with HTML, CSS, Typescript and CLI Application | 🌱 Contributing open-source | 🤖 Learning Cloud Native Applied Generative AI | Im students on-site at GIAIC.</p>
                        </div>
                        <div className="main-btn" >
                            <Button className='hover:scale-110 duration-300 hover:text-[#01AECD]' onClick={() => { route.push("/contact") }} variant={'outline'}>Contact</Button>
                        </div>
                    </div>
                    {/* image div */}
                    <div className='main-img-div'>
                        <Image className='main-img ' src={"/men.jpg"} height={100} width={300} alt='men'></Image>
                    </div>
                </div>

            </main>
        </>
    )
}

export default Main
