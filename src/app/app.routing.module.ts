import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes

import { HomeComponent } from './index/home.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriaComponent } from './categoria_detalle/categoria.component';
import { VideoComponent } from './detalle/video.component';



const appRoutes: Routes = [
    {path: '',
    redirectTo: '/home',
    pathMatch: 'full' },
    {path: 'video_detalle/:id', component: VideoComponent},
    {path: 'categorias', component: CategoriasComponent},
    {path: 'categoria_detalle/:name', component: CategoriaComponent},
    {path: '**', component: HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}

export const appRoutingProviders: any [] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
