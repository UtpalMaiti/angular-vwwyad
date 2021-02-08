import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <kendo-autocomplete
      #AUTO
      [data]="listItems"
      [valueField]="'text'"
      (click)="onclick(AUTO)"
      [placeholder]="'e.g. Andorra'"
    >
    </kendo-autocomplete>
  `
})
export class AppComponent {
  public listItems: Array<{ text: string; value: string }> = [
    { text: "Albania", value: "Alb" },
    { text: "Andorra", value: "And" },
    { text: "Armenia", value: "Arm" },
    { text: "Austria", value: "Aus" },
    { text: "Azerbaijan", value: "Aze" }
  ];
  onclick(AUTO) {
    console.log(AUTO);
  }
}
