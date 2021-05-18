import { LabelPresentType } from 'Modules/videos/models/types';

export type TimeWithMarkerPropsType = {
  played: number;
  incidents: LabelPresentType[];
  onClick: (nFps: number) => void;
  selectedLabel: string;
  duration: number;
};