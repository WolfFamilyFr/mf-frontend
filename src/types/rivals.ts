import { Page } from "./common"

export type Character = {
    id: number
    nickname: string
    firstName: string
    lastName: string
    role: string
    difficulty: number
    description: string
}

export const CharactersPage: Page = { name: 'RivalsCharacters', label: 'Characters' }
export const RivalsPages: Page[] = [ CharactersPage ]

export const CharacterPage: Page = { name: 'RivalsCharacter', label: 'Character' }
export const RivalsCharacterPages: Page[] = [ CharacterPage ]