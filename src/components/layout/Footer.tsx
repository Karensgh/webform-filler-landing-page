import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-white border-t border-slate-200 pt-20 pb-10">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center mb-4 inline-flex">
                            <Image
                                src="/logo.svg"
                                alt="Learn & Fill"
                                width={480}
                                height={80}
                                className="h-10 w-auto"
                            />
                        </Link>
                        <p className="text-slate-500 max-w-xs mb-6">
                            Enter it once. Reuse it everywhere.
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
                            <li><Link href="#problem" className="text-slate-500 hover:text-indigo-600 transition-colors">Job &amp; Internship Applications</Link></li>
                            <li><Link href="#problem" className="text-slate-500 hover:text-indigo-600 transition-colors">School &amp; Scholarship Applications</Link></li>
                            <li><Link href="#problem" className="text-slate-500 hover:text-indigo-600 transition-colors">Accelerator Applications</Link></li>
                            <li><Link href="#problem" className="text-slate-500 hover:text-indigo-600 transition-colors">Grant Applications</Link></li>
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
