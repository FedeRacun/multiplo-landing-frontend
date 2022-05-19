import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { Project } from './interface/Project';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.scss']
})
export class ViewProjectComponent {

  private localitems!: any;
  project: Project;
  safeURL: any;
  imgURL: any;

  constructor(private _sanitizer: DomSanitizer) {
    this.localitems = localStorage.getItem("project");
    const data: Project = JSON.parse(this.localitems);
    this.project = data;
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(data.proyectoRutas[2].ruta);
    this.imgURL = this._sanitizer.bypassSecurityTrustResourceUrl(data.proyectoRutas[1].ruta);

    console.log(this.project)
  }

}
