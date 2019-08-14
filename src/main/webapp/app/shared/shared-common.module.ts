import { NgModule } from '@angular/core';

import { DehSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [DehSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [DehSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class DehSharedCommonModule {}
