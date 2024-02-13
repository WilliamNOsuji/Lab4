import { Component, OnInit } from '@angular/core';
import { Artist } from '../models/artist';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {

  artistName : string = "";
  artist ?: Artist;

  constructor(public spotify : SpotifyService) { }

  ngOnInit() {
    // Allo 👋
  }

  async getArtist() : Promise<void>{
    // Allo 👋
  }

}
