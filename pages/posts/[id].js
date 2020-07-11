import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import marksy from "marksy";
import Prism from "prismjs";
import { createElement } from "react";
import MarkdownText from "../../components/Markdown";
const compile = marksy({
  createElement,
  elements: {
    h1({ id, children }) {
      return <h1>{children}</h1>;
    },
    h2({ id, children }) {
      return <h2>{children}</h2>;
    },
    h3({ id, children }) {
      return <h3>{children}</h3>;
    },
    h4({ id, children }) {
      return <h4>{children}</h4>;
    },
    blockquote({ children }) {
      return <blockquote>{children}</blockquote>;
    },
    hr() {
      return <hr></hr>;
    },
    ol({ children }) {
      return <ol>{children}</ol>;
    },
    ul({ children }) {
      return <ul>{children}</ul>;
    },
    p({ children }) {
      return <p>{children}</p>;
    },
    table({ children }) {
      return <table>{children}</table>;
    },
    thead({ children }) {
      return <thead>{children}</thead>;
    },
    tbody({ children }) {
      return <tbody>{children}</tbody>;
    },
    tr({ children }) {
      return <tr>{children}</tr>;
    },
    th({ children }) {
      return <th>{children}</th>;
    },
    td({ children }) {
      return <td>{children}</td>;
    },
    a({ href, title, target, children }) {
      return <a>{children}</a>;
    },
    strong({ children }) {
      return <strong>{children}</strong>;
    },
    em({ children }) {
      return <em>{children}</em>;
    },
    br() {},
    del({ children }) {
      return <br>{children}</br>;
    },
    img({ src, alt }) {
      return <img>{children}</img>;
    },
  },

  highlight(language, code) {
    return Prism.highlight(code, Prism.languages.javascript, language);
  },
});

export default function Post({ postData }) {
  console.log(compile(postData.contentHtml).tree);

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className="single container">
        <header className="single-header no-thumbnail">
          <div className="flex">
            <h1>{postData.title}</h1>
            <div className="post-meta">
              <time className="date">{postData.date}</time>
            </div>
          </div>
        </header>
        <div
          className="post"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        >
          {/* {compile(postData.contentHtml).tree} */}
        </div>
        {/* <MarkdownText
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        ></MarkdownText> */}
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
