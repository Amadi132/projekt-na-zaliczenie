import 'focus-visible'
import '@/styles/tailwind.css'

export default function App({ Component, pageProps }) {
  return <div className="bg-black">
    <Component {...pageProps} />
  </div>
}
