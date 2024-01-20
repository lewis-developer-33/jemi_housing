'use client'
import Image from 'next/image'
import {MapPin,Heart} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'


export const Card = () => {
    const [saved,setSaved] = useState(false)
  return (
    <div className='w-[390px] flex flex-col items-center shadow-md rounded-sm p-1'>
        <div className='relative w-[400px] h-[300px]'>
            <Image
            src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='home'
            fill={true}
            />
            <div className='absolute top-0 bottom-0 left-0 right-0 bg-slate-900/40'></div>
            <Heart 
            onClick={() => {setSaved(prev => !prev)} }
            className={`absolute cursor-pointer top-2 right-4 ${saved ? 'text-red-900' : 'text-white'}`}/>
        </div>
        <div className='grid gap-1'>
            <div>
                <h2 className='font-semibold text-lg'>Two Bedroom Master Ensuite</h2>
                <p>Kshs 28,000</p>
            </div>
            <div className='justify-end flex items-center gap-1'>
                <MapPin/>
                <p>Ongata</p>
            </div>
        </div>

    </div>
  )
}

const data = [
    {
        cover:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price:8000,
        name:'1',
        description:'',
        images:[
            'https://plus.unsplash.com/premium_photo-1680300960892-bd11b59b469b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1557868969-df9517e8df10?q=80&w=1585&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            
        ]
    }
]

export const CardList = () => {
    return (
        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2'>

        </div>
    )
}

