import { routes } from "@/content/company";
import { Button } from "@/components/Button";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main id="main" className={styles.wrap}>
      <div className={styles.inner}>
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>We couldn&apos;t find that page</h1>
        <p className={styles.lead}>
          It may have moved. Try the <a href={routes.home} className="ul">homepage</a> or our{" "}
          <a href={routes.liability} className="ul">professional liability solutions</a>.
        </p>
        <Button href={routes.contact} variant="light">Contact us</Button>
      </div>
    </main>
  );
}
