import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeftIcon, MailIcon, ShoppingBagIcon, MusicNoteIcon } from '@heroicons/react/solid';
import React from 'react';
import Hoops from '../images/Hoops.gif';

function Navbar() {
  return (
    <nav className="w-full h-14 overflow-y-hidden my-5">
                <div className="justify-between flex items-center">
                <div>
                    <Link href="/">
                    <div className="text-white flex flex-col items-center hover:text-green-300 cursor-pointer">
                        <ArrowLeftIcon className="h-8 w-8" />
                        <div>
                        <span>Return Home</span>
                        </div>
                    </div>
                    </Link>
                </div>
                <ul className="flex space-x-4 text-white text-2xl items-center">
                    <li>
                        <div className="nav-text">
                        <Link href="/music">
                            <a className="hover:text-green-300">
                            Music
                            </a>
                        </Link>
                        </div>
                        <div className="m-icon">
                        <Link href="/music">
                            <a className="hover:text-green-300">
                            <MusicNoteIcon className="w-8 h-8" />
                            </a>
                        </Link>
                        </div>
                    </li>
                    <li>
                        <div className="nav-text">
                        <Link href="/contact">
                            <a className="hover:text-green-300">
                            Contact
                            </a>
                        </Link>
                        </div>
                        <div className="m-icon">
                        <Link href="/contact">
                            <a className="hover:text-green-300">
                            <MailIcon className="w-8 h-8" />
                            </a>
                        </Link>
                        </div>
                    </li>
                    <li className="hover:text-green-300">
                        <div className="nav-text">
                        <Link href="/shop">
                            <a className="hover:text-green-300">
                            Shop  
                            </a>
                        </Link>
                        </div>
                        <div className="m-icon">
                        <Link href="/shop">
                            <a className="hover:text-green-300">
                            <ShoppingBagIcon className="w-8 h-8" />
                            </a>
                        </Link>
                        </div>
                    </li>
                </ul>
                <div>
                    <Image draggable="false" src={Hoops} width={40} height={40} alt="" />
                </div>
                </div>
            </nav>
  )
}

export default Navbar