import {PrizeDTO} from "../controller/dto/PrizeDTO";
import {Prize} from "../models/Prize";
import {PrizeElementMapper} from "./PrizeElementMapper";

export class PrizesMapper {

    static mapPrizesDTOToPrizes(dto: PrizeDTO[]) : Prize[]{
        return dto.map(PrizesMapper.mapPrizeDTOToPrize);
    }

    static mapPrizeDTOToPrize(dto: PrizeDTO): Prize {
        let entity = new Prize();
        entity.fieldsToDefinePosition = dto.fieldsToDefinePosition;
        entity.positionFrom = dto.positionFrom;
        entity.positionTo = dto.positionTo;
        entity.prizeElement = PrizeElementMapper.mapPrizeElementsDTOToPrizeElements(dto.prizeElement);
        return entity;
    }
}
