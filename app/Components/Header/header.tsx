import Link from "next/link"

export default function Header(){
    return(
    <header>
      <nav>
        <div className='logo'>
          <a href="#">
            <img src="image.png" alt="page logo" className="logo" />
          </a>
        {/* <h1 className="font-josefin text-3xl">Code Expert</h1> */}
        </div>
        <ul>
          <li><Link href="#" className="text-white hover:text-[rgba(15,255,83,0.45)] hover:underline duration-300 ease-in">About Us</Link></li>
          <li><Link href="#" className="text-white hover:text-[rgba(15,255,83,0.45)] hover:underline duration-300 ease-in">Contact Us</Link></li>
          <li><Link href="#" className="text-white hover:text-[rgba(15,255,83,0.45)] hover:underline duration-300 ease-in">Home</Link></li>
          <li><Link href="#" className="text-white hover:text-[rgba(15,255,83,0.45)] hover:underline duration-300 ease-in">Join Team</Link></li>
          <li><Link href="#" className="text-white hover:text-[rgba(15,255,83,0.45)] hover:underline duration-300 ease-in">Services</Link></li>
          <li><Link href="#" className="text-white hover:text-[rgba(15,255,83,0.45)] hover:underline duration-300 ease-in">Solutions</Link></li>
          <li><Link href="#" className="text-[rgba(15,255,83,0.45)] hover:underline duration-300 ease-in">Resource</Link></li>    
        </ul>
      </nav>
      <hr className="size-16"></hr>
    </header>
    )
}