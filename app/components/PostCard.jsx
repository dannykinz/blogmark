import Link from 'next/link';

const PostCard = ({ post }) => {
    return (
        <article className="flex flex-col gap-5 bg-[#222] py-[24px] px-[32px] rounded-3xl">
            <Link href={`/${post.slug}`}>
                <h2 className="text-2xl md:text-2xl text-zinc-100">{post.title}</h2>
            </Link>
            <p className="text-base text-zinc-100">{post.body.slice(0, 79) + '...'}</p>
        </article>
    );
};

export default PostCard;
