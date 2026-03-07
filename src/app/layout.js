import './globals.css'
import Loader from './components/Loader'
import { LoaderProvider } from './context/LoaderContext'

export const metadata = {
  title: 'Ahmad Khalid — Developer & Designer',
  description: 'Full-stack developer and UI/UX designer building profitable web solutions using the MERN stack.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <LoaderProvider>
          <Loader />
          {children}
        </LoaderProvider>
      </body>
    </html>
  )
}