import React from 'react';
import { Link, usePage } from '@inertiajs/react';
export default function CleanHubLayout({children,title}:{children:React.ReactNode,title:string}) {
 const {auth,flash}=usePage<{auth:{name:string;role:string};flash:{success?:string;error?:string}}>().props;
 return <div className="min-h-screen bg-slate-50 text-slate-800"><header className="bg-emerald-800 text-white px-6 py-4 flex flex-wrap gap-5 items-center"><strong className="text-xl">♻ CleanHub</strong><a href="/">Beranda</a><Link href="/admin/petugas">Petugas (Inertia)</Link><Link href="/admin/artikel">Artikel (AJAX)</Link><span className="ml-auto">{auth?.name} · {auth?.role}</span></header><main className="max-w-6xl mx-auto p-6"><h1 className="text-2xl font-bold mb-5">{title}</h1>{flash?.success&&<p className="bg-green-100 p-3 rounded mb-4">{flash.success}</p>}{flash?.error&&<p className="bg-red-100 p-3 rounded mb-4">{flash.error}</p>}{children}</main></div>;
}
