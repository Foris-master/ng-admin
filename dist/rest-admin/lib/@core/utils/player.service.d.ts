import * as i0 from "@angular/core";
export declare class Track {
    name: string;
    artist: string;
    url: string;
    cover: string;
}
export declare class PlayerService {
    current: number;
    playlist: Track[];
    random(): Track;
    next(): Track;
    prev(): Track;
    private getNextTrack;
    private getPrevTrack;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlayerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PlayerService>;
}
//# sourceMappingURL=player.service.d.ts.map