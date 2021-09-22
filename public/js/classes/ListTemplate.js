export class ListTemplate {
    constructor(ul) {
        this.ul = ul;
    }
    render(item, heading, pos) {
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        h4.innerText = heading;
        li.append(h4);
        li.append(item.format());
        if (pos === "start") {
            this.ul.prepend(li);
        }
        else {
            this.ul.append(li);
        }
    }
}
