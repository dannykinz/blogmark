import { notFound } from 'next/navigation';
import { getBlogPosts, getPostSlug } from '@/app/lib/posts';

export const generateStaticParams = () => {
    const posts = getBlogPosts();

    return posts.map(post => ({
        slug: post.slug,
    }));
};

const SinglePost = async ({ params }) => {
    const { slug } = await params;

    const post = getPostSlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="mt-[80px] space-y-6">
            <h1 className="text-4xl text-center text-blue-400 font-extrabold md:text-8xl">
                {post.title}
            </h1>
            <p className="text-lg leading-relaxed text-zinc-200 text-center">{post.body}</p>
        </main>
    );
};

export default SinglePost;
