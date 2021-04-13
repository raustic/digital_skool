import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'class',
    loadChildren:()=>import('./master/class/class.module').then(module=>module.ClassModule)
  },
  {
    path: 'section',
    loadChildren:()=>import('./master/section/section.module').then(module=>module.SectionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
