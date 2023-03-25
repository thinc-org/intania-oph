import "@/styles/tailwind.css"
import "@/styles/fonts.css"
import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="font-display">
      <Component {...pageProps} />
    </div>
  )
}
export default MyApp
