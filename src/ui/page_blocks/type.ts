export type TChartData = {
  datasetOne: number[];
  datasetTwo: number[];
};

export type TChartResponse = {
  data: TChartData;
  status: 'success' | 'error';
  message: string;
};
