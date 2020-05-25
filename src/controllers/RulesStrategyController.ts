import {Controller, Get, Route, Tags} from "tsoa";
import {multiInject, ProvideSingleton} from "../ioc";
import {RuleSetDTO} from "../models/dto/RuleSetDTO";
import {AbstractRuleSet} from "../services";

@Tags('RulesSet')
@Route('/v1/rule-sets')
@ProvideSingleton(RuleStrategyController)
export class RuleStrategyController extends Controller {
    constructor(@multiInject(AbstractRuleSet) private strategies: AbstractRuleSet[]) {
        super();
    }

    @Get()
    public async getAllRuleStrategies(): Promise<RuleSetDTO[]> {
        return this.strategies.map(element => {
            return new RuleSetDTO(element.getRuleSetName(), element.getFormalName());
        })
    }
}
