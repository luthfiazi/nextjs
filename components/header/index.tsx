import React from 'react'
import Link from 'next/link'

export default function Header() {
    return (
        <div>
            <header>
                <ul>
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/blog"><a>Blog</a></Link></li>
                    <li><Link href="/users"><a>Portfolio</a></Link></li>
                </ul>
        </header>
        </div>
    )
}
