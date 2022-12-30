const api_base = 'https://api.themoviedb.org/3';
const api_language_key = 'language=pt-BR&api_key=4639cebeecd31e6f8ae8694b2b201320';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${api_base}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [{
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&${api_language_key}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch(`/trending/all/week?${api_language_key}`)
            },
            {
                slug: 'top-rated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?${api_language_key}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&${api_language_key}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&${api_language_key}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&${api_language_key}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&${api_language_key}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&${api_language_key}`)
            },
        ]
    },

    getMovieInfo: async (movieId, type) => {
        let info = {};

        if (movieId) {
            switch (type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?${api_language_key}`);
                    break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?${api_language_key}`);
                    break;
                default:
                    info = null;
                    break;
            }
        }

        return info;
    }
}