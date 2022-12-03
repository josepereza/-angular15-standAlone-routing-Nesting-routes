import { Route } from '@angular/router';

export const ADMIN_ROUTES: Route[] = [
  {
    path: 'admin-one',
    loadComponent: () =>
      import('../admin/admin1/admin1.component').then(
        (component) => component.Admin1Component
      ),
  },
  {
    path: 'admin-two',
    loadComponent: () =>
    import('../admin/admin2/admin2.component').then(
        (component) => component.Admin2Component
      ),
  },
  {
    path: 'admin-three',
    loadComponent: () =>
    import('../admin/admin3/admin3.component').then(
        (component) => component.Admin3Component
      ),
  },
  { path: '', redirectTo: 'admin-one', pathMatch: 'full' },
];