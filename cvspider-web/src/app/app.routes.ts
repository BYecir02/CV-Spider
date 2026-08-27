import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/pages/dashboard/dashboard';
import { Profile } from './features/profile/pages/profile/profile';
import { KnowledgeBase } from './features/knowledge-base/pages/knowledge-base/knowledge-base';
import { CvAdapter } from './features/cv-adapter/pages/cv-adapter/cv-adapter';
import { Resumes } from './features/resumes/pages/resumes/resumes';
import { Settings } from './features/settings/pages/settings/settings';

export const routes: Routes = [
    {
        path: '', // l'utilisateur est a la racine
        redirectTo: 'dashboard', // angular doit le rediriger vers /dashboard
        pathMatch: 'full' // angular doit effectuer cette redirection si oute l'URL correspond a ''
    },
    {
        path: 'dashboard',
        component: Dashboard
    },
    {
        path: 'profile',
        component: Profile
    },
    {
        path: 'knowledge-base',
        component: KnowledgeBase
    },
    {
        path: 'cv-adapter',
        component: CvAdapter
    },
    {
        path: 'resumes',
        component: Resumes
    },
    {
        path: 'settings',
        component: Settings
    }
];
