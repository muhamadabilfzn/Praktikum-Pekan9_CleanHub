import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import CleanHubLayout from '../../../../../resources/js/components/CleanHubLayout';
type Officer={id:number;area_kerja:string|null;status:string;user:{nama_lengkap:string;username:string;email:string;no_hp:string|null}};
export default function Index({petugas}:{petugas:Officer[]}) {
 const hapus=(id:number)=>{if(confirm('Nonaktifkan petugas ini?'))router.delete(`/admin/petugas/${id}`)};
 return <CleanHubLayout title="Manajemen Petugas · CRUD Inertia"><Head title="Petugas - CleanHub"/><Link className="inline-block bg-emerald-700 text-white px-4 py-2 rounded mb-5" href="/admin/petugas/create">+ Tambah Petugas</Link><div className="overflow-x-auto bg-white rounded border"><table className="w-full text-left"><thead className="bg-slate-100"><tr>{['Nama','Username','Email','No. HP','Area Kerja','Status','Aksi'].map(x=><th className="p-3" key={x}>{x}</th>)}</tr></thead><tbody>{petugas.map(p=><tr key={p.id} className="border-t"><td className="p-3">{p.user.nama_lengkap}</td><td className="p-3">{p.user.username}</td><td className="p-3">{p.user.email}</td><td className="p-3">{p.user.no_hp||'-'}</td><td className="p-3">{p.area_kerja||'-'}</td><td className="p-3">{p.status}</td><td className="p-3 whitespace-nowrap"><Link className="text-blue-700 mr-3" href={`/admin/petugas/${p.id}/edit`}>Edit</Link><button className="text-red-700" onClick={()=>hapus(p.id)}>Hapus</button></td></tr>)}</tbody></table>{!petugas.length&&<p className="p-5">Belum ada petugas.</p>}</div></CleanHubLayout>;
}
