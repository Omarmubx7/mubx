export default function Footer() {
    return (
        <footer className="py-8 border-t border-white/5 bg-black/50 backdrop-blur-sm">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-muted">
                    &copy; {new Date().getFullYear()} <span className="text-white font-bold">MUBX</span>. All rights reserved.
                </p>
                <p className="text-sm text-muted flex items-center gap-1">
                    Designed & Built by <span className="text-neon font-medium">Omar Mubaidin</span>
                </p>
            </div>
        </footer>
    );
}
