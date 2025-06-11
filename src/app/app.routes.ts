import { Routes } from '@angular/router';
import { Test } from './components/test/test';

export const routes: Routes = [
  { path: '', redirectTo: 'test', pathMatch: 'full' },
  { path: 'test', component: Test }
];
