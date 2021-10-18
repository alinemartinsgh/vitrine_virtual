import {format} from 'date-fns';

export const formatarData = (data: Date) => {
  return format(data, 'yyyy-MM-dd');
};

export const formatarData2 = (data: string) => {
  return new Date(data).toISOString();
};
