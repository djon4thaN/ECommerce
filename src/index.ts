import { Product } from "./classes/Product";
import { User } from "./classes/User";

const user1 = new User("isa", "isabella", "isa@gmail.com");
const user2 = new User("djou", "djonathan", "djonathan@gmail.com");

const product1 = new Product("Camisa", 500);

product1.show();
product1.comment("Tecido ótimo!", user1);
product1.comment("Adorei essa camisa!", user2);

product1.rate(5, user1);
product1.rate(3, user2);

product1.showDetails();

user2.addToCart(product1);
user2.removeFromCart(product1);