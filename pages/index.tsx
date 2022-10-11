import Link from 'next/link'

export default function IndexPage() {
  return (
    <div>
      <div>
        Hello World.{' '}
        <Link href="/about/about">
          <a>About</a>
        </Link>
      </div>
      <div>
        <Link href="/day/index">
          <a>Day</a>
        </Link>
      </div>
    </div>
  )
}
