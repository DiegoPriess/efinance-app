import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatDividerModule,
    MatExpansionModule
  ]
})
export class ForumComponent {

  panelOpenState = false;
}
