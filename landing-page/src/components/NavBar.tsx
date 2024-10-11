// src/components/NavBar.tsx
import Link from 'next/link'; // Importa el componente Link de Next.js

const NavBar = () => {
    const navLinks = [
        { title: 'Home', path: '/' },
        { title: 'About Us', path: '/about' },
        { title: 'Services', path: '/services' },
        { title: 'Contact', path: '/contacto' },
    ];

    return (
        <div className="flex flex-row p-6 font-geistS">
            <ul className="flex text-white gap-4 flex-grow">
                {navLinks.map((navLink) => (
                    <li key={navLink.path}>
                        <Link href={navLink.path} className="hover:text-blue-200">
                            {navLink.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="flex gap-2">
                    Icon
            </div>
        </div>
    );
};

export default NavBar;
