import React from "react";

export const Footer = () => {
    return (
        <footer className="relative py-16 px-4 md:px-0 bg-black/40 backdrop-blur-lg border-t border-white/10 text-center overflow-hidden">
            {/* Gradient Overlay */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

            <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    Aritra Dhabal
                </h3>

                <div className="flex justify-center gap-8 mb-8">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors hover:translate-y-[-3px] transform duration-300"
                    >
                        <img src="https://img.icons8.com/fluent/48/ffffff/github.png" alt="GitHub" className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity" />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors hover:translate-y-[-3px] transform duration-300"
                    >
                        <img src="https://img.icons8.com/fluent/48/ffffff/linkedin.png" alt="LinkedIn" className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity" />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors hover:translate-y-[-3px] transform duration-300"
                    >
                        <img src="https://img.icons8.com/fluent/48/ffffff/twitter.png" alt="Twitter" className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity" />
                    </a>
                    <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors hover:translate-y-[-3px] transform duration-300"
                    >
                        <img src="https://img.icons8.com/fluent/48/ffffff/youtube-play.png" alt="YouTube" className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity" />
                    </a>
                </div>

                <p className="text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} Aritra Dhabal. All rights reserved.
                </p>
            </div>
        </footer>
    );
};
