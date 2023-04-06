import { Component, Input, ViewChild } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SkillsComponent } from '../skills/skills.component';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	providers: [NgbModalConfig, NgbModal],
	styleUrls: ['./modal.component.css']
})

export class ModalComponent {
	// @Input() childTitle!: string;
	// @Input() parentMessage!: string;
	// @Input() parentTitle: string = this.childTitle;

	login!: any;

	//Ejemplo
    
	mostrarSw!: any;
	mostrarBtn!: any;

	constructor(config: NgbModalConfig,
		private modalService: NgbModal) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}

	open(content: any) {
		this.modalService.open(content);
	}


	// ngAfterViewInit() {
	// 	this.parentTitle = this.login.parentTitle;
	// }

	// openEdit(contentEdit: any) {
	// 	this.modalService.open(contentEdit);
	// }

}
