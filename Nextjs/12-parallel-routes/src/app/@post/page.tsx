import { getAllPost } from "@/actions/posts";
import { delay } from "@/lib/utils";
import Link from "next/link";

const JobSlot = async () => {
  const posts = await getAllPost(10);
  await delay(1500);
  return (
    <section className=" p-6">
      <ol className="list-decimal list-inside">
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/post/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default JobSlot;
