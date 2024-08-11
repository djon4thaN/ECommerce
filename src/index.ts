import { Product } from "./classes/Product";
import { User } from "./classes/User";

const user1 = new User("Derek Owens", "Haiti", "gu@ikigade.bg");
const user2 = new User("Owen Joseph", "Guernsey", "amehe@lulozaol.ir");
const user3 = new User("Madge Baldwin", "Palestinian Territories", "jutat@ufilo.cg");
const product1 = new Product("Calça", 500);

product1.show();
product1.comment("Essa calça é muito boa", user1);
product1.comment("Essa calça é muito cara", user2);
product1.comment("Essa calça é péssima", user3);

product1.rate(5, user1);
product1.rate(3, user2);
product1.rate(1, user3);

product1.showDetails();
