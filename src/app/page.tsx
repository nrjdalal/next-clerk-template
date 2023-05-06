import { SignedIn, UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <SignedIn>
      <div className="fixed right-10 top-10">
        <UserButton />
      </div>
    </SignedIn>
  )
}
