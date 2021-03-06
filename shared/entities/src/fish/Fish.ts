import {
	autoserializeAs, autoserialize, Deserialize, Serialize
} from 'cerialize';

import { registerDeserializer } from '../Deserializer';
import { FishReward, FishRewards } from './FishReward';
import { registerSerializer } from '../Serializer';

export type FishHabitat = 'sea' | 'freshwater' | 'event';

export type FishType = 'fish' | 'junk' | 'event';

export type FishRank = 'normal' | 'hero' | 'boss' | 'event' | 'eventbox';

export class Fish {
	@autoserialize public readonly id: string;
	@autoserialize public readonly name: string;
	@autoserialize public readonly description: string;
	@autoserialize public readonly habitat: FishHabitat;
	@autoserialize public readonly rank: FishRank;
	@autoserialize public readonly type: FishType;
	@autoserialize public readonly grade: number;
	@autoserializeAs('starts_from') public readonly startsFrom: number;
	@autoserialize public readonly image: string;
	@autoserialize public readonly exp: number;
	@autoserializeAs(FishReward) public readonly rewards: FishRewards;

	constructor(
		id: string, name: string, habitat: FishHabitat, rank: FishRank, type: FishType, grade: number,
		startsFrom: number, image: string, exp: number, rewards: FishRewards, description: string
	) {
		this.id = id;
		this.name = name;
		this.habitat = habitat;
		this.rank = rank;
		this.type = type;
		this.grade = grade;
		this.startsFrom = startsFrom;
		this.image = image;
		this.exp = exp;
		this.rewards = rewards;
		this.description = description;
	}
}

registerDeserializer(Fish, (input: string) => Deserialize(JSON.parse(input), Fish));
registerSerializer(Fish, (input: Fish | Fish[]) => Serialize(input, Fish));

export type Fishes = Array<Fish>;
