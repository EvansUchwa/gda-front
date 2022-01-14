export const sidebarLinks = {
    CANDIDAT: [
        {
            menuName: 'Offre', menuIcon: 'mdi-bag-checked',
            menuOptions: [
                { ph: 'Offres recentes', link: '/Offres-emplois/latest/1' },
                { ph: 'Offres populaire', link: '/Offres-emplois/mostViewed/1' },
                { ph: 'Offres pour vous', link: '/Offres-emplois/suggestion/1' },
                { ph: 'Candidature', link: '#' }]
        },
        {
            menuName: 'Profil', menuIcon: 'mdi-account',
            menuOptions: [
                { ph: 'Mon profil', link: '/Profil' },
                { ph: 'Modifier Profil', link: '/Modifier/Profil' }
            ]
        },
    ],
    ENTREPRISE: [
        {
            menuName: "Candidat", menuIcon: 'mdi-clipboard-account',
            menuOptions: [
                { ph: 'Candidat recent', link: '/Candidats/latest/1' },
                { ph: 'Candidats populaire', link: '/Candidats/mostViewed/1' },
                { ph: 'Candidats pour vous', link: '/Candidats/suggestion/1' },
                { ph: 'Candidature', link: '#' }]
        },
        // {
        //     menuName: 'Ventes', menuIcon: 'mdi-basket',
        //     menuOptions: [
        //         { ph: 'Liste des ventes', link: '/Logiciel/vente/liste' },
        //         { ph: 'Ajouter une vente', link: '/Logiciel/vente/ajout' }
        //     ]
        // },
        // {
        //     menuName: 'Depense', menuIcon: 'mdi-basket',
        //     menuOptions: [
        //         { ph: 'Liste des depense', link: '/Logiciel/depense/liste' },
        //         { ph: 'Ajouter une depense', link: '/Logiciel/depense/ajout' }
        //     ]
        // },
        // {
        //     menuName: 'Produits', menuIcon: 'mdi-basket',
        //     menuOptions: [
        //         { ph: 'Liste de produit', link: '/Logiciel/produit/liste' },
        //         { ph: 'Ajouter un produit', link: '/Logiciel/produit/ajout' }
        //     ]
        // },
        // {
        //     menuName: 'Client', menuIcon: 'mdi-basket',
        //     menuOptions: [
        //         { ph: 'Liste des clients', link: '/Logiciel/client/liste' },
        //     ]
        // },
        {
            menuName: 'Profil', menuIcon: 'mdi-account',
            menuOptions: [
                { ph: 'Mon profil', link: '/Profil' },
                { ph: 'Modifier Profil', link: '/Modifier/Profil' }
            ]
        },
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
        low_high: '/api/offres/search-filtre-sortingBy?page=',
        filter: "/api/offres/search-filtre-options?page="
    }


    if (['az', 'za'].includes(type)) {
        return { link: obj[type], method: method, data: { sortingBy: data } };
    } else {
        return { link: obj[type], method: method, data: data };
    }
}