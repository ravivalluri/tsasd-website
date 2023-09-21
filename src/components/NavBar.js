import Image from 'next/image'
import logo from '../../public/TSASD_Logo_Badge_RGB.png'
import rectangleTop from '../../public/Rectangle_01.png'
import rectangleBottom from '../../public/Rectangle_02.png'
import group from '../../public/Group.png'
import './styles.css';

export default function Navbar() {

  return (
    <header>
      <Image 
        src={group}
        alt="TSASD Header Group"
        sizes="(max-width: 640px) 100vw, 50vw"
        priority={true}
      />
     <Image 
        src={rectangleTop}
        alt="TSASD Header Rectangle"
        sizes="(max-width: 640px) 100vw, 50vw"
        priority={true}
      />
      <Image 
        src={logo}
        alt="TSASD Logo"
        sizes="(max-width: 640px) 100vw, 50vw"
        priority={true}
      />
      <Image 
        src={rectangleBottom}
        alt="TSASD Header Rectangle"
        sizes="(max-width: 640px) 100vw, 50vw"
        priority={true}
      />
    </header>
  )
}