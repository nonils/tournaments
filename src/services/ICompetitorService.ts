import {IBaseService} from "./IBaseService";
import {ICompetitorModel} from "../models";

export interface ICompetitorService extends IBaseService<ICompetitorModel> {

    createCompetitor(competitor: ICompetitorModel): Promise<ICompetitorModel>;

    replaceCompetitor(id: string, competitor: ICompetitorModel): Promise<ICompetitorModel>;

}
