const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="mt-[80px] pb-6">
            <p className="text-center text-base text-zinc-300">
                &copy; Copyright {year} BlogMark. All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;
