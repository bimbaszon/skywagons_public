// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps}) {
  return <Component { ... pageProps} />
}

