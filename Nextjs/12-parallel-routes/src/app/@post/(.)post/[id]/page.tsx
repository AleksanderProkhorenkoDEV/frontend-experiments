import { getPost } from "@/actions/posts";
import Link from "next/link";

const ModalPost = async ({ params }: { params: { id: number } }) => {
  const { id } = await params;
  const post = await getPost(id);

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/50 flex items-center justify-center p-4">
      <div className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header del modal */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800">{post.title}</h2>
        </div>
        <div className="p-6 overflow-y-auto flex-grow">
          <p className="text-gray-600">{post.body}</p>
        </div>

        {/* Footer del modal */}
        <div className="flex justify-between items-center p-4 bg-gray-50 border-t border-gray-100">
          <Link
            href={`/`}
            className="flex items-center text-blue-600 hover:text-blue-800 disabled:opacity-50"
            scroll={false}
          >
            Close
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModalPost;
