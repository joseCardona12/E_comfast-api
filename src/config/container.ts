import { container } from "tsyringe";
import AuthRepository from "../repositories/authRepository";
import AuthService from "../services/authServices";
import OrderRepository from "../repositories/orderRepository";
import OrderService from "../services/orderService";
import UserRepository from "../repositories/userRepository";
import UserService from "../services/userService";
import ProductRepository from "../repositories/productRepository";
import ProductService from "../services/productService";


container.registerSingleton<AuthRepository>(AuthRepository);
container.registerSingleton<AuthService>(AuthService);
container.registerSingleton<OrderRepository>(OrderRepository);
container.registerSingleton<OrderService>(OrderService);
container.registerSingleton<UserRepository>(UserRepository);
container.registerSingleton<UserService>(UserService);
container.registerSingleton<ProductRepository>(ProductRepository);
container.registerSingleton<ProductService>(ProductService);