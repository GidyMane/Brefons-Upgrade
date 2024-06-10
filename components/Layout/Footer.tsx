"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';

const Footer = () => {
    const [currentYear, setCurrentYear] = useState('');

    useEffect(() => {
        const year = new Date().getFullYear();
        setCurrentYear(year.toString());
    }, []);

    return (
        <div>
            <div className="w-full sticky mx-auto">
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {currentYear} <Link href="https://flowbite.com/" className="hover:underline">Powered by ™</Link>. All Rights Reserved.</span>
            </div>
        </div>
    );
}

export default Footer;
