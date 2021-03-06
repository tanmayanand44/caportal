import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule, MatCardModule, MatSnackBarModule, MatDividerModule, MatTabsModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AppComponent} from './app-component/app.component';
import {BannerComponent} from './homepage/components/banner/banner.component';
import {PropertiesComponent} from './homepage/components/properties/properties.component';
import {HeaderComponent} from './homepage/components/header/header.component';
import {ContactComponent} from './homepage/components/contact/contact.component';
import {RespComponent} from './homepage/components/resp/resp.component';
import {AboutComponent} from './homepage/components/about/about.component';
import {NavbarComponent} from './navbar/navbar.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HomeComponent} from './dashboard/components/home/home.component';
import {LeaderboardComponent} from './dashboard/components/leaderboard/leaderboard.component';
import {IdeasComponent} from './dashboard/components/ideas/ideas.component';
import {AppRoutingModule} from './app-routing.module';
import {LandingComponent} from './homepage/components/landing/landing.component';
import {UiService} from './services/ui.service';
import {AngularFireModule} from 'angularfire2';
import {Funcs} from './utility/function';

import {AngularFirestoreModule} from 'angularfire2/firestore';
import {environment} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {AnalyticsDirective} from './directives/analytics.directive';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    PropertiesComponent,
    HeaderComponent,
    ContactComponent,
    RespComponent,
    AboutComponent,
    NavbarComponent,
    DashboardComponent,
    HomeComponent,
    LeaderboardComponent,
    IdeasComponent,
    LandingComponent,
    AnalyticsDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // material
    MatSidenavModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    HttpClientModule,
    MatDividerModule,
    MatTabsModule,
    AngularFirestoreModule,
    // other
    AppRoutingModule,
    FlexLayoutModule,
  ],
  providers: [UiService, Funcs],
  bootstrap: [AppComponent]
})
export class AppModule {
}
