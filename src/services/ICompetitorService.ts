import {Competitor} from "../models/Competitor";
import {PlayedGameTransactionDTO} from "../controller/dto/PlayedGameTransaction";

export interface ICompetitorService {

    SubscribeCompetitor(competitor: Competitor): Promise<Competitor>

    FinishGame(transaction:PlayedGameTransactionDTO): Promise<Competitor>

    UnsubscribeCompetitor(id: string): void

    FindAllSubscriptionsForTournament(id: string): Promise<Competitor[]>

    FindCompetitorById(id: string): Promise<Competitor>

}
