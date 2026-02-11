'use client';

import { useState } from 'react';
import Link from 'next/link';
import feedData from '../../lib/data/feed.json';

export default function AdminDashboard() {
    const [articles, setArticles] = useState(feedData.articles);
    const [isCurationRunning, setIsCurationRunning] = useState(false);

    const handleDelete = (id: string) => {
        if (confirm('Voulez-vous vraiment supprimer cet article ?')) {
            setArticles(articles.filter(a => a.id !== id));
            // In a real app, you would call a Server Action or API here
        }
    };

    const runCuration = () => {
        setIsCurationRunning(true);
        setTimeout(() => {
            setIsCurationRunning(false);
            alert('Curation IA terminée ! (Simulation)');
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">
            {/* Sidebar / Topbar Admin */}
            <nav className="border-b border-border bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-moroccan flex items-center justify-center text-xl">🇲🇦</div>
                        <span className="font-heading font-bold text-xl">Bladi <span className="text-moroccan-red">Admin</span></span>
                    </Link>
                    <div className="flex gap-4">
                        <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground">Support</button>
                        <div className="w-8 h-8 rounded-full bg-moroccan-green flex items-center justify-center text-white text-xs font-bold">AD</div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-6 py-12">
                {/* Header Admin */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                    <div>
                        <h1 className="text-3xl font-heading font-bold mb-2">Tableau de bord</h1>
                        <p className="text-muted-foreground">Gérez le contenu du hub et l'automatisation IA.</p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={runCuration}
                            disabled={isCurationRunning}
                            className={`px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${isCurationRunning ? 'bg-zinc-200 text-zinc-500 cursor-not-allowed' : 'bg-moroccan-green text-white shadow-lg hover:shadow-xl hover:scale-105'
                                }`}
                        >
                            {isCurationRunning ? (
                                <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Curation en cours...</>
                            ) : (
                                <>✨ Lancer la curation IA</>
                            )}
                        </button>
                        <button className="px-6 py-3 bg-moroccan-red text-white rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                            + Nouvel Article
                        </button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-border shadow-pinterest">
                        <div className="text-muted-foreground text-sm font-medium mb-1">Articles totaux</div>
                        <div className="text-2xl font-bold">{articles.length}</div>
                    </div>
                    <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-border shadow-pinterest">
                        <div className="text-muted-foreground text-sm font-medium mb-1">Dernière mise à jour</div>
                        <div className="text-2xl font-bold">Il y a 15 min</div>
                    </div>
                    <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-border shadow-pinterest">
                        <div className="text-muted-foreground text-sm font-medium mb-1">Alertes IA</div>
                        <div className="text-2xl font-bold text-moroccan-red">2 critiques</div>
                    </div>
                </div>

                {/* Articles Table */}
                <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-border shadow-pinterest overflow-hidden">
                    <div className="px-6 py-4 border-b border-border bg-zinc-50/50 dark:bg-zinc-800/50 flex justify-between items-center">
                        <h2 className="font-heading font-bold">Flux d'articles</h2>
                        <input
                            type="text"
                            placeholder="Rechercher..."
                            className="bg-white dark:bg-black border border-border rounded-lg px-4 py-2 text-sm outline-none focus:border-moroccan-red transition-all"
                        />
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="text-xs uppercase tracking-wider text-muted-foreground border-b border-border">
                                    <th className="px-6 py-4 font-semibold">Article</th>
                                    <th className="px-6 py-4 font-semibold">Catégorie</th>
                                    <th className="px-6 py-4 font-semibold">Date</th>
                                    <th className="px-6 py-4 font-semibold">Source</th>
                                    <th className="px-6 py-4 font-semibold text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                {articles.map((article) => (
                                    <tr key={article.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-zinc-200">
                                                    <img src={article.image} alt="" className="w-full h-full object-cover" />
                                                </div>
                                                <div className="font-medium text-sm line-clamp-1">{article.title}</div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-[10px] font-bold text-zinc-500 uppercase tracking-tighter">
                                                {article.category}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-muted-foreground">{article.date}</td>
                                        <td className="px-6 py-4 text-sm font-medium">{article.source}</td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="p-2 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg text-moroccan-green">✏️</button>
                                                <button
                                                    onClick={() => handleDelete(article.id)}
                                                    className="p-2 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg text-moroccan-red"
                                                >
                                                    🗑️
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
}
