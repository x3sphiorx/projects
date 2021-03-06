export interface CharacterStatsRaw {
	status: string;
	character_stat: CharacterStat[];
}

export interface CharacterStat {
	grade: number;
	basicattack: null | string;
	blockskill: null | string;
	spskill: 'KOF_SPECIAL_POWERMAX' | null;
	spskillclassoverride: 'KOF' | null;
	rangedattack: null | string;
	herotype: Herotype | null;
	skill_name: null | string;
	skill_icon: null | string;
	skill_desc: null | string;
	skill_subname: null | string;
	skill_subdesc: null | string;
	passive: string[] | null;
	initialattdmg: number;
	initialhp: number;
	growthattdmg: number;
	growthhp: number;
	knockbackresistancerate: number;
	pattern: null | string;
	passiveslot: number;
	defense: number;
	resist: number;
	growthdefense: number;
	growthresist: number;
	critprob: number;
	critpower: number;
	vamp: number;
	addstatmaxid: null | string;
	penetratedef: number;
	penetraterst: number;
	hitrate: number;
	dodgerate: number;
	dmgreduce: number;
	id: string;
}

export enum Herotype {
	Leader = 'LEADER',
	Support = 'SUPPORT',
}
