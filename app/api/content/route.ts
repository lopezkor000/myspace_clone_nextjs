const posts = [
  {
    title: "Lorem Ipsum",
    slug: "lorem-ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
  },
  {
    title: "Dolor Sit Amet",
    slug: "dolor-sit-amet",
    content:
      "Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
  },
  {
    title: "Consectetur Adipiscing",
    slug: "consectetur-adipiscing",
    content:
      "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
  },
  {
    title: "Integer Nec Odio",
    slug: "integer-nec-odio",
    content:
      "Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent.",
  },
  {
    title: "Praesent Libero",
    slug: "praesent-libero",
    content:
      "Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.",
  },
];

import { NextResponse } from "next/server";
// import { getServerSession } from "next-auth";
// import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  // const session = await getServerSession(authOptions);

  // if (!session) {
  //   return Response.json({});
  // }

  return NextResponse.json(posts);
}
