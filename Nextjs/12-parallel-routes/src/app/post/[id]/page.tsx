const Post = async ({ params }: { params: Promise<{ id: number }> }) => {
  const { id } = await params;
  return (
    <section>
      <h1>Single page of post {id} </h1>
    </section>
  );
};

export default Post;
