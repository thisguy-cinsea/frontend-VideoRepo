import { Component, OnInit } from '@angular/core';
import { VideoService } from '../service/video.service';
import { Video } from '../model/video';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})

export class VideosComponent implements OnInit {
  safeURL: SafeResourceUrl;
  destroy$: Subject<boolean> = new Subject<boolean>();
  videos: Video[];

  constructor(private videoService: VideoService,
    private _sanitizer: DomSanitizer)  {}


  ngOnInit() {
    this.videoService.getVideos().pipe(takeUntil(this.destroy$)).subscribe((shit: Video[]) => {
      console.log();
      this.videos = shit;
      this.videos.forEach((turd) => {
        turd.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(turd.videoLink);
        console.log();
      });
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe;
  }
}
