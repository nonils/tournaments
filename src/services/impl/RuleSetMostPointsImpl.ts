import {IRuleSet} from "../IRuleSet";
import {ProvideSingleton} from "../../ioc";
import {inject} from "inversify";
import {CompetitorRepository} from "../../repositories/mongo/CompetitorRepository";
import {ICompetitorModel} from "../../models";

@ProvideSingleton(RuleSetMostPointsImpl)
export class RuleSetMostPointsImpl implements IRuleSet {

    constructor(@inject(CompetitorRepository) protected competitorRepository: CompetitorRepository) {
    }

    async execute(tournamentId: string) : Promise<ICompetitorModel[]> {
        return await this.competitorRepository.findByFilter({
            "tournamentId":tournamentId
        }, {winedMatches:-1, totalPoints:-1});
    }

    isValid(ruleSetName: string): boolean {
        return ruleSetName === this.getRuleSetName();
    }

    getRuleSetName(): string {
        return "MatchesWon";
    }

    getFormalName(): string {
        return "Most matches won";
    }

}
