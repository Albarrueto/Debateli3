import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  
  {
    path: 'elementos',
    loadChildren: () => import('./pages/elementos/elementos.module').then( m => m.ElementosPageModule)
  },
  
  {
    path: 'feriados',
    loadChildren: () => import('./pages/feriados/feriados.module').then( m => m.FeriadosPageModule)
  },
  {
    path: 'registrate',
    loadChildren: () => import('./pages/registrate/registrate.module').then( m => m.RegistratePageModule)
  },
  {
    path: 'inicio-sesion',
    loadChildren: () => import('./pages/inicio-sesion/inicio-sesion.module').then( m => m.InicioSesionPageModule)
  },
  {
    path: 'menu-usuario',
    loadChildren: () => import('./pages/menu-usuario/menu-usuario.module').then( m => m.MenuUsuarioPageModule)
  },
  {
    path: 'pruebas',
    loadChildren: () => import('./pages/pruebas/pruebas.module').then( m => m.PruebasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
