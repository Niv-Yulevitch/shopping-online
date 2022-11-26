import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoryModel } from '../models/category.model';
import { ProductModel } from '../models/product.model';
import { categoriesStore } from '../redux/categories.state';
import { ProductsAction, ProductsActionType, productsStore } from '../redux/products.state';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor(private http: HttpClient) { }

    //* Return all the products:
    async getAllProducts(): Promise<ProductModel[]> {
        if (productsStore.getState().products.length === 0) {
            const observable = this.http.get<ProductModel[]>(environment.productsUrl);
            const products = await firstValueFrom(observable);

            const action: ProductsAction = { type: ProductsActionType.FetchProducts, payload: products };
            productsStore.dispatch(action);
        }
        return productsStore.getState().products;
    };

    //* Count products:
    async countProducts(): Promise<number> {
        const observable = this.http.get<number>(environment.productsUrl + "count")
        return await firstValueFrom(observable)
    };

    //* Get all categories:
    async getAllCategories(): Promise<CategoryModel[]> {
        if (categoriesStore.getState().categories.length === 0) {
            const observable = this.http.get<CategoryModel[]>(environment.categoriesUrl);
            const categories = await firstValueFrom(observable);

            const action: ProductsAction = { type: ProductsActionType.FetchProducts, payload: categories };
            productsStore.dispatch(action);
        }
        return categoriesStore.getState().categories;
    };

    //* Adding new product:
    async addProduct(product: ProductModel): Promise<ProductModel> {
        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('price', product.price.toString());
        formData.append('categoryId', product.categoryId);
        formData.append('image', product.image);

        const observable = this.http.post<ProductModel>(environment.productsUrl, formData);
        const addedProduct = await firstValueFrom(observable);
        
        const action: ProductsAction = { type: ProductsActionType.AddProduct, payload: addedProduct};
        productsStore.dispatch(action);
        
        return addedProduct;
    };

    // //* Update exist product:
    async updateProduct(product: ProductModel): Promise<ProductModel> {
        const formData = new FormData();
        formData.append('_id', product._id);
        formData.append('name', product.name);
        formData.append('price', product.price.toString());
        formData.append('categoryId', product.categoryId);
        formData.append('image', product.image);

        const observable = this.http.put<ProductModel>(environment.productsUrl + product._id, formData);
        const updatedProduct = await firstValueFrom(observable);
        
        const action: ProductsAction = { type: ProductsActionType.UpdateProduct, payload: updatedProduct};
        productsStore.dispatch(action);
        
        return updatedProduct;
    }
}