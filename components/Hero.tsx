import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-sand-beige pt-20">
            {/* Background Zellige Pattern */}
            <div className="absolute inset-0 zellige-pattern" />

            {/* Soft Ambient Light Colors */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-moroccan-red/5 rounded-full blur-[120px] -mr-64 -mt-32" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-moroccan-green/5 rounded-full blur-[120px] -ml-64 -mb-32" />

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className="animate-fade-in text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-moroccan-red/10 text-moroccan-red font-bold text-sm mb-6">
                            <span>🇲🇦</span>
                            <span className="uppercase tracking-widest">Le Hub Officiel des MRE</span>
                        </div>

                        <h1 className="text-5xl sm:text-7xl font-heading font-extrabold text-deep-teal leading-[1.1] mb-6">
                            Bienvenue sur <br />
                            <span className="text-gradient-moroccan">Bladi Hub</span>
                        </h1>

                        <p className="text-xl text-zinc-600 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
                            Votre portail d'orientation unique. Nous vous guidons vers les services officiels, l'assistance juridique et l'entraide communautaire pour les Marocains du Monde.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link href="#directory" className="btn-primary">
                                Accéder au Répertoire
                            </Link>
                            <Link href="#ai" className="btn-secondary">
                                Orientation par l'IA
                            </Link>
                        </div>

                        {/* Direct Search / Ask Bar (TFT Style) */}
                        <div className="mt-12 p-2 glass-card rounded-2xl max-w-xl mx-auto lg:mx-0 flex gap-2">
                            <input
                                type="text"
                                placeholder="J'ai un problème de papiers / Je cherche un notaire..."
                                className="flex-grow bg-transparent border-none outline-none px-4 py-3 text-zinc-700"
                            />
                            <button className="bg-moroccan-green text-white px-6 py-3 rounded-xl font-bold hover:bg-moroccan-green-light transition-all">
                                Chercher
                            </button>
                        </div>
                    </div>

                    {/* Right Content - Authentic Visuals */}
                    <div className="relative animate-slide-up">
                        <div className="relative z-10 grid grid-cols-2 gap-4">
                            {/* Featured Image 1: Marhaba / Port */}
                            <div className="space-y-4">
                                <div className="rounded-[40px] overflow-hidden shadow-pinterest h-64 relative group">
                                    <img
                                        src="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&q=80&w=800"
                                        alt="Maroc Vision"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/60 to-transparent flex items-end p-6">
                                        <span className="text-white font-bold text-sm">Opération Marhaba</span>
                                    </div>
                                </div>
                                <div className="rounded-[40px] overflow-hidden shadow-pinterest h-48 relative group">
                                    <img
                                        src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&q=80&w=800"
                                        alt="Zellige"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-moroccan-red/60 to-transparent flex items-end p-6">
                                        <span className="text-white font-bold text-sm">Authenticité</span>
                                    </div>
                                </div>
                            </div>
                            {/* Featured Image 2: Industry / Society */}
                            <div className="space-y-4 pt-12">
                                <div className="rounded-[40px] overflow-hidden shadow-pinterest h-48 relative group">
                                    <img
                                        src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=800"
                                        alt="Industry"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-moroccan-green/60 to-transparent flex items-end p-6">
                                        <span className="text-white font-bold text-sm">Innovation</span>
                                    </div>
                                </div>
                                <div className="rounded-[40px] overflow-hidden shadow-pinterest h-64 relative group">
                                    <img
                                        src="https://images.unsplash.com/photo-1541829019-2188201b83a0?auto=format&fit=crop&q=80&w=800"
                                        alt="Society"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-moroccan-gold/60 to-transparent flex items-end p-6">
                                        <span className="text-white font-bold text-sm">Communauté</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative floating stats (Value-driven, not fake) */}
                        <div className="absolute -bottom-6 -left-6 glass-card px-6 py-4 rounded-2xl animate-pulse-slow">
                            <span className="block text-2xl font-bold text-moroccan-red">100%</span>
                            <span className="text-xs font-medium text-zinc-500 uppercase tracking-tighter">Orientation Dévouée</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
