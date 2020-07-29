import "../shared/styles/main.scss";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn:
    "https://bde5d04385fb49f9ab0e48a5ed58da89@o421991.ingest.sentry.io/5342596",
});

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
