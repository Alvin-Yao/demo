import {Component} from "@angular/core";
import {Language} from "./entities/root/Language";

@Component({
	selector: "my-app",
	templateUrl: "/app/templates/root/index.html"
})

export class Appcomponent{
	app = {
		name: 'Alvin',
		discreption: 'this value is for binding',
		languages: [
			new Language("java"),
			new Language("c"),
			new Language("python")
		]
	};

	clickMe = (name) => {
		alert('Hello ' + name);
	};
}