import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from "@angular/router";

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You have selected department  No.{{activatedRouteId}}</h3>
<!--    <a [routerLink]="'/departments/' + (activatedRouteId - 1)">Previous</a>-->
<!--    <a [routerLink]="'/departments/' + (activatedRouteId + 1)">Next</a>-->

    <p>
      <button (click)="goOverview()">Overview</button>
      <button (click)="goContact()">Contact</button>
    </p>

    <router-outlet></router-outlet>

    <p>
      <button (click)="goPrevious()">Previous</button>
      <button (click)="goNext()">Next</button>
    </p>
    <div>
      <button (click)="goBack()">Back</button>
    </div>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {

  public activatedRouteId;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // Cannot update id when switch from previous or next route, not good
    // this.activatedRouteId = this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.activatedRouteId = parseInt(params.get('id'));
    })
  }

  goPrevious() {
    let previousId = this.activatedRouteId - 1;
    // this.router.navigate(['departments', previousId]);
    this.router.navigate(['../', previousId], {relativeTo: this.route});
  }

  goNext() {
    let nextId = this.activatedRouteId + 1;
    // this.router.navigate(['departments', nextId]);
    this.router.navigate(['../', nextId], {relativeTo: this.route});
  }

  goBack() {
    // this.router.navigate(['departments', {id: this.activatedRouteId}])
    this.router.navigate(['../', {id: this.activatedRouteId}], {relativeTo: this.route})
  }

  goOverview() {
    this.router.navigate(['overview'], {relativeTo: this.route})
  }

  goContact() {
    this.router.navigate(['contact'], {relativeTo: this.route})
  }
}
