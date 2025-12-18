import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET({ params, request }: APIContext) {
  const members = await getCollection("members").then((members) =>
    members.map((member) => ({
      id: member.id,
      ...member.data,
    })),
  );

  return Response.json(members);
}
