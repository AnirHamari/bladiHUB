'use client';

import { useState } from 'react';

export default function CommunityStats() {
    const [email, setEmail] = useState('');

    const stats = [
        { value: '10,000+', label: 'Membres actifs', icon: '👥' },
        { value: '15+', label: 'Pays représentés', icon: '🌍' },
        { value: '500+', label: 'Événements organisés', icon: '🎉' },
        { value: '95%', label: 'Taux de satisfaction', icon: '⭐' }
    ];

    const testimonials = [
        {
            name: 'Karim B.',
            role: 'Entrepreneur, Paris',
            text: 'Grâce à Bladi Hub, j\'ai trouvé des partenaires business et développé mon réseau professionnel en France.',
            avatar: '👨‍💼'
        },
        {
            name: 'Fatima Z.',
            role: 'Étudiante, Bruxelles',
            text: 'L\'aide administrative de Youssef m\'a fait gagner des mois dans mes démarches d\'inscription universitaire.',
            avatar: '👩‍🎓'
        },
        {
            name: 'Ahmed M.',
            role: 'Ingénieur, Berlin',
            text: 'Une communauté incroyable ! J\'ai participé à des événements et rencontré des personnes formidables.',
            avatar: '👨‍💻'
        }
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle waitlist signup
        console.log('Email submitted:', email);
        console.log('Success: Vous êtes sur la liste d\'attente 🎉');
        setEmail('');
    };

    return (
        <section className="py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-sand-beige/30 to-white dark:from-moroccan-green/5 dark:to-black">
            <div className="max-w-7xl mx-auto">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-6 rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-border hover:border-moroccan-red/50 transition-all duration-300 hover:scale-105"
                        >
                            <div className="text-4xl mb-2">{stat.icon}</div>
                            <div className="text-3xl font-bold gradient-moroccan text-gradient mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Testimonials */}
                <div className="mb-20">
                    <h2 className="text-4xl sm:text-5xl font-heading font-bold text-center text-foreground mb-4">
                        Ce que disent nos{' '}
                        <span className="gradient-moroccan text-gradient">membres</span>
                    </h2>
                    <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        Des milliers de Marocains nous font confiance
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-2xl bg-white dark:bg-black border border-border hover:border-moroccan-green/50 transition-all duration-300 hover:scale-105"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-moroccan flex items-center justify-center text-2xl">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                                    </div>
                                </div>
                                <p className="text-muted-foreground italic leading-relaxed">
                                    "{testimonial.text}"
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Waitlist CTA */}
                <div id="waitlist" className="relative p-12 rounded-3xl bg-gradient-moroccan overflow-hidden">
                    {/* Pattern Overlay */}
                    <div className="absolute inset-0 moroccan-pattern opacity-20" />

                    <div className="relative z-10 text-center text-white">
                        <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
                            Rejoignez-nous dès aujourd'hui
                        </h2>
                        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                            Inscrivez-vous à notre liste d'attente et soyez parmi les premiers à profiter de tous nos services
                        </p>

                        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="votre@email.com"
                                required
                                className="flex-1 px-6 py-4 rounded-full text-foreground bg-white dark:bg-black border-2 border-transparent focus:border-moroccan-gold outline-none transition-all"
                            />
                            <button
                                type="submit"
                                className="px-8 py-4 bg-white text-moroccan-red rounded-full font-semibold hover:bg-moroccan-gold hover:text-white transition-all duration-300 hover:scale-105 shadow-lg"
                            >
                                S'inscrire
                            </button>
                        </form>

                        <p className="text-sm mt-4 opacity-75">
                            ✓ Gratuit · ✓ Sans engagement · ✓ Accès prioritaire
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
