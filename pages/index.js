import Layout, { siteTitle } from '../components/layout';
import { getAllPosts } from '../lib/api';
import Link from 'next/link';
import Navigation from '../components/Navigation/Navigation';

export default function Home({ allPosts }) {
  return (
    <Layout>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPosts.map(({ slug, date, title }) => (
            <li key={slug}>
              <Link href="/posts/[slug]" as={`/posts/${slug}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small></small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt']);

  return {
    props: { allPosts },
  };
};

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }
