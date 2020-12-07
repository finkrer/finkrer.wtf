import Layout from 'layout/Layout'
import { StoryblokCDA as Storyblok } from 'lib/storyblok'
import { GetServerSideProps } from 'next'
import { isAuthorized } from 'lib/auth'
import FlexContainer from 'layout/FlexContainer'

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const authorized = isAuthorized(req)
  const res = await Storyblok.getStories()

  if (!authorized) return { props: {} }

  const posts = res.data.stories

  return {
    props: { posts },
  }
}

const Log = ({ posts }: any) => {
  if (!posts)
    return (
      <Layout title="ACCESS DENIED &bull; finkrer.wtf" description="Get out!">
        <FlexContainer className="items-center">
          <p className="mt-16 text-4xl font-bold tracking-wide text-red-600 uppercase transition-colors duration-200 dark:text-red-400">
            By the order of the Jarl, stop right there!
          </p>
          <p className="text-lg">
            You do not have permission to access this page. This incident will
            be reported.
          </p>
        </FlexContainer>
      </Layout>
    )

  return (
    <Layout title="Log &bull; finkrer.wtf" description="My personal blog">
      {posts.map((p: any) => (
        <div>{p.content.body}</div>
      ))}
    </Layout>
  )
}

export default Log
