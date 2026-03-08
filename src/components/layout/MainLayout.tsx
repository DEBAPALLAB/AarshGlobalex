import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import fs from 'fs/promises';
import path from 'path';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout = async ({ children }: MainLayoutProps) => {
    let categories = [];
    try {
        const filePath = path.join(process.cwd(), 'src/z-data/categories.json');
        const fileContents = await fs.readFile(filePath, 'utf8');
        const data = JSON.parse(fileContents);
        categories = data.categories || [];
    } catch (error) {
        console.error("Error reading categories in MainLayout:", error);
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Navbar initialCategories={categories} />
            <main className="grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
