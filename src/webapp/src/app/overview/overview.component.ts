import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Protocol } from '../protocol';
import { ProtocolService } from '../protocol.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(private protocolService: ProtocolService) { }

  ngOnInit(): void {
    this.getProtocols();
  }
  protocols: Protocol[] = [];
  displayedColumns: string[] = ['protocolId', 'name', 'fileName', 'drawingNumber', 'partNumber', 'orderNumber', 'workpieceName', 'softwareVersion', 'operatorName', 'cmmNumber', 'measuredOn'];

  getProtocols(): void {
    this.protocolService.getProtocols().subscribe(protocolResponse => {
      this.protocols = protocolResponse.protocols;
      console.log(this.protocols);
    });
  }
}
