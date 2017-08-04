import {Component, OnInit, Input} from '@angular/core';
import {FormData} from "../../../domain/service-view-bean";
import {Messages} from "../../messages";
import {AbstractRegisteredService} from "../../../domain/registered-service";
import {Data} from "../data";

@Component({
  selector: 'app-attribute-release-checks',
  templateUrl: './attribute-release-checks.component.html',
  styleUrls: ['./attribute-release-checks.component.css']
})
export class AttributeReleaseChecksComponent implements OnInit {
  service: AbstractRegisteredService;

  constructor(public messages: Messages,
              private data: Data) {
    this.service = data.service;
  }

  ngOnInit() {
  }

}
