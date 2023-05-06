import { UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div className="fixed right-10 top-10">
      <UserButton />
    </div>
  )
}
