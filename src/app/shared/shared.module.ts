import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {LayoutModule} from "@angular/cdk/layout";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatBadgeModule} from "@angular/material/badge";
import {MatMenuModule} from "@angular/material/menu";
import {MatGridListModule} from "@angular/material/grid-list";
import {HeaderComponent} from "./layout/header/header.component";
import {MainListComponent} from "../main-list/main-list.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatTooltipModule} from "@angular/material/tooltip";
import {HttpClientModule} from "@angular/common/http";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    HeaderComponent,
    MainListComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatTooltipModule,
    HttpClientModule,
    MatButtonModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule, MatIconModule, MatBadgeModule, MatMenuModule, MatGridListModule, MatToolbarModule, RouterModule, MatProgressBarModule, MatCardModule
  ],
  exports: [HeaderComponent, MatIconModule,
    MatButtonModule,
    LayoutModule,
    RouterModule]
})
export class SharedModule { }
