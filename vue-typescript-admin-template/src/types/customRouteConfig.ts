import {RouteConfigMultipleViews, RouteConfigSingleView} from 'vue-router/types/router'

export interface RouteMetaInfo {
  title: string
  icon?: string
  margin?: number
  role?: string | number // It will be bit
}

interface RouteMetaConfigSingleView extends RouteConfigSingleView {
  hidden?: boolean;
  meta?: RouteMetaInfo;
}

interface RouteMetaConfigMultipleViews extends RouteConfigMultipleViews {
  hidden?: boolean;
  meta?: RouteMetaInfo;
  children?: CustomRouteConfig[];
}

export type CustomRouteConfig = RouteMetaConfigSingleView | RouteMetaConfigMultipleViews;

