import Link from 'next/link'

export default function Home() {
  return (
    <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <Link href="/sign-in">Sign In</Link>
    </div>
  )
}
