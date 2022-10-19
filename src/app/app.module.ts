import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Main Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './Partials/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OurProductsComponent } from './pages/our-products/our-products.component';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';
import { FooterComponent } from './Partials/footer/footer.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

// Home Section Components
import { BannerComponent } from './components/Home-Page/banner/banner.component';
import { BrandComponent } from './components/Home-Page/brand/brand.component';
import { CardSectionComponent } from './components/Home-Page/card-section/card-section.component';
import { SliderComponent } from './components/Home-Page/slider/slider.component';
import { NewArrivalsComponent } from './components/Products-Page/new-arrivals/new-arrivals.component';
import { SelectorBarComponent } from './components/Products-Page/selector-bar/selector-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    ContactUsPageComponent,
    OurProductsComponent,
    FooterComponent,
    ErrorPageComponent,
    BannerComponent,
    BrandComponent,
    CardSectionComponent,
    SliderComponent,
    NewArrivalsComponent,
    SelectorBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
