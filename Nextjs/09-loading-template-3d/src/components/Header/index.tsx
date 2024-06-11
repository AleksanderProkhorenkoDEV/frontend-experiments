import Link from "next/link"

const Header = ( ) => {
        
    return (
        <header className="flex gap-4 items-center justify-center h-16 border-solid border-b border-b-[#ffffff] w-10/12">
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/contact'}>Contact</Link>
        </header>
    )
}

export default Header