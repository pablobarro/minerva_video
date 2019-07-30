import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing.module';
import { routing, appRoutingProviders } from './app.routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { FilterPipe } from './pipes/filterPipe';
import { HttpClientModule } from '@angular/common/http';
// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './index/home.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriaComponent } from './categoria_detalle/categoria.component';
import { VideosComponent } from './videos/videos.component';
import { VideoComponent } from './detalle/video.component';
import { EditorComponent } from './formularios/editor.component';
import { BuscadorComponent } from './buscador/buscador.component';


@NgModule({
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    routing,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriasComponent,
    CategoriaComponent,
    VideosComponent,
    VideoComponent,
    EditorComponent,
    BuscadorComponent,
    FilterPipe
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
