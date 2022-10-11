import Link from 'next/link'

export default function IndexPage() {
  return (
    <div>
      <div>
        Hello World.{' '}
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
      <div>
        <Link href="/day/index.tsx">
          <a>Day</a>
        </Link>
      </div>
    </div>
  )
}
