import {Component} from "@angular/core";

@Component({
	selector: "my-app",
	templateUrl: "/app/templates/root/index.html"
})

export class Appcomponent{
	app = {
		name: 'Alvin',
		discreption: 'this value is for binding'
	};

	clickMe = (name) => {
		alert('Hello ' + name);
	};
}