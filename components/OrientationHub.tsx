'use client';

import { useState } from 'react';

export default function OrientationHub() {
    const [activeAgent, setActiveAgent] = useState<'youssef' | 'salma'>('youssef');
    const [messages, setMessages] = useState<{ role: 'ai' | 'user'; text: string }[]>([
        { role: 'ai', text: "Bonjour ! Je suis Youssef. Je suis là pour vous orienter vers les bons services officiels ou aides juridiques. Comment puis-je vous aider aujourd'hui ?" }
    ]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (!input.trim()) return;
        const newMessages = [...messages, { role: 'user' as const, text: input }];
        setMessages(newMessages);
        setInput('');

        // Simulate AI routing response
        setTimeout(() => {
            setMessages([...newMessages, {
                role: 'ai',
                text: `C'est une excellente question. Pour ce type de démarche, je vous recommande de consulter la section "Aide Juridique" de notre répertoire, ou de contacter directement la Fondation Hassan II via leur portail officiel (fh2mre.ma). Voulez-vous que je vous y redirige ?`
            }]);
        }, 1000);
    };

    return (
        <section id="ai" className="py-24 px-6 sm:px-8 lg:px-12 bg-white">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-heading font-bold text-deep-teal mb-4">
                        Votre <span className="text-moroccan-gold">Assistant d'Orientation</span>
                    </h2>
                    <p className="text-zinc-600">Choisissez votre conseiller et obtenez une réponse immédiate pour vous diriger vers le bon service.</p>
                </div>

                <div className="bg-sand-beige rounded-[40px] shadow-pinterest overflow-hidden border border-zinc-100 flex flex-col md:flex-row min-h-[600px]">
                    {/* Sidebar - Agents */}
                    <div className="w-full md:w-80 bg-deep-teal p-8 text-white">
                        <h3 className="font-heading font-bold text-xl mb-8">Nos Conseillers</h3>
                        <div className="space-y-4">
                            <button
                                onClick={() => setActiveAgent('youssef')}
                                className={`w-full p-4 rounded-3xl flex items-center gap-4 transition-all ${activeAgent === 'youssef' ? 'bg-moroccan-red shadow-lg' : 'hover:bg-white/10'
                                    }`}
                            >
                                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl">👨🏽‍💼</div>
                                <div className="text-left">
                                    <div className="font-bold">Youssef</div>
                                    <div className="text-[10px] opacity-70">Expert Juridique & Admin</div>
                                </div>
                            </button>

                            <button
                                onClick={() => setActiveAgent('salma')}
                                className={`w-full p-4 rounded-3xl flex items-center gap-4 transition-all ${activeAgent === 'salma' ? 'bg-moroccan-green shadow-lg' : 'hover:bg-white/10'
                                    }`}
                            >
                                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl">👩🏻‍💼</div>
                                <div className="text-left">
                                    <div className="font-bold">Salma</div>
                                    <div className="text-[10px] opacity-70">Vie Sociale & Éducation</div>
                                </div>
                            </button>
                        </div>

                        <div className="mt-auto pt-12 text-[10px] opacity-50">
                            Bladi Hub AI v1.0 <br />
                            Orientation basée sur les guides officiels.
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="flex-grow flex flex-col p-6 md:p-10">
                        <div className="flex-grow space-y-4 overflow-y-auto mb-8 pr-2 custom-scrollbar">
                            {messages.map((m, idx) => (
                                <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] p-4 rounded-[24px] text-sm leading-relaxed ${m.role === 'user'
                                            ? 'bg-moroccan-red text-white rounded-tr-none'
                                            : 'bg-white text-zinc-800 shadow-soft rounded-tl-none border border-zinc-100'
                                        }`}>
                                        {m.text}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Décrivez votre besoin ici..."
                                className="flex-grow bg-white border border-zinc-200 rounded-full px-6 py-4 outline-none focus:border-moroccan-gold transition-all"
                            />
                            <button
                                onClick={handleSend}
                                className="w-14 h-14 rounded-full bg-moroccan-gold text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all font-bold"
                            >
                                ➔
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
