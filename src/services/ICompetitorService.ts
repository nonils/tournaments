import {IBaseService} from "./IBaseService";
import {ICompetitorModel} from "../models";
import {IAddPlayedGameRequest} from "../models/dto/AddPlayedGameRequest";

export interface ICompetitorService extends IBaseService<ICompetitorModel> {

    createCompetitor(competitor: ICompetitorModel): Promise<ICompetitorModel>;

    replaceCompetitor(id: string, competitor: ICompetitorModel): Promise<ICompetitorModel>;

    addPlayedTransaction(request: IAddPlayedGameRequest): Promise<ICompetitorModel[]>;
}
