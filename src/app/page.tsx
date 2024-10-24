import { Link } from "@/components/link/link";
import "./page.scss";

export default function Page() {
  return (
    <div className="main-menu">
      <h1 className="main-menu__title">Marketopia Adventures</h1>
      <div className="main-menu__options">
        <Link href="/disclaimer" size="large">
          Start Adventure
        </Link>
        <Link appearance="secondary" href="/resources">
          Resources
        </Link>
        <Link appearance="secondary" href="/credits">
          Credits
        </Link>
      </div>
    </div>
  );
}
