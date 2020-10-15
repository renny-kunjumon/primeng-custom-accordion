import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AccordionModule } from "primeng/accordion";
import { AccordionComponent } from "./accordion/accordion.component";
import { AccordionTabComponent } from "./accordion/accordion-tab/accordion-tab.component";

@NgModule({
  imports: [BrowserModule, FormsModule, AccordionModule],
  declarations: [AppComponent, AccordionComponent, AccordionTabComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
