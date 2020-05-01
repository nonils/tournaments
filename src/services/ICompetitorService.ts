import {Competitor} from "../models/Competitor";

export interface ICompetitorService {

    SubscribeCompetitor(competitor : Competitor) : Promise<Competitor>
    ModifyCompetitor(competitor : Competitor) : Promise<Competitor>
    FinishGame():Promise<Competitor>
    UnsubscribeCompetitor(id:string):void
    FindAllSubscriptionsForTournament(id:string):Promise<Competitor[]>
    FindCompetitorById(id:string):Promise<Competitor>

}
