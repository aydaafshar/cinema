export interface Image {
  id: number;
  main: boolean;
  resolutions: {
    original: {
      url: string;
      width: number;
      height: number;
    };
    medium: {
      url: string;
      width: number;
      height: number;
    };
  };
}
