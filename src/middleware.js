import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const dummyUser = {
        role: 'admin',
        email: 'test@gmail.com'
    }

    let isServicesPage = request.nextUrl.pathname.startsWith('/services')
    let isAdmin = dummyUser.role == 'admin'

    if(isServicesPage && !isAdmin) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
  return NextResponse.next()
}
 
