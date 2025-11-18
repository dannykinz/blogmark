import Heading from '@/app/components/Heading';

const SinglePost = ({ slug }) => {
    return (
        <article>
            <Heading text={slug} />
        </article>
    );
};

export default SinglePost;
