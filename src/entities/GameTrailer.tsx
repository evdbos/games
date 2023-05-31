export interface GameTrailer {
  id: number;
  name: string;
  preview: string;
  data: dataResult;
}

export interface dataResult {
  480: string;
  max: string;
}
