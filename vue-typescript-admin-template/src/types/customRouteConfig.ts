import { RouteConfigMultipleViews, RouteConfigSingleView } from 'vue-router/types/router'

export type menuType = 'desktop' | 'mobile' | 'touch'

export interface RouteMetaInfo {
  title: string;
  menuType: menuType;
  isForGroup: boolean; // For the group like folder
  icon?: string;
  margin?: number;
  role?: string | number; // It will be bit
  description?: string;
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

