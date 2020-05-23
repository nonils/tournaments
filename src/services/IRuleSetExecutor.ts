import {ICompetitorModel} from "../models";

export interface IRuleSetExecutor {
    /**
     * Find the ruleset to execute and find the competitors ordeered by the rule set policy
     * */
    execute(tournamentId: string, ruleSetStrategy: string): Promise<ICompetitorModel[]>;
}
