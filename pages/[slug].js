import Home from '../components/Home'

// The Storyblok Client
import Storyblok from "../lib/storyblok"

export default function HomePage(props) {
  return <Home {...props} />
}

export async function getServerSideProps(context) {
  // the slug of the story
  // the storyblok params
  let params = {
    version: "draft", // or 'published'
  }
  const { slug } = context.params
  // checks if Next.js is in preview mode
  if (context.preview) {
    // loads the draft version
    params.version = "draft"
    // appends the cache version to get the latest content
    params.cv = Date.now()
  }

  // loads the story from the Storyblok API
  let { data } = await Storyblok.get(`cdn/stories/${slug}`, params)

  // return the story from Storyblok and whether preview mode is active
  return {
    props: {
      story: data ? data.story : false,
      preview: context.preview || false
    },
  }
}
