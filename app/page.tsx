import Image from 'next/image'
import Link from 'next/link'
import Header from './Components/Header/header'
import Card from './Components/Card/card'
import Button from './Components/Buttons/Button'
import Category from './Components/Catagory/Category'
import Search from './Components/Search/Search'
import Hero from './Components/Hero/Hero'
import Social from './Components/Social/Social'
import Footer  from './Components/Footer/footer'
export default function Home() {
  return (
    <>
        <Header />

        <h1 className="cat">Tech Insights</h1>

        <Search />
        
        <h1 className="cat">Featured Articles</h1>

        <Hero />

        <Card 
          title='CyberSecurity in the age of AI '
          desc='Learn about new challenges and solutions in cybersecurity with the rise of artificial intelligence.'
          img='/img1.png'
        />

        <div className="my-10"></div>

         <Card 
          title='The impact of 5G on Industries'
          desc='Discover how 5G Technology is revolutionizing various industries, from healthcare to manufacturing.'
          img='/img2.png'
        />

        <div className="my-10"></div>

        <Card 
          title='Remote Work Best Practices.'
          desc='Tips and Strategies for maximizing productivity and maintaining  work-life balance while working remotely.'
          img='/img3.png'
        />
        
        <h1 className="cat">Category</h1>

        <div className='flex'>
        <Button text='Cloud Computing' />
        <Button text='CyberSecurity' />
        <Button text='5G Technology' />
        <Button text='Remote Work' />
        <Button text='AI' />
        </div>
        
        <h1 className="cat">Stay Connected</h1>

        <Social />

        <Footer />
    </>

  )
}
