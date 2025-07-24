// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";

// const isProtectedRoute = createRouteMatcher([
//   "/dashboard(.*)",
//   "/resume(.*)",
//   "/interview(.*)",
//   "/ai-cover-letter(.*)",
//   "/onboarding(.*)",
// ]);

// export default clerkMiddleware(async (auth, req) => {
//   const { userId } = await auth();

//   if (!userId && isProtectedRoute(req)) {
//     const { redirectToSignIn } = await auth();
//     return redirectToSignIn();
//   }

//   return NextResponse.next();
// });

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
//     // Always run for API routes
//     "/(api|trpc)(.*)",
//   ],
// };
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define all routes that require authentication
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/resume(.*)",
  "/interview(.*)",
  "/ai-cover-letter(.*)",
  "/onboarding(.*)",
]);

// Define all public (non-authenticated) routes
const publicRoutes = [
  "/", 
  "/sign-in", 
  "/sign-up"
];

export default clerkMiddleware(async (auth, req) => {
  const { userId, redirectToSignIn } = await auth();
  const pathname = req.nextUrl.pathname;

  const isPublic = publicRoutes.some((route) => pathname.startsWith(route));

  // If route is protected and user is not authenticated
  if (!userId && isProtectedRoute(req) && !isPublic) {
    return redirectToSignIn();
  }

  return NextResponse.next();
});

// Configures the matcher for routes where middleware should run
export const config = {
  matcher: [
    "/((?!_next|.*\\..*|favicon.ico).*)", // Skip Next.js internals & static files
    "/(api|trpc)(.*)",                    // Always run for API routes
  ],
};
