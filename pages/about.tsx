import Link from 'next/link';

export default function AboutPage() {
  return (
    <div>
      <p>About us</p>
      <p>Hello Puta!!</p>
      <p>chupala Santa</p>
      <img src="../images/Santa.jpg" alt="Santa Claus"/>
      <div>
        <Link href="./Greet/greet">
          <a>Greet</a>
        </Link>
      </div>
    </div>
  )
}
