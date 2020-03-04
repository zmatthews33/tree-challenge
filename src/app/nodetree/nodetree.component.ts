import { Component, OnInit } from '@angular/core';
import { i18nMetaToDocStmt } from '@angular/compiler/src/render3/view/i18n/meta';

@Component({
  selector: 'nodetree',
  templateUrl: './nodetree.component.html',
  styleUrls: ['./nodetree.component.scss']
})
export class NodetreeComponent implements OnInit {
  nodes: Node[];
  nodeName: string;



  constructor() { }

  ngOnInit() {
    this.nodeName = '';
    this.nodes = [
      {
          name: 'Root',
          range: '12,27', 
          hasChildren: true,
          showChildren: true,
          children:[
                {
                  name: '',
                  range: '', 
                  hasChildren: false,
                  showChildren: true,
                  children:[]
                },

            
          
        ]
      }
    ]
  }
  addNode(): void {
    if(this.nodeName.trim().length === 0) {
      return;
    }

    this.nodes.push({
      name: this.nodeName,
      range: '', 
      hasChildren: false,
      showChildren: false,
      children:[]
      })

      this.nodeName = '';
  }
  deleteNode(name: string): void {
    this.nodes = this.nodes.filter(node => node.name !== name);
  }
}

interface Node {
  name: string;
  range: string;
  hasChildren: boolean;
  showChildren: boolean;
  children: any[];


}