import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DehSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [DehSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [DehSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DehSharedModule {
  static forRoot() {
    return {
      ngModule: DehSharedModule
    };
  }
}
