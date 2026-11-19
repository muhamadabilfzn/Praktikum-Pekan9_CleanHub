<?php
namespace App\Http\Middleware;
use Illuminate\Http\Request;
use Inertia\Middleware;
class CleanHubInertia extends Middleware
{
    protected $rootView = 'inertia';
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'auth' => ['name' => session('nama_lengkap', session('username', 'Pengguna')), 'role' => session('role')],
            'flash' => ['success' => fn () => session('success'), 'error' => fn () => session('error')],
        ]);
    }
}
