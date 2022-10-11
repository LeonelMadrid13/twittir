import Link from 'next/link';
import "./about.css";

export default function AboutPage() {
  return (
    <div className="father">
      <p>About us</p>
      <p>Hello Puta!!</p>
      <p>chupala Santa</p>
      <div>
        <Link href="./Greet/greet">
          <a>Greet</a>
        </Link>
      </div>
    </div>
  )
}
