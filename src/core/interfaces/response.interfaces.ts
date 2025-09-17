export interface ResponseGraphQL {
    data: Data;
}

export interface Data {
    pokemon: Pokemon[];
}

export interface Pokemon {
    id:             number;
    name:           string;
    weight:         number;
    height:         number;
    pokemonsprites: Pokemonsprite[];
    __typename:     PokemonTypename;
}

export enum PokemonTypename {
    Pokemon = "pokemon",
}

export interface Pokemonsprite {
    sprites:    Sprites;
    __typename: PokemonspriteTypename;
}

export enum PokemonspriteTypename {
    Pokemonsprites = "pokemonsprites",
}

export interface GenerationV {
    "black-white": Sprites;
}

export interface GenerationIv {
    platinum:               Sprites;
    "diamond-pearl":        Sprites;
    "heartgold-soulsilver": Sprites;
}

export interface Versions {
    "generation-i":    GenerationI;
    "generation-v":    GenerationV;
    "generation-ii":   GenerationIi;
    "generation-iv":   GenerationIv;
    "generation-vi":   { [key: string]: Home };
    "generation-iii":  GenerationIii;
    "generation-vii":  GenerationVii;
    "generation-viii": GenerationViii;
}

export interface Other {
    home:               Home;
    showdown:           Sprites;
    dream_world:        DreamWorld;
    "official-artwork": OfficialArtwork;
}

export interface Sprites {
    other?:             Other;
    versions?:          Versions;
    back_shiny:         null | string;
    back_female:        null | string;
    front_shiny:        null | string;
    back_default:       null | string;
    front_female:       null | string;
    front_default:      null | string;
    back_shiny_female:  null | string;
    front_shiny_female: null | string;
    animated?:          Sprites;
}

export interface GenerationI {
    yellow:     RedBlue;
    "red-blue": RedBlue;
}

export interface RedBlue {
    back_gray:         null | string;
    front_gray:        null | string;
    back_default:      null | string;
    front_default:     null | string;
    back_transparent:  null | string;
    front_transparent: null | string;
}

export interface GenerationIi {
    gold:    Gold;
    silver:  Gold;
    crystal: Crystal;
}

export interface Crystal {
    back_shiny:              null | string;
    front_shiny:             null | string;
    back_default:            null | string;
    front_default:           null | string;
    back_transparent:        null | string;
    front_transparent:       null | string;
    back_shiny_transparent:  null | string;
    front_shiny_transparent: null | string;
}

export interface Gold {
    back_shiny:         null | string;
    front_shiny:        null | string;
    back_default:       null | string;
    front_default:      null | string;
    front_transparent?: null | string;
}

export interface GenerationIii {
    emerald:             OfficialArtwork;
    "ruby-sapphire":     Gold;
    "firered-leafgreen": Gold;
}

export interface OfficialArtwork {
    front_shiny:   null | string;
    front_default: null | string;
}

export interface Home {
    front_shiny:        null | string;
    front_female:       null | string;
    front_default:      null | string;
    front_shiny_female: null | string;
}

export interface GenerationVii {
    icons:                  DreamWorld;
    "ultra-sun-ultra-moon": Home;
}

export interface DreamWorld {
    front_female:  null | string;
    front_default: null | string;
}

export interface GenerationViii {
    icons: DreamWorld;
}
