import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nodetree',
  templateUrl: './nodetree.component.html',
  styleUrls: ['./nodetree.component.scss']
})
export class NodetreeComponent implements OnInit {
  nodes: Node[];
  nodeName: string;
  nodeChildren: Node[];
  nodeRangeMin: number;
  nodeRangeMax: number;


  constructor() { }

  ngOnInit() {
    this.nodeName = '';
    this.nodeRangeMin = undefined;
    this.nodeRangeMax = undefined;
    this.nodeChildren = undefined;
    this.nodes = [
      {
          name: 'Root',
          rangeMin: 12,
          rangeMax: 20,
          editing: false,
          hasChildren: true,
          showChildren: true,
          children:[
            {
              name: 'Zach',
              rangeMin: 17,
              rangeMax: 30,
              editing: false,
              hasChildren: false,
              showChildren: true,
              children:[]
            },
                {
                  name: '',
                  rangeMin: undefined,
                  rangeMax: undefined,
                  editing: false,
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
      rangeMin: this.nodeRangeMin,
      rangeMax: this.nodeRangeMax, 
      editing: false,
      hasChildren: false,
      showChildren: false,
      children:[]
      })

      this.nodeName = '';
      this.nodeRangeMin = undefined;
      this.nodeRangeMax = undefined;
      this.nodeChildren = undefined;

  }
  deleteNode(name: string): void {
    this.nodes = this.nodes.filter(node => node.name !== name);
  }

  editNode(node: Node): void {
    node.editing = true;
  }

  editDone(node: Node): void {
    node.editing = false;
  }

  toggleChild(node: Node) {
    node.showChildren = !node.showChildren;
  }
}

interface Node {
  name: string;
  rangeMin: number,
  rangeMax: number,
  editing: boolean;
  hasChildren: boolean;
  showChildren: boolean;
  children: Node[];
 
}