import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AccordionModule } from "primeng/accordion";
import { AccordionComponent } from "./accordion/accordion.component";

@NgModule({
  imports: [BrowserModule, FormsModule, AccordionModule],
  declarations: [AppComponent, AccordionComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
