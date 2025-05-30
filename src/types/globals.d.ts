// biome-ignore-all lint/suspicious/noExplicitAny : type definitions

// Declare the shape of the window.PS object
interface PS {
  addRoomType: (panel: any) => void; // Use 'any' or a more specific type for the panel
  join: (roomId: string | RoomID) => void;
  // Add other properties/methods of window.PS that you use
}

interface Window {
  PS: PS;
}

// Stub for PSRoom - Declared globally
declare class PSRoom {
  readonly roomid: string; // Or RoomID if you have a specific alias
  title: string;
  constructor(options: any); // Use 'any' or a more specific RoomOptions
  // Add other relevant properties and methods that your code uses
}

// Stub for PSRoomPanel - Declared globally
declare class PSRoomPanel<TProps = any, TState = any> {
  static id: string;
  static location?: string;
  static routes: string[];
  static title: string;
  readonly props: TProps;
  readonly state: TState;

  constructor(props: TProps);
  render(): JSX.Element; // Or `any`
  // Add other relevant lifecycle methods if needed (e.g., componentDidMount)
}

// Stub for PSPanelWrapper - Declared globally
declare function PSPanelWrapper(props: {
  room: PSRoom;
  children?: any;
}): JSX.Element; // Or `any`

// Global type aliases if needed
type RoomID = string;
type RoomOptions = any;

// Add this if you are using JSX in a global context without importing React/Preact
// This helps TypeScript understand JSX syntax globally
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
