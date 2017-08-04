import {Component, OnInit, Input} from '@angular/core';
import {FormData} from "../../../domain/service-view-bean";
import {Messages} from "../../messages";
import {AbstractRegisteredService} from "../../../domain/registered-service";
import {
  CachingPrincipalAttributesRepository,
  DefaultPrincipalAttributesRepository
} from "../../../domain/attribute-repo";
import {Data} from "../data";

enum Type {
  DEFAULT,
  CACHING,
}

@Component({
  selector: 'app-attribute-release-principal-repo',
  templateUrl: './attribute-release-principal-repo.component.html',
  styleUrls: ['./attribute-release-principal-repo.component.css']
})
export class AttributeReleasePrincipalRepoComponent implements OnInit {
  service: AbstractRegisteredService;
  formData: FormData;
  type: Type;
  TYPE = Type;
  timeUnits = ["MILLISECONDS","SECONDS","MINUTES","HOURS","DAYS"];
  mergeStrategies = ["NONE","ADD","MULTIVALUED","REPLACE"];

  constructor(public messages: Messages,
              private data: Data) {
    this.service = data.service;
    this.formData = data.formData;
  }

  ngOnInit() {
    if (DefaultPrincipalAttributesRepository.instanceOf(this.service.attributeReleasePolicy.principalAttributesRepository)) {
      this.type = Type.DEFAULT;
    } else if (CachingPrincipalAttributesRepository.instanceOf(this.service.attributeReleasePolicy.principalAttributesRepository)) {
      this.type = Type.CACHING;
    }
  }

  changeType() {
    switch(+this.type) {
      case Type.DEFAULT :
        this.service.attributeReleasePolicy.principalAttributesRepository = new DefaultPrincipalAttributesRepository();
        break;
      case Type.CACHING :
        this.service.attributeReleasePolicy.principalAttributesRepository = new CachingPrincipalAttributesRepository();
        break;
    }
  }

}
