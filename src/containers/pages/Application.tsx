import { h } from "preact";
import { useEffect } from "preact/hooks";
import { ServerSidebar, ServersSidebar } from "../../components/Application";

import styles from "./styles/Application.module.scss";

export function Application() {
  useEffect(() => {
    console.log(localStorage.getItem('token'))
  }, [])
  return (
    <div class={styles.container}>
      <div class={styles.navbar}>
        <div class={styles.servers_navbar}></div>
        <div class={styles.application_navbar}></div>
        <div class={styles.members_navbar}></div>
      </div>
      <div class={styles.servers_sidebar}><ServersSidebar /></div>
      <div class={styles.server_sidebar}><ServerSidebar /></div>
      <div class={styles.application}></div>
      <div class={styles.members_sidebar}></div>
    </div>
  );
}