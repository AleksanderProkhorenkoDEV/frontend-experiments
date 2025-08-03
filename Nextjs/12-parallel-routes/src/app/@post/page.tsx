import { getAllPost } from "@/actions/posts";

const JobSlot = async () => {
  const posts = await getAllPost(10);
  return (
    <section className="flex-1 bg-[#80CED7] rounded-md shadow-md h-full p-4">
      <h1 className="text-center font-bold uppercase">Post preview</h1>
      <ol className="list-decimal list-inside">
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ol>
    </section>
  );
};

export default JobSlot;
