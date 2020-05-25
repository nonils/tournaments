import {AbstractRuleSet} from "../AbstractRuleSet";
import {ProvideSingleton} from "../../ioc";
import {ICompetitorModel} from "../../models";
import {inject} from "inversify";
import {CompetitorRepository} from "../../repositories/mongo/CompetitorRepository";

@ProvideSingleton(AbstractRuleSet)
export class RuleSetMatchesWonImpl extends AbstractRuleSet {
    constructor(@inject(CompetitorRepository) protected competitorRepository: CompetitorRepository) {
        super()
    }

    async execute(tournamentId: string) : Promise<ICompetitorModel[]> {
        return await this.competitorRepository.findByFilter({
            "tournamentId":tournamentId
        }, {totalPoints:-1, winedMatches:-1});
    }

    isValid(ruleSetName: string): boolean {
        return ruleSetName === this.getRuleSetName();
    }

    getRuleSetName(): string {
        return "MostPoints";
    }

    getFormalName(): string {
        return "Most points won";
    }

}
