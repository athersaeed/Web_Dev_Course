// import { NextResponse } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// export function proxy(request) {
//     return NextResponse.json({ message: 'This is a proxied response' })
//     // return NextResponse.redirect(new URL('/home', request.url))
// }
 
// export const config = {
//   matcher: '/about/:path*',
// }

import { NextResponse } from 'next/server'
 
export function proxy(request) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/', request.url))
  }
 
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.rewrite(new URL('/', request.url))
  }
}

// diff between redirect and rewrite is that redirect changes 
// the URL in the browser, while rewrite keeps the original 
// URL in the browser but serves content from a different path.