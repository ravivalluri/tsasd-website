import Image from 'next/image';
import logo from '../../public/TSASD_Logo_Badge_RGB.png';
import rectangleTop from '../../public/Rectangle_01.png';
import rectangleBottom from '../../public/Rectangle_02.png';
import groupTablet from '../../public/Group-tablet.svg';
import groupDesktop from '../../public/Group.png';
import headerImage from '../../public/Header-image.png';
import './styles.css';
import { useWindowDimensions } from '@/hooks/useWindowDimensions';

export default function Navbar() {
  const { width } = useWindowDimensions();
  console.log({ width });
  const BottomHeader = () => {
    return (
    <>
      <div className="image-container image-rectangle-1">
      <Image
        src={rectangleTop}
        alt="TSASD Header Rectangle 01"
        priority={true}
        layout="responsive"
        width={1440}
        height={300} />
      <div className="logo-container">
        <Image
          src={logo}
          alt="TSASD Logo"
          priority={true}
          layout="fixed"
          width={150}
          height={150} />
      </div>
    </div><div className="image-container image-rectangle-2">
        <Image
          src={rectangleBottom}
          alt="TSASD Header Rectangle 02"
          priority={true}
          layout="responsive"
          width={1440}
          height={300} />
      </div>
    </>);
  };
  const HeaderImage = ({ width }) => {
    if(width < 640) {
    return (
      <div className='image-container-mobile'>
      <Image src={headerImage}
      alt="TSASD Header Image Mobile"
      priority={true}
      layout="responsive"
      />
      </div>
    )
  } 
  if (width < 1024 && width > 640) {
      return (
        <>
        <div className="image-container image-group">
          <Image
            src={groupTablet}
            alt="TSASD Header Group"
            priority={true}
            layout="responsive"
            width={1440}
            height={300} />
        </div>
        <BottomHeader />
        </>
      );
  } 
  return (
      <>
      <div className="image-container image-group">
        <Image
          src={groupDesktop}
          alt="TSASD Header Group"
          priority={true}
          layout="responsive"
          width={1440}
          height={300}
        />
      </div>
      <BottomHeader />
      </>
  );
};

return (
    <header className='header-image'>
    </header>
  );

}
