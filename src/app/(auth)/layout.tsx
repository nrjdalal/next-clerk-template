import { ClerkProvider } from '@clerk/nextjs/app-beta'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ClerkProvider>Hello{children}</ClerkProvider>
}
