import authenticatedNavbar from './components/authenticatedNavbar.vue';
import unauthenticatedNavbar from './components/unauthenticatedNavbar.vue';

import loginSignup from './components/loginSignup.vue';
import login from './components/login.vue';
import signup from './components/signup.vue';
import logout from './components/logout.vue';

import snippet from './components/snippet.vue';
import createPreviewSnippet from './components/createPreviewSnippet.vue';
import viewSingleSnippet from './components/viewSingleSnippet.vue';
import viewAllSnippets from './components/viewAllSnippets.vue';

import about from './components/about.vue';
import contact from './components/contact.vue';

export const routes = [
    {
        path: '/',
        components: {
            'authenticated-navbar': authenticatedNavbar,
            'unauthenticated-navbar': unauthenticatedNavbar,
            'page-content': createPreviewSnippet
        }
    },
    // {
    //     path: '/login-signup/',
    //     components: {
    //         'authenticated-navbar': authenticatedNavbar,
    //         'unauthenticated-navbar': unauthenticatedNavbar,
    //         'page-content': loginSignup
    //     }
    // },
    {
        path: '/login/',
        components: {
            'authenticated-navbar': authenticatedNavbar,
            'unauthenticated-navbar': unauthenticatedNavbar,
            'page-content': login
        }
    },
    {
        path: '/signup/',
        components: {
            'authenticated-navbar': authenticatedNavbar,
            'unauthenticated-navbar': unauthenticatedNavbar,
            'page-content': signup
        }
    },
    {
        path: '/logout/',
        components: {
            'authenticated-navbar': authenticatedNavbar,
            'unauthenticated-navbar': unauthenticatedNavbar,
            'page-content': logout
        }
    },
    {
        path: '/about/',
        components: {
            'authenticated-navbar': authenticatedNavbar,
            'unauthenticated-navbar': unauthenticatedNavbar,
            'page-content': about
        }
    },
    {
        path: '/contact/',
        components: {
            'authenticated-navbar': authenticatedNavbar,
            'unauthenticated-navbar': unauthenticatedNavbar,
            'page-content': contact
        }
    },
    {
        path: '/snippet',
        components: {
            'authenticated-navbar': authenticatedNavbar,
            'unauthenticated-navbar': unauthenticatedNavbar,
            'page-content': snippet
        },
        children: [
            {
                path: 'view-all',
                component: viewAllSnippets
            },
            {
                path: ':hash',
                component: viewSingleSnippet
            },            
        ]
    }
]