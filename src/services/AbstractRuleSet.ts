import {ICompetitorModel} from "../models";

export abstract class AbstractRuleSet {

    public abstract execute(tournamentId: string): Promise<ICompetitorModel[]>;

    public abstract isValid(ruleSetName: string): boolean;

    public abstract getRuleSetName(): string

    public abstract getFormalName(): string
}
