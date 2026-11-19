import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob('../../Modules/*/resources/js/pages/**/*.tsx');
        const [module, page] = name.split('::');
        return resolvePageComponent(`../../Modules/${module}/resources/js/pages/${page}.tsx`, pages);
    },
    setup({ el, App, props }) { createRoot(el).render(<App {...props} />); },
    progress: { color: '#16a34a' },
});
