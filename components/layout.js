import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";
import Navigation from "./Navigation/Navigation";

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <main id="main-content">{children}</main>
    </div>
  );
}
