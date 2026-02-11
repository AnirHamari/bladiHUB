export default function HelpBoard() {
    const forumPosts = [
        { title: "Problème acte de naissance à Casablanca", user: "Karim B.", status: "Résolu ✅", replies: 12, category: "Administratif" },
        { title: "Cherche avocat spécialisé foncier à Tanger", user: "Samira L.", status: "Urgent ⚠️", replies: 5, category: "Juridique" },
        { title: "Double nationalité : démarches passeport", user: "Omar F.", status: "En cours ⏳", replies: 8, category: "État Civil" },
        { title: "Aide pour scolarisation enfant retour au Maroc", user: "Yassine M.", status: "Recherche aide 🔍", replies: 3, category: "Éducation" }
    ];

    return (
        <section className="py-24 px-6 sm:px-8 lg:px-12 bg-sand-beige">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl font-heading font-bold text-deep-teal mb-4">
                            Tableau de l'<span className="text-moroccan-green">Entraide Communautaire</span>
                        </h2>
                        <p className="text-zinc-600">
                            Parce que personne ne comprend mieux un MRE qu'un autre MRE. Partagez vos problèmes, trouvez des solutions et aidez la communauté.
                        </p>
                    </div>
                    <button className="btn-primary flex items-center gap-2">
                        <span>➕</span> Poser une question
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {forumPosts.map((post, idx) => (
                        <div key={idx} className="glass-card rounded-[24px] p-6 hover:translate-x-1 transition-all group cursor-pointer border-l-4 border-moroccan-green">
                            <div className="flex justify-between items-start mb-4">
                                <span className="px-3 py-1 bg-zinc-100 rounded-full text-[10px] font-bold text-zinc-500 uppercase">
                                    {post.category}
                                </span>
                                <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${post.status.includes('Résolu') ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                                    }`}>
                                    {post.status}
                                </span>
                            </div>
                            <h3 className="text-lg font-heading font-bold text-deep-teal mb-2 group-hover:text-moroccan-green transition-colors">
                                {post.title}
                            </h3>
                            <div className="flex justify-between items-center text-sm text-zinc-500">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-moroccan-gold/20 flex items-center justify-center text-[10px] font-bold">
                                        {post.user[0]}
                                    </div>
                                    <span>{post.user}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span>💬 {post.replies} réponses</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="text-moroccan-green font-bold hover:underline decoration-2 underline-offset-4">
                        Voir tous les sujets du forum →
                    </button>
                </div>
            </div>
        </section>
    );
}
