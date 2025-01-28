import Link from "next/link";

interface BlogCardProps {
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
}

const BlogCard = ({ title, slug, excerpt, coverImage }: BlogCardProps) => {
  return (
    <div className="card">
      <img 
        src={coverImage} 
        alt={`Cover image for the blog post: ${title}`} 
        className="w-full h-48 object-cover mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <Link href={`/blogs/${slug}`}>
        <span className="text-[#FB2E86] hover:underline">Read More</span>
      </Link>
    </div>
  );
};

export default BlogCard;
