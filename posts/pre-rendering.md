---
title: "Two Forms of Pre-rendering"
date: "2020-01-01"
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.

```tsx
export default class MarkdownText extends React.Component<MarkdownTextProps> {
  markdownRef = React.createRef<HTMLDivElement>();

  highlight() {
    if (!this.markdownRef.current) {
      return;
    }
    if (typeof window === "undefined") {
      return;
    }

    highlightSyntax(this.markdownRef.current);
  }

  render() {
    return (
      <div
        className="post"
        ref={this.markdownRef}
        dangerouslySetInnerHTML={{
          __html: this.getHtmlFromMarkdown(this.props.value),
        }}
      />
    );
  }
}
```

```terminal
const myApp: Array<any> = () => {
  let lol = [];
};
```

> Quote here.
> <cite>Benjamin Franklin</cite>

> My new quote

- lol
- lol
