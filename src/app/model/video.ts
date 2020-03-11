import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


export class Video {
    private _sanitizer: DomSanitizer;

    public videoLink: string;
    public videoDescription: string;
    public safeURL: SafeResourceUrl = (this.videoLink == null) ? "" : this._sanitizer.bypassSecurityTrustResourceUrl(this.videoLink);
    public videoId?: number;

    constructor() {
        
    }

    // public setVideoLink(videoLink: string) {
    //     this.videoLink = videoLink;
    // }

    // public getVideoLink(): string {
    //     return this.videoLink;
    // }

    // public getSafeURL(): SafeResourceUrl {
    //     return this._sanitizer.bypassSecurityTrustResourceUrl(this.getVideoLink());
    // }

    // public setVideoDescription(videoDescription: string) {
    //     this.videoDescription = videoDescription;
    // }

    // public getVideoDescription(): string {
    //     return this.videoDescription;
    // }

    // public setVideoId(videoId: number) {
    //     this.videoId = videoId;
    // }

    // public getVideoId(): number {
    //     return this.videoId;
    // }

}