import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostData() {
  // Get file name under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostData = fileNames.map((fileName) => {
    // Remove ".md" from file name for id with replace regex
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullpath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullpath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    };
  })
  // Sort posts by date
  return allPostData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

// ---- example Fetch External API or Query Database
//
// -- External Fetch
/* export async function getSortedPostData(){
  // Instead the file system,
  // fetch post data from an external API endpoint
  const res = await fetch('..')
  return res.json()
} */
// -- Query Database Directly
/* import someDatabaseSDK from 'someDatabaseSDK'

const databaseClient = someDatabaseSDK.createClient(...)

export async function getSortedPostData() {
  // Instead the file system or endpoint,
  //  fetch post data from database directly
  return databaseClient.query('SELECT post.. or Graphql')
} */
