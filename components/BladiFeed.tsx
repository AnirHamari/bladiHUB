import Image from 'next/image';
import feedData from '../lib/data/feed.json';

export default function BladiFeed() {
    const articles = feedData.articles;

    return (
        <section id="feed" className="py-24 px-6 sm:px-8 lg:px-12 bg-zinc-50 dark:bg-zinc-950">
            <div className="max-w-7xl mx-auto">
                {/* Header Pinterest Style */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
                            Le <span className="gradient-moroccan text-gradient">Bladi Feed</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Actualités, conseils et inspirations curatés par Youssef & Salma pour la communauté.
                        </p>
                    </div>
                    <div className="flex gap-2">
                        {['Tout', 'News', 'Culture', 'Business', 'Lifestyle'].map((cat) => (
                            <button
                                key={cat}
                                className="px-4 py-2 rounded-full text-sm font-medium border border-border hover:border-moroccan-red hover:text-moroccan-red transition-all whitespace-nowrap"
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Masonry-like Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {articles.map((article) => (
                        <div
                            key={article.id}
                            className="break-inside-avoid relative group rounded-3xl overflow-hidden bg-white dark:bg-zinc-900 border border-border hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Image Container with variable height feel */}
                            <div className="relative w-full overflow-hidden">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                                    style={{ maxHeight: Number(article.id) % 2 === 0 ? '400px' : '300px' }}
                                />
                                {/* Category Badge overlay */}
                                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-sm text-xs font-bold text-moroccan-red uppercase tracking-wider">
                                    {article.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-xs text-muted-foreground">{article.date}</span>
                                    <span className="text-xs font-medium text-moroccan-green">{article.source}</span>
                                </div>

                                <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-moroccan-red transition-colors">
                                    {article.title}
                                </h3>

                                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                    {article.summary}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {article.tags.map((tag) => (
                                        <span key={tag} className="text-[10px] font-bold py-1 px-2 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-500">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Action Overlay (Pinterest feel) */}
                            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-center">
                                <button className="text-white text-sm font-bold bg-moroccan-red px-4 py-2 rounded-full hover:bg-moroccan-green transition-colors">
                                    Lire l'article
                                </button>
                                <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-all">
                                    ❤️
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Style */}
                <div className="mt-16 text-center">
                    <button className="px-10 py-4 rounded-full border-2 border-moroccan-red text-moroccan-red font-bold hover:bg-moroccan-red hover:text-white transition-all transform hover:scale-105">
                        Charger plus de news
                    </button>
                </div>
            </div>
        </section>
    );
}
