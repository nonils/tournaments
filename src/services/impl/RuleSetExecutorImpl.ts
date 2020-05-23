import {multiInject} from "inversify";
import {AbstractRuleSet} from "../AbstractRuleSet";
import {ProvideSingleton} from "../../ioc";
import {IRuleSetExecutor} from "../IRuleSetExecutor";
import {ICompetitorModel} from "../../models";

@ProvideSingleton(RuleSetExecutorImpl)
export class RuleSetExecutorImpl implements IRuleSetExecutor {

    constructor(@multiInject(AbstractRuleSet) protected ruleSets: AbstractRuleSet[]) {
    }
    /**
     * {@inheritDoc}
     * */
    async execute(tournamentId: string, ruleSetStrategy: string): Promise<ICompetitorModel[]> {
        return await this.ruleSets.find(rule => rule.isValid(ruleSetStrategy)).execute(tournamentId);
    }

}
