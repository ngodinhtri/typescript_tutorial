import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";

import { HasFormatter } from "./interfaces/HasFormatter.js";
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
const form = document.querySelector("#new-item-form") as HTMLFormElement;
//inputs
const type = form.querySelector("#type") as HTMLSelectElement;
const toFrom = form.querySelector("#tofrom") as HTMLInputElement;
const details = form.querySelector("#details") as HTMLInputElement;
const amount = form.querySelector("#amount") as HTMLInputElement;
const ulList = document.querySelector(".item-list") as HTMLUListElement;
const list = new ListTemplate(ulList);

//form events
//--submit
form.onsubmit = (e: Event) => {
  e.preventDefault();

  //Tuples
  let values: [string, string, number];
  values = [toFrom.value, details.value, amount.valueAsNumber];

  let doc: HasFormatter;

  if (type.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }

  list.render(doc, type.value, "end");
};

type Person = {
  name: string;
  age: number;
};
type Animal = {
  name: string;
  leg: number;
  age: number;
};

//Generic
const addUID = <T extends Person>(user: T) => {
  let uid = Math.round(Math.random() * 100);
  return { ...user, uid };
};

const docOne = addUID({ name: "John", age: 20 });
console.log(docOne.uid);

interface Resource<T> {
  uid: number;
  resourceType: number;
  data: T;
}

//Enums
enum ResourceType {
  PERSON,
  ANIMAL,
  BOOK,
  FILM
}

const docTwo: Resource<Person> = {
  uid: 20,
  resourceType: ResourceType.PERSON,
  data: { name: "Random", age: 11 }
};
const docThree: Resource<Animal> = {
  uid: 11,
  resourceType: ResourceType.ANIMAL,
  data: { name: "dog", leg: 4, age: 11 }
};

const docFour: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: { name: "Homo Deus" }
};

const docFive: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.FILM,
  data: { name: "Captain America" }
};

console.log(docFour, docFive);
