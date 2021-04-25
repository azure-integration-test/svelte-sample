import { ContainerType, LocalSvelteComponent } from './shared';

declare type Placement = 'start' | 'end' | 'bottom'; // TODO support left & right alias

export interface OffcanvasProps {
  backdrop?: boolean;
  container?: ContainerType;
  header?: string;
  isOpen: boolean;
  placement?: Placement;
  scroll?: boolean;
  toggle?: () => void;
}

declare class Offcanvas extends LocalSvelteComponent<OffcanvasProps> {}
export default Offcanvas;