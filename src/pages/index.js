import * as fs from 'fs';
import Image from 'next/image';
import { Remarkable } from 'remarkable';
import Container from "@/components/Container";
import './styles.css'


export async function getStaticProps() {

    const markdown = await fs.promises.readFile('content/home.md', 'utf-8');
    const md = new Remarkable();
  
    const html = md.render(markdown);

  // Extract H1 and first P 
    const titleMatch = html.match(/<h1>(.*?)<\/h1>/);
    const title = titleMatch ? titleMatch[1] : '';

    const paraMatches = html.matchAll(/<p>(.*?)<\/p>/g);

    console.log({ paraMatches});

    const paras = [];

    for (const match of paraMatches) {
      paras.push(match[1]); 
    }

    const h2 = html.match(/<h2>(.*?)<\/h2>/);
    const sub1 = h2? h2[1] : '';

    const h3 = html.match(/<h3>(.*?)<\/h3>/);
    const sub2 = h3? h3[1] : '';

    return {
      props: { title, paras, sub1, sub2 }
    };
}

export default function Home({ title, paras, sub1, sub2 }) {
  console.log({ paras });
    return (
      <Container>
        <h1 className='first-H1'>{title}</h1>
        <p className='first-para'>{paras[0]}</p>
        <div className='text-banner flex items-center justify-center text-center'>
          <p>{paras[1]}</p>
        </div>
        <h2 className='first-H2'>{sub1}</h2>
        <h3 className='first-H3'>{sub2}</h3>
        <div className='image-container'>
        </div>
        <div className='address'>
        <p>{paras[2]}</p>
        <div className='address-container'>
        <p>{paras[3]}</p>
        <p>{paras[4]}</p>
        <p>{paras[5]}</p>
        </div>
        <p>{paras[6]}</p>
        </div>
        <div className='button-container'>
        <form action="https://tsasd.perfectgolfevent.com" method="get" target="_blank">
        <button className='register-button'>Register Today</button>
        </form>
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
        <p className='text-3xl mx-auto'>{paras[15]}</p>
        <p className='text-3xl mx-auto'>{paras[16]}</p>
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