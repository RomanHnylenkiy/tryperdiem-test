export interface HomeState {
  activeButton: string;
}

export interface IPokemonData {
  abilities: IAbility[];
  base_experience: number;
  cries: {
    latest: string;
    legacy: string;
  };
  forms: IForm[];
  game_indices: IGameIndicates[];
  height: number;
  held_items: unknown[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: [];
  name: string;
  order: number;
  past_abilities: unknown[];
  past_types: unknown[];
  species: IForm;
  sprites: {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
    other: {
      [key: string]: ISprite;
    };
    versions: {
      [version: string]: IVersionSprite;
    };
  };
  stats: IStat[];
  types: IType[];
  weight: number;
}

export interface IAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface IForm {
  name: string;
  url: string;
}

export interface IGameIndicates {
  game_index: number;
  version: IForm;
}

export interface IMove {
  move: IForm;
  version_group_details: IVersionGroupDetails[];
}

export interface IVersionGroupDetails {
  level_learned_at: number;
  move_learn_method: IForm;
  version_group: IForm;
}

interface ISprite {
  front_default: string | null;
  front_female?: string | null;
  front_shiny?: string | null;
  front_shiny_female?: string | null;
  back_default?: string | null;
  back_female?: string | null;
  back_shiny?: string | null;
  back_shiny_female?: string | null;
}

interface IVersionSprite {
  [key: string]: string | null | undefined;
}

interface IStat {
  base_stat: number;
  effort: number;
  stat: IForm;
}

interface IType {
  slot: number;
  type: IForm;
}
