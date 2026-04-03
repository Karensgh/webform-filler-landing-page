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
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-4">Product</h4>
                        <ul className="space-y-3">
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
                    <p>&copy; {new Date().getFullYear()} Revelio Intelligence, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
