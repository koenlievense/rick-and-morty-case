import { Component, Input } from '@angular/core';
import { Episode } from '../../../../shared/interfaces/episode';

@Component({
  selector: 'app-episode-list-item',
  templateUrl: './episode-list-item.component.html',
})
export class EpisodeListItemComponent {
  @Input()
  episode: Episode;
}
