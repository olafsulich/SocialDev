---
title: 'Nju'
date: '2020-01-01'
---

<script>alert('xss :D')</script>

![photo](https://www.frontlive.pl/static/aa66614154687f50a9298fa798cccb73/4d3f1/readme.png)

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a `page`.

# Alpha

## Table of Contents

```js codesandbox=react
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<h1>Hello remark-codesandbox!</h1>, document.getElementById('root'));
```

:dog:

- [one](#heading-1)

😀
😀

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering `method that **generates**` the HTML on **each request**.

Importantly, Next.js lets you **choose** which `pre-rendering` form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side `Rendering` for others.

| JavaScript             | TypeScript  | Css       | Html          | React      |
| ---------------------- | ----------- | --------- | ------------- | ---------- |
| ES6+                   | Type        | cascade   | tags          | Components |
| Classes                | Interface   | variables | semantic      | Hooks      |
| Higher Order Functions | Union types | scss      | accessibility | State      |
| Classes                | Interface   | variables | semantic      | Hooks      |
| Classes                | Interface   | variables | semantic      | Hooks      |
| Classes                | Interface   | variables | semantic      | Hooks      |

### My Great Heading {#custom-id}

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the

* `Code`
* [Link](#heading)
* **Bold**

1. First
2. Second

```jsx
const App = () => {
  const [state, setState] = useState();
  return (
    <div class="sada">
      <p>HAHHAHASSH</p>
    </div>
  );
};
```

```bash
npm run start
```

```js
let numbers = [1, 2, 3, [4, 5], 6, 7, [8, [9, 10]]];

numbers.flat(); // [1, 2, 3, 4, 5, 6, 7, 8, [9, 10]] - pierwszy poziom spłaszczenia

numbers.flat(2); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] - drugi poziom spłaszczenia
```

```html
<h2>To mój heading</h2>
```

```scss
.class {
  color: #f1f;
  &.border {
    font-size: 12px;
  }
}
```

```bash
npm install react-native --save
```

> Quote here **interesting shit** `lol`

---

### My Great Heading {#custom-id}

- lol
- lol

# heading 1

## heading 2

### heading 3

#### heading 4

##### heading 5
