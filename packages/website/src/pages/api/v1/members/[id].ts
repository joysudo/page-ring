import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET({ params, request }: APIContext) {
  const members = await getCollection("members").then((members) =>
    members.map((member) => ({
      id: member.id,
      ...member.data,
    })),
  );

  const entryIdx = members.findIndex((member) => member.id === params.id);
  if (entryIdx === -1) {
    return new Response("Member not found", { status: 404 });
  }

  const current = members[entryIdx];
  const prev = members[entryIdx - 1] || members[members.length - 1];
  const next = members[entryIdx + 1] || members[0];

  return Response.json({
    prev,
    current,
    next,
  });
}
