import Layout from '../../components/layout';
import Head from 'next/head';
import Navigation from '../../components/navigation/Navigation';
import { useEffect } from 'react';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml.js';
import xss from 'xss';

export default function Post({ post }) {
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Navigation />
      <article className="single container">
        <header className="single-header no-thumbnail">
          <div className="flex">
            <h1>{post.title}</h1>
          </div>
        </header>
        <div className="post" dangerouslySetInnerHTML={{ __html: post.content }} />
        {/* <Markdown source={postData.stringMark} /> */}
      </article>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);

  const sanitizedHtml = xss.filterXSS(post.content, {
    onIgnoreTagAttr(tag, name, value, _isWhiteAttr) {
      if (tag !== 'code' && tag !== 'pre' && tag !== 'iframe') {
        return;
      }
      if (name !== 'class') {
        return;
      }

      return `${name}="${xss.escapeAttrValue(value)}"`;
    },
  });

  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
}

// export async function getStaticPaths() {
//   const paths = getAllPostIds();
//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const postData = await getPostData(params.id);
//   const mdx = await markdownToHtml(postData.stringMark);
//   return {
//     props: {
//       postData,
//       mdx,
//     },
//   };
// }
