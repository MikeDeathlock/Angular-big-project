import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { ImageCropperModule } from 'ngx-image-cropper';
import { TranslateModule } from "@ngx-translate/core";

import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccountMentorComponent } from './components/account-mentor/account-mentor.component';
import { AccountMenteeComponent } from './components/account-mentee/account-mentee.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { AccountComponent } from './account.component';
import { TokenInterceptor } from 'src/app/core/interceptors/token.interceptor';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: true,
  };
};
@NgModule({
  declarations: [
    AccountComponent,
    AccountMentorComponent,
    AccountMenteeComponent,
    // AccountSettingsComponent,
    MainSectionComponent
  ],
  imports: [
    SharedModule,
    MatChipsModule,
    MatSelectModule,
    MatSnackBarModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfigFunction),
    AccountRoutingModule,
    MatChipsModule,
    ImageCropperModule,
    HttpClientModule,
    TranslateModule
  ],
  providers: [ {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    }],
})
export class AccountModule {}
