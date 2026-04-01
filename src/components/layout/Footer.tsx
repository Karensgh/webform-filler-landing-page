import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-white border-t border-slate-200 pt-20 pb-10">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4 group inline-flex">
                            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow">
                                <span className="text-white font-bold text-lg leading-none">A</span>
                            </div>
                            <span className="font-display font-bold text-xl text-slate-900 tracking-tight">AuFill</span>
                        </Link>
                        <p className="text-slate-500 max-w-xs mb-6">
                            Your AI profile for every form. Fill once. Apply everywhere.
                        </p>
                        <div className="flex items-center gap-4 text-slate-400">
                            <a href="#" className="hover:text-indigo-600 transition-colors">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                            </a>
                            <a href="#" className="hover:text-indigo-600 transition-colors">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-4">Product</h4>
                        <ul className="space-y-3">
                            <li><Link href="#features" className="text-slate-500 hover:text-indigo-600 transition-colors">Features</Link></li>
                            <li><Link href="#how-it-works" className="text-slate-500 hover:text-indigo-600 transition-colors">How it works</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-4">Use Cases</h4>
                        <ul className="space-y-3">
                            <li><Link href="#problem" className="text-slate-500 hover:text-indigo-600 transition-colors">Job Seekers</Link></li>
                            <li><Link href="#problem" className="text-slate-500 hover:text-indigo-600 transition-colors">Students</Link></li>
                            <li><Link href="#problem" className="text-slate-500 hover:text-indigo-600 transition-colors">Founders</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-4">Company</h4>
                        <ul className="space-y-3">
                            <li><Link href="#about" className="text-slate-500 hover:text-indigo-600 transition-colors">About Us</Link></li>
                            <li><a href="mailto:info@reveliolabs.app" className="text-slate-500 hover:text-indigo-600 transition-colors">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} AuFill AI. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#privacy" className="hover:text-indigo-600 transition-colors">Privacy Policy</Link>
                        <Link href="#terms" className="hover:text-indigo-600 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
