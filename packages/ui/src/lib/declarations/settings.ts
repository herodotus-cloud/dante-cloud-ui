import { ThemeModeEnum, LayoutModeEnum } from '@/lib/enums';

import type { QTableSeparatorProps } from './base';

export interface Theme {
  mode: ThemeModeEnum;
  primary: string;
}

export interface Effect {
  isUniqueOpened: boolean;
}

export interface TableDisplay {
  separator: QTableSeparatorProps;
  dense: boolean;
}

export interface Display {
  isTabsView: boolean;
  isActivateLeftTab: boolean;
  showBreadcrumbs: boolean;
  showBreadcrumbsIcon: boolean;
  table: TableDisplay;
}

export interface GlobalSetting {
  theme: Theme;
  layout: LayoutModeEnum;
  effect: Effect;
  display: Display;
}
