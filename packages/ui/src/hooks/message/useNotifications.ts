import type { Ref } from 'vue';
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import type { NotificationEntity, NotificationConditions, Sort, Page } from '/@/lib/declarations';

import { NotificationCategoryEnum } from '/@/lib/enums';
import { api, moment } from '/@/lib/utils';
import { useAuthenticationStore, useNotificationStore } from '/@/stores';

export default function useNotifications(category: NotificationCategoryEnum) {
  const firstPageNumber = 1;
  /**
   * 排序
   */
  const sort: Sort = { direction: 'DESC', properties: ['createTime'] };
  /**
   * 实际的数据
   */
  const items = ref([]) as Ref<NotificationEntity[]>;
  /**
   * 总的数据条目数量
   */
  const totalItems = ref(0);
  const currentPageNumber = ref(firstPageNumber);
  const notificationStore = useNotificationStore();

  const { hasDialogue, hasAnnouncement, totalCount, dialogueCount, announcementCount } =
    storeToRefs(notificationStore);
  const authenticationStore = useAuthenticationStore();

  const findItemsByPage = (number: number) => {
    currentPageNumber.value = number;
    api
      .notification()
      .fetchByPage(
        {
          pageNumber: number - 1,
          pageSize: 5,
          ...sort,
        },
        {
          userId: authenticationStore.userId,
          category: category,
          read: false,
        } as NotificationConditions,
      )
      .then((result) => {
        const data = result.data as Page<NotificationEntity>;
        // 用户文档列表中无结果时也要更新列表数据
        if (data) {
          items.value = data.content;
          totalItems.value = parseInt(data.totalElements, 0);
          notificationStore.recordCount(category, totalItems.value);
        } else {
          items.value = [];
          totalItems.value = 0;
        }
      });
  };

  const findItems = () => {
    findItemsByPage(firstPageNumber);
  };

  const nextPage = () => {
    findItemsByPage(currentPageNumber.value + 1);
  };

  const convertDate = (date: Date): string => {
    return moment(date).fromNow();
  };

  onMounted(() => {
    findItems();
  });

  return {
    items,
    hasDialogue,
    hasAnnouncement,
    totalCount,
    dialogueCount,
    announcementCount,
    convertDate,
  };
}
