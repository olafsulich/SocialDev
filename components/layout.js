import Head from "next/head";
import Navigation from "./Navigation/Navigation";

function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <main id="main-content">{children}</main>
    </div>
  );
}

export default Layout;
