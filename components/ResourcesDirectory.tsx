import { RESOURCES_DIRECTORY } from '../lib/constants/resources';

export default function ResourcesDirectory() {
    return (
        <section id="directory" className="py-24 px-6 sm:px-8 lg:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-heading font-bold text-deep-teal mb-6">
                        Répertoire des <span className="text-moroccan-red">Services Officiels</span>
                    </h2>
                    <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
                        Accédez directement aux portails, aides sociales, juridiques et éducatifs mis à disposition par le Royaume du Maroc et les associations partenaires.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {RESOURCES_DIRECTORY.map((category, idx) => (
                        <div key={idx} className="glass-card rounded-[32px] p-8 hover:shadow-pinterest-hover transition-all duration-500 flex flex-col h-full border-t-4" style={{
                            borderColor: idx % 2 === 0 ? 'var(--color-moroccan-red)' : 'var(--color-moroccan-green)'
                        }}>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center text-3xl shadow-soft">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-heading font-bold text-deep-teal leading-tight">
                                    {category.category}
                                </h3>
                            </div>

                            <p className="text-sm text-zinc-500 mb-8 flex-grow">
                                {category.description}
                            </p>

                            <ul className="space-y-4">
                                {category.links.map((link, lIdx) => (
                                    <li key={lIdx} className="group/item">
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex flex-col gap-1"
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="font-bold text-deep-teal group-hover/item:text-moroccan-red transition-colors">
                                                    {link.label}
                                                </span>
                                                <span className="text-xs group-hover/item:translate-x-1 transition-transform">↗️</span>
                                            </div>
                                            <span className="text-[12px] text-zinc-400 leading-tight">
                                                {link.description}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 pt-6 border-t border-zinc-100 italic text-[10px] text-zinc-400">
                                Source officielle vérifiée
                            </div>
                        </div>
                    ))}
                </div>

                {/* Action Banner Style TFT Morocco */}
                <div className="mt-20 p-12 rounded-[40px] bg-gradient-moroccan relative overflow-hidden text-center text-white">
                    <div className="absolute inset-0 zellige-pattern opacity-10" />
                    <div className="relative z-10">
                        <h3 className="text-3xl font-heading font-bold mb-4 italic">Un problème spécifique ? Un litige ?</h3>
                        <p className="text-white/80 max-w-2xl mx-auto mb-8">
                            Si vous ne trouvez pas la ressource adéquate, demandez à Youssef ou Salma, nos assistants intelligents conçus pour vous orienter.
                        </p>
                        <a href="#ai" className="px-10 py-4 bg-white text-moroccan-red rounded-full font-bold hover:bg-moroccan-gold hover:text-white transition-all">
                            Démarrer l'Orientation Assistée
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
