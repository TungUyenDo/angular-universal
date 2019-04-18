import { Component, OnInit,ElementRef, ViewChild,TemplateRef,ViewContainerRef } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  isBool:boolean = false;

  constructor(
    private heroService: HeroService, 
    private elementRef  : ElementRef,
    public viewContainerRef: ViewContainerRef
  ) { }

  @ViewChild("TemplateRef") TemplateRef: TemplateRef<any>;

  ngAfterViewInit() {
    console.log('TemplateRef',this.TemplateRef)
    console.log('viewContainerRef',this.viewContainerRef);

    this.viewContainerRef.createEmbeddedView(this.TemplateRef);

    console.log('viewContainerRef',this.viewContainerRef);
  }

  ngOnInit() {
    this.getHeroes();
    console.log('elementRef',this.elementRef)
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
