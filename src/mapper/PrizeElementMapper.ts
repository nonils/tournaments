import {PrizeElement} from "../models/PrizeElement";
import {PrizeElementDTO} from "../controller/dto/PrizeElementDTO";

export class PrizeElementMapper {
    static mapPrizeElementsDTOToPrizeElements(dtos: PrizeElementDTO[]): PrizeElement[] {
        return dtos.map(PrizeElementMapper.mapPrizeElementDTOToPrizeElement)
    }

    static mapPrizeElementDTOToPrizeElement(dto: PrizeElementDTO): PrizeElement {
        let entity = new PrizeElement();
        entity.associatedIds = dto.associatedIds;
        entity.quantity = dto.quantity;
        entity.type = dto.type;
        return entity
    }
}
