export default function Footer() {
    return (
        <footer className="py-8 border-t border-white/5 bg-black/50 backdrop-blur-sm">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-muted flex items-center gap-2">
                    &copy; {new Date().getFullYear()}
                    <span className="flex items-center justify-center w-8 h-8 bg-black/50 border border-white/10 rounded-lg">
                        <span className="text-sm font-black text-white tracking-tighter">M<span className="text-neon">.</span></span>
                    </span>
                    <span className="font-bold text-white">MUBX</span>
                    All rights reserved.
                </p>
                <p className="text-sm text-muted flex items-center gap-1">
                    Designed & Built by <span className="text-neon font-medium">Omar Mubaidin</span>
                </p>
            </div>
        </footer>
    );
}
