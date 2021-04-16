import Layout from '../../components/layout'
import { getAllEpisodeIds, getEpisodeData } from '../../lib/episodes'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Episode({ episodeData }) {
  return (
    <Layout>
      <Head>
        <title>{episodeData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{episodeData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={episodeData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: episodeData.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllEpisodeIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const episodeData = await getEpisodeData(params.id)
  return {
    props: {
        episodeData
    }
  }
}
