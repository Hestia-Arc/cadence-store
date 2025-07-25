import { Header } from "./Header";
import Contents from "./Contents";

function BlogPage() {

  return (
    <div className=" bg-white text-gray-700">
      <div className="px-4 sm:px-40">
      <Header />
      <Contents/>
      </div>
    </div>
  );
}

export default BlogPage;
