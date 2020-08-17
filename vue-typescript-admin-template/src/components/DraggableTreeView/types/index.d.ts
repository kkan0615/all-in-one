declare module 'DraggableTreeView' {
  export interface DraggableTreeView {
    seq: string;
    seq_parent?: string;
    icon: string;
    name: string;
    description: string;
    children?: Array<DraggableTreeView>;
  }
}
