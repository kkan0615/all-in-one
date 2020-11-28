export interface ChartOption {
  _id: string; // used with Database, as key
  key: string; // used in HTML
  title: string;
  height?: string;
  width?: string;
  xl?: number;
  lg?: number;
  md?: number;
  option: echarts.EChartOption;
}
