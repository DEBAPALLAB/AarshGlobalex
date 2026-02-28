import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Navbar />
            <main className="grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
