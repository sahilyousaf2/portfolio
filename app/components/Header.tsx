'use client'
import React from 'react'
import Link from 'next/link'
// import Button from './Button'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from './theme.btn'


const Header = () => {
  const route = useRouter()
  return (
    <>
      <header className='header'>
        <nav className="header-nav">
          <div className="nav-main">
            <div className="logo">
              <Link href={"/"}><h1 className='nav-logo'>Sahil Yousaf</h1></Link>
            </div>
            {/* list */}
            <div className="nav-list">
              <ul className='nav-list-ul'>
                <li className='nav-list-li'><Link href={"/"}>Home</Link></li>
                <li className='nav-list-li'><Link href={"/project"}>Project</Link></li>
                <li className='nav-list-li'><Link href={"/about"}>About</Link></li>
              </ul>
            </div>
            <div className='nav-btn'>
              <Button onClick={() => {
                route.push("/contact")
              }} className='nav-contact-btn' size={"sm"} variant="outline">Contact</Button>
              <ModeToggle />
              <div>
                <div className='md:hidden mr-12'>
                  <Sheet>
                    <SheetTrigger>
                      <svg className='w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7'></path>
                      </svg>

                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle className='nav-title'>Sahil Yousaf</SheetTitle>
                        <SheetDescription>
                          <div className="nav-list-ul-div">
                            <ul className='flex flex-col gap-5 items-center'>
                              <li className='nav-list-li'><Link href={"/"}>Home</Link></li>
                              <li className='nav-list-li'><Link href={"/project"}>Project</Link></li>
                              <li className='nav-list-li'><Link href={"/about"}>About</Link></li>
                            </ul>
                          </div>
                        </SheetDescription>
                      </SheetHeader>
                    </SheetContent>
                  </Sheet>

                </div>
              </div>
            </div>
          </div>

        </nav>
      </header>
    </>
  )
}

export default Header





