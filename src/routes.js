import authenticatedNavbar from './components/authenticatedNavbar.vue';
import unauthenticatedNavbar from './components/unauthenticatedNavbar.vue';

import loginSignup from './components/loginSignup.vue';
import logout from './components/logout.vue';

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
    {
        path: '/snippet/:hash',
        components: {
            'authenticated-navbar': authenticatedNavbar,
            'unauthenticated-navbar': unauthenticatedNavbar,
            'page-content': viewSingleSnippet
        }
    },
    {
        path: '/login-signup/',
        components: {
            'authenticated-navbar': authenticatedNavbar,
            'unauthenticated-navbar': unauthenticatedNavbar,
            'page-content': loginSignup
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
        path: '/snippet/view-all/',
        components: {
            'authenticated-navbar': authenticatedNavbar,
            'unauthenticated-navbar': unauthenticatedNavbar,
            'page-content': viewAllSnippets
        }
    },
]