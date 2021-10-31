import { Component, OnInit } from '@angular/core';
import { ModeratorService } from '../../moderator.service';
import { Moderator } from '../../moderator.model';
import { ErrorPagesServices } from 'src/app/core/services/error-pages.service';
import { SigninService } from 'src/app/auth/signin/signin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moderator-navigation',
  templateUrl: './moderator-navigation.component.html',
  styleUrls: ['./moderator-navigation.component.scss']
})
export class ModeratorNavigationComponent implements OnInit {
  moderator!:Moderator;

  constructor(
    private moderatorService: ModeratorService, 
    private errorPagesServices: ErrorPagesServices,
    private signinService: SigninService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.moderatorService.getModerator().subscribe(data => {      
      this.moderatorService.moderator = data;  
      this.moderator = this.moderatorService.moderator;
    },
      (error) => {
        this.errorPagesServices.checkError(error)
      })
  }

  onLogOut() {
    this.signinService.logout();
    this.router.navigate(['/'])
  }
}
