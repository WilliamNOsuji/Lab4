import { Component, OnInit } from '@angular/core';
import { Artist } from '../models/artist';
import { SpotifyService } from '../services/spotify.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { lastValueFrom, catchError } from 'rxjs';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {

  artistName: string = "";
  artist?: Artist;
  spotifyToken?: string;

  constructor(public spotify: SpotifyService) {
   }

   ngOnInit() {
    // Call the connect method from SpotifyService when the component initializes
    this.spotify.connect();
  }

  async getArtist(): Promise<void> {
    try {
      // Call the searchArtist method from SpotifyService passing the artist name
      this.artist = await this.spotify.searchArtist(this.artistName);
    } catch (error) {
      console.error("Error:", error);
    }
  }
}
