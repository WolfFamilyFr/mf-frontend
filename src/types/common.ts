import cinematicLogImgUrl from '../assets/images/logo_cinematic.png'
import comicsLogImgUrl from '../assets/images/logo_comics.png'
import rivalsLogImgUrl from '../assets/images/logo_rivals.png'

export type Site = {
    name: string
    logoPath: string
}

export type Page = {
    name: string
    label: string
}

export const CinematicSite: Site = { name: 'CinematicHome', logoPath: cinematicLogImgUrl }
export const ComicsSite: Site = { name: 'ComicsHome', logoPath: comicsLogImgUrl }
export const RivalsSite: Site = { name: 'RivalsHome', logoPath: rivalsLogImgUrl }

export const Sites: Site[] = [CinematicSite, ComicsSite, RivalsSite]