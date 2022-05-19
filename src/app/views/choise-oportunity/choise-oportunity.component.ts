import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/shared/services/proyectos.service';

@Component({
  selector: 'app-choise-oportunity',
  templateUrl: './choise-oportunity.component.html',
  styleUrls: ['./choise-oportunity.component.scss']
})
export class ChoiseOportunityComponent implements OnInit {

  public projects: any;

  constructor(private proyectosService: ProyectosService) { }

  ngOnInit(): void {

    this.proyectosService.getProjects().subscribe(res => {
      this.projects = res.map((element: any) => {
        element.avanceInversion.porcentaje = parseInt(element.avanceInversion.porcentaje, 10)
        return element
      });
    }
    );

  }

  handleViewMore(project: any) {
    localStorage.setItem('project', JSON.stringify(project));
    window.open('/viewProject', '_blank')
  }

}
