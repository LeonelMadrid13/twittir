import Link from 'next/link';

export default function AboutPage() {
  return (
    <div>
      <p>About us</p>
      <p>Hello Puta!!</p>
      <p>Alex chupala</p>
      <div>
        <Link href="./Greet/greet">
          <a>Greet</a>
        </Link>
      </div>
    </div>
  )
}
