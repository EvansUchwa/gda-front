export const sidebarLinks = {
    CANDIDAT: [

    ],
    ENTREPRISE: [
        // { ph: 'Offre posté', link: '#', icons: 'mdi-heart' },
    ],
    ADMIN: [
        {
            menuName: 'Emplois', menuIcon: 'mdi-bag-checked',
            menuOptions: [
                { ph: 'CvThèque', link: '/liste/candidat' },
                { ph: 'EntrepriseThèque', link: '/liste/entreprises' },
                { ph: 'Activation compte candidat', link: '/activation/candidat' },
                { ph: 'Activation compte Entreprise', link: '/activation/entreprise' }]
        },
        {
            menuName: 'Boutique', menuIcon: 'mdi-basket',
            menuOptions: [
                { ph: 'Toutes les boutiques', link: '/liste/boutiques' },
                { ph: 'Activation Entreprise', link: '/activation/boutique' },
                { ph: 'Publicité', link: '/publicité' }]
        },
        {
            menuName: 'Immobilier', menuIcon: 'mdi-home-city',
            menuOptions: [
                { ph: 'Toutes les Locations', link: '/liste/locations' },
                { ph: 'Toutes les Ventes', link: '/liste/ventes' },
                { ph: 'Activation Entreprise', link: '/activation' },
                { ph: 'Publicité', link: '/publicité' }]
        },
        {
            menuName: 'Annonces', menuIcon: 'mdi-inbox-arrow-down',
            menuOptions: [{ ph: 'Toutes les annonces', link: '#' },
            { ph: 'Les categories d\'annonce', link: '#' }]
        },
        {
            menuName: 'Autre outils', menuIcon: 'mdi-toolbox',
            menuOptions: [{ ph: 'Bar deroulante', link: '#' },
            { ph: 'Gestion de Service', link: '#' },
            { ph: 'Gestion de Projet', link: '#' },
            { ph: 'Fiche de performance', link: '#' }]
        }
    ]
}


export const dispatchCandidatListApi = (type, method, data = null) => {
    const obj = {
        latest: '/api/candidats/list-candidat?page=',
        mostViewed: '/api/candidats/candidat-plus-visite?page=',
        az: "/api/candidats/search-filtre-sortingBy?page=",
        za: '/api/candidats/search-filtre-sortingBy?page=',
        filter: "/api/candidats/search-filtre-options?page="
    }


    if (['az', 'za'].includes(type)) {
        return { link: obj[type], method: method, data: { sortingBy: data } };
    } else {
        return { link: obj[type], method: method, data: data };
    }
}


export const dispatchEnterpriseListApi = (type, method, data = null) => {
    const obj = {
        latest: '/api/offres/dernier-offres?page=',
        mostViewed: '/api/offres/offres-populaire?page=',
        suggestion: "/api/offres/offres-recommander/" + data + "?page=",
        az: "/api/offres/search-filtre-sortingBy?page=",
        za: '/api/offres/search-filtre-sortingBy?page=',
        filter: "/api/offres/search-filtre-options?page="
    }


    if (['az', 'za'].includes(type)) {
        return { link: obj[type], method: method, data: { sortingBy: data } };
    } else {
        return { link: obj[type], method: method, data: data };
    }
}