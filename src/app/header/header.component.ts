import { Component, EventEmitter, Output } from "@angular/core";
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    @Output() navigateEvent = new EventEmitter<string>() 
    navigateLink: string = '';
    collapsed = true;
    viewDropdown = false

    onNavigate(e:string) {
        this.navigateLink = e
        this.navigateEvent.emit(this.navigateLink)
    }
}