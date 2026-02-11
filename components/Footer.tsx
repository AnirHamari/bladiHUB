import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const links = {
        platform: [
            { label: 'Répertoire', href: '#directory' },
            { label: 'Aide Juridique', href: '#directory' },
            { label: 'Orientation IA', href: '#ai' },
            { label: 'Entraide', href: '#forum' }
        ],
        legal: [
            { label: 'Confidentialité', href: '#' },
            { label: 'Conditions', href: '#' },
            { label: 'Contact', href: '#' }
        ],
        social: [
            { label: 'Instagram', href: '#', icon: '📸' },
            { label: 'LinkedIn', href: '#', icon: '💼' }
        ]
    };

    return (
        <footer className="bg-white border-t border-zinc-100">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 lg:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-gradient-moroccan flex items-center justify-center text-2xl">
                                🇲🇦
                            </div>
                            <span className="text-2xl font-heading font-bold gradient-moroccan text-gradient">
                                Bladi Hub
                            </span>
                        </div>
                        <p className="text-zinc-500 max-w-sm leading-relaxed mb-6">
                            Le portail d'orientation dédié à la communauté marocaine du monde. Trouvez l'aide, les ressources et l'entraide dont vous avez besoin.
                        </p>
                        <div className="flex gap-4">
                            {links.social.map((social, idx) => (
                                <Link key={idx} href={social.href} className="w-10 h-10 rounded-full bg-sand-beige flex items-center justify-center grayscale hover:grayscale-0 transition-all hover:scale-110">
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-heading font-bold text-deep-teal mb-6 text-sm uppercase tracking-widest">Plateforme</h3>
                        <ul className="space-y-4">
                            {links.platform.map((link, idx) => (
                                <li key={idx}>
                                    <Link href={link.href} className="text-zinc-500 hover:text-moroccan-red transition-colors text-sm">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-heading font-bold text-deep-teal mb-6 text-sm uppercase tracking-widest">Légal</h3>
                        <ul className="space-y-4">
                            {links.legal.map((link, idx) => (
                                <li key={idx}>
                                    <Link href={link.href} className="text-zinc-500 hover:text-moroccan-red transition-colors text-sm">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-zinc-400 text-xs">
                        © {currentYear} Bladi Hub. Fait avec ❤️ pour les MRE. | <Link href="/admin" className="hover:text-moroccan-red">Console Admin</Link>
                    </p>
                    <div className="flex items-center gap-6 text-xs font-bold text-zinc-400 uppercase tracking-widest">
                        <span>Casablanca</span>
                        <span>Paris</span>
                        <span>Bruxelles</span>
                        <span>Madrid</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
