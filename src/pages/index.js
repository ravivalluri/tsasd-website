import fs from "fs"
import { markdownToHtml } from "@/lib/markdownToHtml"
import Container from "@/components/Container"

export async function getStaticProps() {

    const markdown = fs.readFileSync('content/home.md', 'utf-8')
  
    const { contentHtml } = markdownToHtml(markdown)
  
    return {
      props: {
        content: {
          __html: contentHtml
        }
      }
    }
  
}

  export default function Home({ content }) {

    return (
    <Container>
      <main>
      <h1 
        className="text-3xl font-bold"
        dangerouslySetInnerHTML={{__html: content.title}} 
      />

      <p
        className="mt-4 text-base"
        dangerouslySetInnerHTML={{__html: content.body}}  
      />
      </main>
      </Container>
    )
  
  }