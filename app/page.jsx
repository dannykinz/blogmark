import Heading from './components/Heading';
import PostCard from './components/PostCard';
import { getBlogPosts } from './lib/posts';

const Homepage = () => {
    const posts = getBlogPosts();

    return (
        <main className="mt-[80px] flex flex-col gap-[60px]">
            <Heading text={'latest posts'} />
            <div className="flex flex-col gap-[32px] mx-auto md:max-w-[840px]">
                {posts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </main>
    );
};

export default Homepage;
