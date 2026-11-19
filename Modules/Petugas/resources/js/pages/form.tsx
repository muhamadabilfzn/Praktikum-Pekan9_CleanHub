import React,{FormEvent} from 'react';
import {Head,Link,useForm} from '@inertiajs/react';
import CleanHubLayout from '../../../../../resources/js/components/CleanHubLayout';
type Officer={id:number;area_kerja:string|null;user:{nama_lengkap:string;username:string;email:string;no_hp:string|null}};
export default function Form({editOfficer}:{editOfficer?:Officer}){
 const {data,setData,post,put,processing,errors}=useForm({nama_lengkap:editOfficer?.user.nama_lengkap||'',username:editOfficer?.user.username||'',email:editOfficer?.user.email||'',password:'',no_hp:editOfficer?.user.no_hp||'',area_kerja:editOfficer?.area_kerja||''});
 const submit=(e:FormEvent)=>{e.preventDefault();if(editOfficer)put(`/admin/petugas/${editOfficer.id}`);else post('/admin/petugas')};
 const fields:[keyof typeof data,string,string][]=[['nama_lengkap','Nama Lengkap','text'],['username','Username','text'],['email','Email','email'],['password','Password','password'],['no_hp','Nomor HP','text'],['area_kerja','Area Kerja','text']];
 return <CleanHubLayout title={editOfficer?'Edit Petugas':'Tambah Petugas'}><Head title="Form Petugas"/><form onSubmit={submit} className="bg-white rounded border p-6 max-w-2xl space-y-4">{fields.filter(([key])=>!(editOfficer&&key==='username')).map(([key,label,type])=><label key={key} className="block"><span className="font-medium">{label}</span><input type={type} value={data[key]} onChange={e=>setData(key,e.target.value)} className="mt-1 block w-full border rounded p-2"/>{errors[key]&&<small className="text-red-600">{errors[key]}</small>}</label>)}<div className="flex gap-3"><button disabled={processing} className="bg-emerald-700 text-white px-5 py-2 rounded disabled:opacity-50">{processing?'Menyimpan...':'Simpan'}</button><Link href="/admin/petugas" className="border rounded px-5 py-2">Batal</Link></div></form></CleanHubLayout>;
}
