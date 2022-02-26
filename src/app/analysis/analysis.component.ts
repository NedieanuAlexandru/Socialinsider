import { Component, OnInit } from '@angular/core';
import { AnalysisService } from '../analysis.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css'],
})
export class AnalysisComponent implements OnInit {
  constructor(private analysisService: AnalysisService) {}

  ngOnInit(): void {}

  public addAnalysis(): void {
    this.analysisService
      .getConnection()
      .subscribe((result) => console.log('yes'));
  }
}
