import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'

type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, My name is Paul",
            "Guy-who-loves-Coffee.tsx",
        ],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-centr overflow-hidden'>
            <BackgroundCircles />
            <img
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src="https://scontent.ftsr1-1.fna.fbcdn.net/v/t1.6435-9/126831522_2838479923097149_4326626698204363095_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=be3454&_nc_ohc=9d2fBPOyKQQAX8CgNqv&_nc_ht=scontent.ftsr1-1.fna&cb_e2o_trans=q&oh=00_AfD9lzR36Mzhw6QNIBmpGqdBp2STJaCcSe3jqaamO3sj9w&oe=656684C3"
                alt=""
            />

            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Web developer</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1>

                <div className='pt-5'>
                    <Link href="#about">
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href="#experience">
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}