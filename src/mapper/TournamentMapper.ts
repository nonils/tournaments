import {CreateNewTournamentRequest} from "../controller/dto/CreateNewTournamentRequest";
import {Tournament} from "../models/Tournament";
import {PrizesMapper} from "./PrizesMapper";

export class TournamentMapper {

    static mapFromCreateNewTournamenetRequestToTournament(dto:CreateNewTournamentRequest) : Tournament {
        const entity = new Tournament();
        entity.casinoId= dto.casinoId;
        entity.tournamentName= dto.tournamentName;
        entity.cost= dto.cost;
        entity.from= dto.from;
        entity.to= dto.to;
        entity.inscriptionFrom= dto.inscriptionTo;
        entity.inscriptionTo= dto.inscriptionTo;
        entity.gameId= dto.gameId;
        entity.mostWinMatches= dto.mostWinMatches;
        entity.prizes= PrizesMapper.mapPrizesDTOToPrizes(dto.prizes);

        return entity;
    }

}
