export const LOADING_VISIBLE_EVENT_BUS_KEY = 'LOADING_VISIBLE'

export interface EventbusKeys {
  loading: {
    visible: string;
  };
}

export const eventbusKeys: EventbusKeys = {
  loading: {
    visible: 'loadingVisible',
  }
}
