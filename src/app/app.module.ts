import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicRoutingModule } from './submodules/public/public-routing.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		// PublicRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
