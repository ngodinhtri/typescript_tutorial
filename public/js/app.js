import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
// const doc1: HasFormatter = new Invoice("a", "b", 1);
// const doc2: HasFormatter = new Payment("a", "b", 2);
// let docs: HasFormatter[] = [];
// docs.push(doc1);
// docs.push(doc2);
// interface Person {
//   name: string;
//   age: number;
//   speak?(story?: string): void;
//   spend(money: number): number;
// }
// const me: Person = {
//   name: "Trí",
//   age: 20,
//   spend(money: number) {
//     return money;
//   }
// };
// const invoices: Invoice[] = [];
// const inv1 = new Invoice("a", "b", 1);
// const inv2 = new Invoice("c", "d", 2);
// invoices.push(inv1, inv2);
// console.log(invoices);
//form
const form = document.querySelector("#new-item-form");
//inputs
const type = form.querySelector("#type");
const toFrom = form.querySelector("#tofrom");
const details = form.querySelector("#details");
const amount = form.querySelector("#amount");
const ulList = document.querySelector(".item-list");
const list = new ListTemplate(ulList);
//form events
//--submit
form.onsubmit = (e) => {
    e.preventDefault();
    //Tuples
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
};
//Generic
const addUID = (user) => {
    let uid = Math.round(Math.random() * 100);
    return Object.assign(Object.assign({}, user), { uid });
};
const docOne = addUID({ name: "John", age: 20 });
console.log(docOne.uid);
//Enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["PERSON"] = 0] = "PERSON";
    ResourceType[ResourceType["ANIMAL"] = 1] = "ANIMAL";
    ResourceType[ResourceType["BOOK"] = 2] = "BOOK";
    ResourceType[ResourceType["FILM"] = 3] = "FILM";
})(ResourceType || (ResourceType = {}));
const docTwo = {
    uid: 20,
    resourceType: ResourceType.PERSON,
    data: { name: "Random", age: 11 }
};
const docThree = {
    uid: 11,
    resourceType: ResourceType.ANIMAL,
    data: { name: "dog", leg: 4, age: 11 }
};
const docFour = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { name: "Homo Deus" }
};
const docFive = {
    uid: 1,
    resourceType: ResourceType.FILM,
    data: { name: "Captain America" }
};
console.log(docFour, docFive);
