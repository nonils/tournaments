const TYPES = {
    ITournamentService: Symbol.for("ITournamentService"),
    ITournamentRepository: Symbol.for("ITournamentRepository"),
    ICompetitorService: Symbol.for("ICompetitorService"),
    ICompetitorRepository: Symbol.for("ICompetitorRepository"),
    WrapperDB: Symbol.for("MongoDB")
};

export {TYPES};
