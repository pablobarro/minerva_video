import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing.module';
import { routing, appRoutingProviders } from './app.routing.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './index/home.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriaComponent } from './categoria_detalle/categoria.component';
import { VideoComponent } from './detalle/video.component';
import { EditorComponent } from './formularios/editor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriasComponent,
    CategoriaComponent,
    VideoComponent,
    EditorComponent
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
