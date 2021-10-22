import Layout from '../components/Layout'
import Page from '../components/Page'

// The Storyblok Client
import Storyblok from "../lib/storyblok"
import useStoryblok from "../lib/storyblok-hook"

export default function Home(props) {
  // the Storyblok hook to enable live updates
  const story = useStoryblok(props.story)

  return (
    <Layout>
      <Page content={story.content} />
    </Layout>
  )
}