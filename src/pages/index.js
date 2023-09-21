import * as fs from 'fs';
import { Remarkable } from 'remarkable';
import html from 'remark-html';
import Container from "@/components/Container";
import './styles.css'


export async function getStaticProps() {

    const markdown = await fs.promises.readFile('content/home.md', 'utf-8');
    const md = new Remarkable();
  
    const html = md.render(markdown);

  // Extract H1 and first P 
    const titleMatch = html.match(/<h1>(.*?)<\/h1>/);
    const title = titleMatch ? titleMatch[1] : '';

    const paraMatch = html.match(/<p>(.*?)<\/p>/);
    const para = paraMatch ? paraMatch[1] : '';

    const subtitle = html.match(/<h2>(.*?)<\/h2>/);
    const sub = subtitle? subtitle[1] : '';

    return {
      props: { title, para, sub }
    };
}

export default function Home({ title, para, sub }) {
    return (
      <Container>
        <h1>{title}</h1>
      <p>{para}</p>
      <div className='text-banner'>
        <h2>{sub}</h2>
      </div>
      </Container>
    )
}