export default function Features() {
    const features = [
        {
            icon: '🤝',
            title: 'Networking professionnel',
            description: 'Connectez-vous avec des entrepreneurs, professionnels et talents marocains à travers l\'Europe',
            color: 'moroccan-red'
        },
        {
            icon: '📋',
            title: 'Aide administrative',
            description: 'Assistance pour vos démarches administratives, visas, et documents officiels',
            color: 'moroccan-green'
        },
        {
            icon: '🎓',
            title: 'Mentorat & Formation',
            description: 'Accédez à des programmes de mentorat et formations exclusives pour votre développement',
            color: 'moroccan-gold'
        },
        {
            icon: '🎉',
            title: 'Événements communautaires',
            description: 'Participez à des événements culturels, professionnels et festifs dans votre ville',
            color: 'moroccan-red'
        },
        {
            icon: '💼',
            title: 'Opportunités d\'emploi',
            description: 'Découvrez des offres d\'emploi et opportunités business au sein de la communauté',
            color: 'moroccan-green'
        },
        {
            icon: '🏠',
            title: 'Services du quotidien',
            description: 'Logement, déménagement, recommandations - tout pour faciliter votre vie en Europe',
            color: 'moroccan-gold'
        }
    ];

    return (
        <section id="features" className="py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-white to-sand-beige/30 dark:from-black dark:to-moroccan-green/5">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
                        Des services pensés pour{' '}
                        <span className="gradient-moroccan text-gradient">vous</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Une plateforme complète pour accompagner chaque étape de votre parcours
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-border hover:border-moroccan-red/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Icon */}
                            <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Hover Effect Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
