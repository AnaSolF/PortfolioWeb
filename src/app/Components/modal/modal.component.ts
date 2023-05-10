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
	login!: any;
	constructor(config: NgbModalConfig,
		private modalService: NgbModal) {
		config.backdrop = 'static';
		config.keyboard = false;
	}

	open(content: any) {
		this.modalService.open(content);
	}
}
