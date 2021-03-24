export interface Media {
    id    : number,
    genres: [],
    title : Title
}

export interface Title {
    romaji: string,
    native: string
}

export interface PageForName {
    Page: {
        media     : Media[],
        __typename: string
    }
}

export interface Character {
    id: number,
    name: Name,
    description: string
}

export interface Name {
    full: string,
    native: string
}

export interface PageForCharacter {
    Page: {
        characters: Character[],
        __typename: string
    }
}
