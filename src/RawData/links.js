export const adminMenu = [
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
    },]


export const entrepriseMenu = [
    { ph: 'Menu 1', link: '#', icons: 'mdi-heart' },
    { ph: 'Menu 1', link: '#', icons: 'mdi-heart' },
    { ph: 'Menu 1', link: '#', icons: 'mdi-heart' }]

export const candidatMenu = [
    { ph: 'Mes candidatures', link: '#', icons: 'mdi-anchor' },
    { ph: 'Les entreprise', link: '#', icons: 'mdi-heart' }]