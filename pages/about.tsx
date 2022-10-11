import Link from 'next/link';

export default function AboutPage() {
  return (
    <div>
      <p>About us</p>
      <p>Hello Puta!!</p>
      <p>chupala Santa</p>
      <img src="https://scontent.fntr4-1.fna.fbcdn.net/v/t1.6435-9/33713222_1682413791808224_5067021189675745280_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=xyAsvmYdHp4AX8lG1Zz&_nc_ht=scontent.fntr4-1.fna&oh=00_AT8vfhhN_T_bcAZgemZxdsMWONj2TvuK0ril92b8ecDjkA&oe=636A1C79" alt="Santa Claus"/>
      <div>
        <Link href="./Greet/greet">
          <a>Greet</a>
        </Link>
      </div>
    </div>
  )
}
