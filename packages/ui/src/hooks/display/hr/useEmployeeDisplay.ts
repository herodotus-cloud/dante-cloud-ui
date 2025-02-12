import type { Ref } from 'vue';
import { ref } from 'vue';

import type { ConstantDictionary, SysEmployeeEntity } from '/@/lib/declarations';

import { lodash } from '/@/lib/utils';
import { useConstantsStore } from '/@/stores';

export default function useEmployeeDisplay() {
  const constants = useConstantsStore();

  const gender = ref([]) as Ref<ConstantDictionary[]>;
  const identity = ref([]) as Ref<ConstantDictionary[]>;

  const parseGender = (item: SysEmployeeEntity) => {
    if (lodash.isEmpty(gender.value)) {
      gender.value = constants.getDictionary('gender');
    }

    if (typeof item.gender == 'number') {
      return gender.value[item.gender].text;
    } else {
      return item.gender;
    }
  };

  const parseIdentity = (item: SysEmployeeEntity) => {
    if (lodash.isEmpty(identity.value)) {
      identity.value = constants.getDictionary('identity');
    }

    if (typeof item.identity == 'number') {
      return identity.value[item.identity].text;
    } else {
      return item.identity;
    }
  };

  return {
    parseGender,
    parseIdentity,
  };
}
