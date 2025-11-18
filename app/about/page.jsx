import Heading from '../components/Heading';

const About = () => {
    return (
        <main className="mt-[80px]">
            <Heading text={'about'} />
            <p className="text-lg text-center pt-6 leading-relaxed text-gray-200">
                BlogMark is your curated stream of automated tech and gaming updates. We built it to
                save time for curious readers who want trustworthy releases, product drops, and
                industry insights delivered with zero fluff. Every post is designed to be scannable
                while still giving enough context to act, so you never miss the trends shaping the
                hardware bench or the indie scene.
            </p>
        </main>
    );
};

export default About;
