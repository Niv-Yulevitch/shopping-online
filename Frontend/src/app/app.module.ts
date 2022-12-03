import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { HeaderComponent } from './components/layout-area/header/header.component';
import { MenuComponent } from './components/layout-area/menu/menu.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/layout-area/footer/footer.component';
import { AuthMenuComponent } from './components/auth-area/auth-menu/auth-menu.component';
import { LogoutComponent } from './components/auth-area/logout/logout.component';
import { ShoppingInfoComponent } from './components/home-area/shopping-info/shopping-info.component';
import { LoginComponent } from './components/auth-area/login/login.component';
import { MaterialModule } from './material/material.module';
import { RegisterBothStepsComponent } from './components/auth-area/register-both-steps/register-both-steps.component';
import { RegisterStepOneComponent } from './components/auth-area/register-step-one/register-step-one.component';
import { RegisterStepTwoComponent } from './components/auth-area/register-step-two/register-step-two.component';
import { AboutComponent } from './components/home-area/about/about.component';
import { ShoppingComponent } from './components/shopping-area/shopping/shopping.component';
import { CartListComponent } from './components/shopping-area/cart-area/cart-list/cart-list.component';
import { ProductsListComponent } from './components/shopping-area/products-area/products-list/products-list.component';
import { ProductsCardComponent } from './components/shopping-area/products-area/products-card/products-card.component';
import { CategoriesListComponent } from './components/shopping-area/products-area/categories-list/categories-list.component';
import { CartDialogComponent } from './components/shopping-area/cart-area/cart-dialog/cart-dialog.component';
import { JwtInterceptor } from './services/jwt.interceptor';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    PageNotFoundComponent,
    AuthMenuComponent,
    LogoutComponent,
    AboutComponent,
    ShoppingInfoComponent,
    LoginComponent,
    RegisterStepOneComponent,
    RegisterStepTwoComponent,
    RegisterBothStepsComponent,
    ShoppingComponent,
    CartListComponent,
    ProductsListComponent,
    ProductsCardComponent,
    CategoriesListComponent,
    CartDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [{
    useClass: JwtInterceptor,
    provide: HTTP_INTERCEPTORS,
    multi: true
  }],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
