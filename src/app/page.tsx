import Link from 'next/link'

import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div className="fixed right-10 top-10">
      <SignedIn>
        <UserButton />
      </SignedIn>

      <SignedOut>
        <Link href="/sign-in">Please Sign In To Continue</Link>
      </SignedOut>
    </div>
  )
}
