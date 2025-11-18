import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <nav className="flex justify-between py-[24px]">
                <Link href={'/'}>
                    <h2 className="text-3xl text-zinc-100">BlogMark</h2>
                </Link>

                <Link href={'/about'} className="text-3xl text-zinc-100">
                    about
                </Link>
            </nav>
        </header>
    );
};

export default Header;
