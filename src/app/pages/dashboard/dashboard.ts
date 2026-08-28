import { Component } from '@angular/core';
import { RouterModule} from "@angular/router";
import { Menu } from "../../components/menu/menu";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, Menu],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
