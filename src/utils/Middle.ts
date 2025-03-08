// import { jwtDecode } from "jwt-decode";
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export async function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   const accessToken =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YzkxNjVlMTRlNmExYjc3YzY5MWNmNCIsInVzZXJOYW1lIjoiaGc1IiwiZW1haWwiOiJtaWlpcmhhYXNtNUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRVd0pVbUxlUE8vc1NlUk80OWxKSkZPQWFHVDhPenQveXliSC41eTdGbXhnQ0VjaFVubzVSYSIsInJvbGUiOiJBRE1JTiIsInN0YXR1cyI6IkFDVElWRSIsImNyZWF0ZWRBdCI6IjIwMjUtMDMtMDZUMDM6Mjg6MzAuMzM5WiIsInVwZGF0ZWRBdCI6IjIwMjUtMDMtMDZUMDM6Mjg6MzAuMzM5WiIsImlhdCI6MTc0MTMxMzI0MiwiZXhwIjoxNzQxMzMxMjQyfQ.dcl2sCHJunu960NmxY0zMTHh3ZeZW68Pj0avMITj5WU";

//   if (!accessToken) {
//     if (pathname === "/login" || pathname === "/register") {
//       return NextResponse.next();
//     } else {
//       return NextResponse.redirect(new URL("/login", request.url));
//     }
//   }

//   let decodedData = null;

//   if (accessToken) {
//     decodedData = jwtDecode(
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YzkxNjVlMTRlNmExYjc3YzY5MWNmNCIsInVzZXJOYW1lIjoiaGc1IiwiZW1haWwiOiJtaWlpcmhhYXNtNUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRVd0pVbUxlUE8vc1NlUk80OWxKSkZPQWFHVDhPenQveXliSC41eTdGbXhnQ0VjaFVubzVSYSIsInJvbGUiOiJBRE1JTiIsInN0YXR1cyI6IkFDVElWRSIsImNyZWF0ZWRBdCI6IjIwMjUtMDMtMDZUMDM6Mjg6MzAuMzM5WiIsInVwZGF0ZWRBdCI6IjIwMjUtMDMtMDZUMDM6Mjg6MzAuMzM5WiIsImlhdCI6MTc0MTMxMzI0MiwiZXhwIjoxNzQxMzMxMjQyfQ.dcl2sCHJunu960NmxY0zMTHh3ZeZW68Pj0avMITj5WU"
//     ) as any;
//   }

//   const role = decodedData?.role;

//   if (role === "ADMIN" && pathname.startsWith("/dashboard")) {
//     return NextResponse.next();
//   }

//   if (pathname.startsWith("/dashboard")) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/login", "/register", "/dashboard/:page*"],
// };
