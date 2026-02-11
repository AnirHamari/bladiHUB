export default function AIAssistants() {
    return (
        <section className="py-24 px-6 sm:px-8 lg:px-12 bg-white dark:bg-black relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 moroccan-pattern opacity-30" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
                        Vos assistants IA{' '}
                        <span className="gradient-moroccan text-gradient">personnels</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Disponibles 24/7 pour vous accompagner dans toutes vos démarches
                    </p>
                </div>

                {/* Assistants Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Youssef - Professional Assistant */}
                    <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-moroccan-red/10 to-moroccan-red/5 border-2 border-moroccan-red/20 hover:border-moroccan-red transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        {/* Avatar */}
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-moroccan-red to-moroccan-red/70 flex items-center justify-center text-5xl mb-6 mx-auto shadow-lg">
                            👨‍💼
                        </div>

                        {/* Name & Role */}
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                                Youssef
                            </h3>
                            <p className="text-moroccan-red font-semibold">Assistant Professionnel</p>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                            Expert en démarches administratives, recherche d'emploi et networking professionnel.
                            Youssef vous guide dans vos projets professionnels et entrepreneuriaux.
                        </p>

                        {/* Capabilities */}
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                                <span className="text-moroccan-red">✓</span>
                                <span>Aide aux démarches administratives</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <span className="text-moroccan-red">✓</span>
                                <span>Conseil en recherche d'emploi</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <span className="text-moroccan-red">✓</span>
                                <span>Networking et opportunités business</span>
                            </div>
                        </div>

                        {/* Chat Preview */}
                        <div className="mt-6 p-4 rounded-xl bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-moroccan-red/20">
                            <div className="text-xs text-muted-foreground mb-2">Exemple de conversation :</div>
                            <div className="text-sm italic">"Comment puis-je obtenir mon équivalence de diplôme en France ?"</div>
                        </div>
                    </div>

                    {/* Salma - Community Assistant */}
                    <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-moroccan-green/10 to-moroccan-green/5 border-2 border-moroccan-green/20 hover:border-moroccan-green transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        {/* Avatar */}
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-moroccan-green to-moroccan-green/70 flex items-center justify-center text-5xl mb-6 mx-auto shadow-lg">
                            👩‍💻
                        </div>

                        {/* Name & Role */}
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                                Salma
                            </h3>
                            <p className="text-moroccan-green font-semibold">Assistante Communautaire</p>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                            Spécialiste de la vie quotidienne et de l'intégration culturelle.
                            Salma vous connecte avec la communauté et facilite votre quotidien en Europe.
                        </p>

                        {/* Capabilities */}
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                                <span className="text-moroccan-green">✓</span>
                                <span>Événements et activités communautaires</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <span className="text-moroccan-green">✓</span>
                                <span>Conseils logement et services</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <span className="text-moroccan-green">✓</span>
                                <span>Connexion avec d'autres membres</span>
                            </div>
                        </div>

                        {/* Chat Preview */}
                        <div className="mt-6 p-4 rounded-xl bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-moroccan-green/20">
                            <div className="text-xs text-muted-foreground mb-2">Exemple de conversation :</div>
                            <div className="text-sm italic">"Quels sont les événements marocains à Paris ce mois-ci ?"</div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <p className="text-muted-foreground mb-4">Commencez à discuter avec nos assistants dès aujourd'hui</p>
                    <button className="px-8 py-4 bg-gradient-moroccan text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                        Essayer gratuitement
                    </button>
                </div>
            </div>
        </section>
    );
}
