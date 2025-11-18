import { Raleway } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const raleway = Raleway({
    variable: '--font-raleway',
});

export const metadata = {
    title: 'BlogMark',
    description: 'Automated tech and gaming updates',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${raleway.variable} antialiased container`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
