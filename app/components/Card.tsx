import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { CardProps } from '../types/type'
import Link from 'next/link'


const Card = (props:CardProps) => {
    return (
        <>
            <main>
                <div className='card-div'>
                    {/* image */}
                    <div>
                        <Image src={props.imageSrc} alt='Photo' width={400} height={0}  className='card-img'></Image>
                    </div>
                    {/* text */}
                    <div className='card-text'>
                        <h1 className='card-heading'>{props.heading}</h1>
                        <p className= 'card-discription '>{props.discription}</p>
                    </div>
                    {/* btn */}
                    <div className='card-btn '>
                    <Button variant={'outline'}>
                        <Link href={props.linkURL} target='blank'>{props.btnText}</Link>
                        </Button>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Card
