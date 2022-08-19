import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <div className="text-dark-blue-100 font-light p-14 flex justify-end space-x-10">
            <Link href="/">
                Home
            </Link>
            <Link href="/projects">
                Projects
            </Link>
            <Link href="/">
                Contact
            </Link>
            <Link href="/about">
                About
            </Link>
        </div>
    )
}
