import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Navigation from '../../components/Navigation/Navigation';
import Markdown from '../../components/markdown/Markdown';

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Navigation />
      <article className="single container">
        <header className="single-header no-thumbnail">
          <div className="flex">
            <h1>{postData.title}</h1>
            <div className="post-meta">
              <time className="date">{postData.date}</time>
            </div>
          </div>
        </header>
        <Markdown source={postData.stringMark} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
