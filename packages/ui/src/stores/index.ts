import { useNotificationStore, useWebSocketStore } from './message';
import { useApplicationStore } from './application';
import { useAuthenticationStore } from './authentication';
import { useConstantsStore } from './constants';
import { useRouteStore } from './route';
import { useCryptoStore } from './crypto';
import { useSettingsStore } from './settings';
import { useTabsStore } from './tabs';

import { variables } from '@/lib/utils';

export const clearPersistData = () => {
  console.log('Clear Persist Data');
  useAuthenticationStore().$reset();
  useConstantsStore().$reset();
  useCryptoStore().$reset();
};

export const getSystemHeaders = () => {
  const authentication = useAuthenticationStore();
  const crypto = useCryptoStore();
  const token = authentication.access_token;
  const sessionId = crypto.sessionId;

  const headers = {} as Record<string, string>;

  if (token) {
    headers['Authorization'] = 'Bearer ' + token;
  }

  if (sessionId) {
    headers['X-Herodotus-Session-Id'] = sessionId;
  }

  const tenantId = variables.getCurrentTenantId();
  if (tenantId) {
    headers['X-Herodotus-Tenant-Id'] = tenantId;
  }

  return headers;
};

export {
  useNotificationStore,
  useWebSocketStore,
  useApplicationStore,
  useAuthenticationStore,
  useConstantsStore,
  useRouteStore,
  useCryptoStore,
  useSettingsStore,
  useTabsStore,
};
