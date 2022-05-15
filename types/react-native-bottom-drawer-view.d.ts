interface BottomDrawerProps {
  containerHeight: number;
  offset: number;
  downDisplay: number;
  backgroundColor: string;
  startUp: boolean;
  roundedEdges: boolean;
  shadow: boolean;
  onExpanded: () => void;
  onCollapsed: () => void;
  borderRadius: number;
  borderBottomLeftRadius: number;
  borderBottomRightRadius: number;
  borderTopLeftRadius: number;
  borderTopRightRadius: number;
}

declare module 'react-native-bottom-drawer' {
  const BottomDrawer;
  export default BottomDrawer;
}

declare namespace JSX {
  interface IntrinsicElements {
    BottomDrawer: any;
  }
}
