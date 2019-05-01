import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing.module';
import { routing, appRoutingProviders } from './app.routing.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './index/home.component';
import { CategoriasComponent } from './categorias/categorias.conponent';
import { VideoComponent } from './detalle/video.component';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriasComponent,
    VideoComponent
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
