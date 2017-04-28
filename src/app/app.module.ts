import { RoutesModule } from './routes/routes.module';
import { RouterModule } from '@angular/router';
import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { HomeComponent } from './home/home.component';
import { ForestComponent } from './forest/forest.component';
import { EntropyComponent } from './entropy/entropy.component';
import { GiniComponent } from './gini/gini.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    MainContentComponent,
    HomeComponent,
    ForestComponent,
    EntropyComponent,
    GiniComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RoutesModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
