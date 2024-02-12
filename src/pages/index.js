import * as fs from 'fs';
import Image from 'next/image';
import { Remarkable } from 'remarkable';
import Container from "@/components/Container";
import Head from 'next/head';
import './styles.css'


export async function getStaticProps() {

    const markdown = await fs.promises.readFile('content/home.md', 'utf-8');
    const md = new Remarkable();
  
    const html = md.render(markdown);

  // Extract H1 and first P 
    const titleMatch = html.match(/<h1>(.*?)<\/h1>/);
    const title = titleMatch ? titleMatch[1] : '';

    const paraMatches = html.matchAll(/<p>(.*?)<\/p>/g);

    const paras = [];

    for (const match of paraMatches) {
      paras.push(match[1]); 
    }

    const h2 = html.match(/<h2>(.*?)<\/h2>/);
    const sub1 = h2? h2[1] : '';

    const h3 = html.match(/<h3>(.*?)<\/h3>/);
    const sub2 = h3? h3[1] : '';
    const h4 = html.match(/<h4>(.*?)<\/h4>/);
    const sub3 = h4? h4[1] : '';

    return {
      props: { title, paras, sub1, sub2, sub3 }
    };
}

const downloadPDF = () => {
  var downloadLink = document.createElement("a");
  downloadLink.href = "/TSASD 2024 Scholarship Application Form.pdf";
  downloadLink.download = "TSASD_2024_Scholarship_Application_Form.pdf";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

export default function Home({ title, paras, sub1, sub2, sub3 }) {
    return (
      <Container>
          <Head> <title>The Samoa Association San Diego</title>
          <meta property="og:title" content="The Samoa Association San Diego" key="title" />
          <meta
  name="description"
  content="We are a Non Profit 501(c)(3) charity organization based in San Diego, California"
/>
    <link rel="apple-touch-icon" sizes="57x57" href="/TSASD_Logo_Badge_RGB.png" />
    <link rel="apple-touch-icon" sizes="60x60" href="/TSASD_Logo_Badge_RGB.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/TSASD_Logo_Badge_RGB.png" />
    <link rel="apple-touch-icon" sizes="76x76" href="/TSASD_Logo_Badge_RGB.png" />

    <link rel="apple-touch-icon" sizes="114x114" href="/TSASD_Logo_Badge_RGB@2x.png" />
    <link rel="apple-touch-icon" sizes="120x120" href="/TSASD_Logo_Badge_RGB@2x.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/TSASD_Logo_Badge_RGB@2x.png" />
    <link rel="apple-touch-icon" sizes="152x152" href="/TSASD_Logo_Badge_RGB@2x.png" />
    <link rel="apple-touch-icon" sizes="167x167" href="/TSASD_Logo_Badge_RGB@2x.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/TSASD_Logo_Badge_RGB@2x.png" />

    <link rel="icon" type="image/png" sizes="16x16" href="/TSASD_Logo_Badge_RGB.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/TSASD_Logo_Badge_RGB.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="/TSASD_Logo_Badge_RGB.png" />
    <link rel="icon" type="image/png" sizes="128x128" href="/TSASD_Logo_Badge_RGB.png" />
    <link rel="icon" type="image/png" sizes="196x196" href="/TSASD_Logo_Badge_RGB.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/TSASD_Logo_Badge_RGB" />
    <link rel="icon" type="image/png" sizes="512x512" href="/TSASD_Logo_Badge_RGB@2x.png" />

    <link rel="shortcut icon" href="/TSASD_Logo_Badge_RGB.png" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="mobile-web-app-capable" content="yes" />

    <meta name="msapplication-TileImage" content="/TSASD_Logo_Badge_RGB.png"/>
    <meta name="msapplication-square70x70logo" content="/TSASD_Logo_Badge_RGB.png"/>
    <meta name="msapplication-square150x150logo" content="/TSASD_Logo_Badge_RGB.png"/>
    <meta name="msapplication-square144x144logo" content="/TSASD_Logo_Badge_RGB.png"/>
    <meta name="msapplication-square310x310logo" content="/TSASD_Logo_Badge_RGB@2x.png"/>
   </Head>
        <h1 className='first-H1'>{title}</h1>
        <p className='first-para'>{paras[0]}</p>
        <div className='text-banner flex items-center justify-center text-center'>
          <p>{paras[1]}</p>
        </div>
        <h2 className='first-H2'>{sub1}</h2>
        <h3 className='first-H3'>{sub2}</h3>
        <div className='image-container-1'>
        </div>
        <h3 className='second-H3'>{sub3}</h3>
        <div className='image-container-2'>
        </div>
        <div className='address'>
        <p>{paras[2]}</p>
        {/* <div className='address-container'>
        <p>{paras[3]}</p>
        <p>{paras[4]}</p>
        <p>{paras[5]}</p>
        </div> */}
        {/* <p>{paras[6]}</p> */}
        </div>
        <div className='button-container'>
        <button className='register-button' onClick={downloadPDF}>Register Today</button>
        </div>
        <div className="row-container">
        <div className="payment-container bg-cover h-full flex items-center justify-center text-center">
        <p className='text-3xl mx-auto'>{paras[10]}</p>
        <p className='text-3xl mx-auto'>{paras[11]}</p>
        <p className='text-3xl mx-auto'>{paras[12]}</p>
        </div>
        <div className='contact-container bg-cover h-full flex items-center justify-center text-center'>
        <p className='text-3xl mx-auto'>{paras[13]}</p>
        <p className='text-3xl mx-auto'>{paras[14]}</p>
        <p className='text-3xl mx-auto'><a href="tel: +1(702)506-3603">{paras[15]}</a></p>
        <p className='text-3xl mx-auto'><a href = "mailto: info@TSASD.org">{paras[16]}</a></p>
        </div>
        </div>
        <div className='address-container address-container-2'>
        <p>{paras[7]}</p>
        <p>{paras[8]}</p>
        <p>{paras[9]}</p>
        </div>
      </Container>
    )
}