import { ErrorPagesServices } from './../../core/services/error-pages.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  MentorService } from 'src/app/core';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mentor-details',
  templateUrl: './mentor-details.component.html',
  styleUrls: ['./mentor-details.component.scss']
})

export class MentorDetailsComponent implements OnInit, OnDestroy {
  mentor: any;
  mentorSubscription!: Subscription;
  idMentor!:number
  constructor(
    private mentorService: MentorService,
    private route: ActivatedRoute,
    private errorPagesServices: ErrorPagesServices,

  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.idMentor = id;
   
    this.mentorSubscription = this.mentorService.getMentorById(id).subscribe(
      (mentor: any) => {
        this.mentor = mentor;
      },
      (error) => {
        this.errorPagesServices.checkError(error)
      }
    )
  }

  ngOnDestroy(): void {
    this.mentorSubscription.unsubscribe();
  }
 }
