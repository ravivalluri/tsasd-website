import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export function markdownToHtml(markdown) {
  // Use gray-matter to parse Markdown metadata
  const { content, data } = matter(markdown)

  // Use remark to convert Markdown into HTML string
  const processedContent = remark()
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString()

  return {
    contentHtml,
    data
  }
}