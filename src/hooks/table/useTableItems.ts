import type { SweetAlertResult } from 'sweetalert2';
import type { Page, Entity } from '/@/lib/declarations';
import { onMounted, computed, ref, Ref, reactive } from 'vue';

import { BaseService } from '/@/apis';
import { Swal, toast } from '/@/lib/utils';
import { Operation } from '/@/lib/enums';

export default function useTableItems<T extends Entity>(baseService: BaseService<T>, name: string) {
	const pagination = ref({
		sortBy: 'updateTime',
		descending: true,
		page: 1,
		rowsPerPage: 10,
		rowsNumber: 0,
	});

	const tableRows = ref<T[]>([]) as Ref<T[]>;
	const totalPages = ref<number>(0);
	const pageNumber = ref<number>(0);
	const pageSize = ref<number>(10);
	const loading = ref<boolean>(false);

	onMounted(() => {
		findItemsByPage();
	});

	const pageTurning = (num: number) => {
		pageNumber.value = num;
		findItemsByPage(num);
	};

	const findItemsByPage = (num = 1, others = {}) => {
		loading.value = true;
		baseService
			.fetchByPage(
				{
					pageNumber: num - 1,
					pageSize: pageSize.value,
				},
				others
			)
			.then((result) => {
				const data = result.data as Page<T>;
				tableRows.value = data.content;
				totalPages.value = data.totalPages;
				pagination.value.rowsNumber = parseInt(data.totalElements, 0);
				loading.value = false;
			})
			.catch(() => {
				loading.value = false;
			});
	};

	const remove = (id: string) => {
		Swal.fire({
			title: '确定删除?',
			text: '您将无法恢复此操作！',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: '是的, 删除!',
			cancelButtonText: '取消',
		}).then((confirm: SweetAlertResult) => {
			if (confirm.value) {
				baseService
					.delete(id)
					.then((response) => {
						const result = response as HttpResult<string>;
						if (result.message) {
							toast.success(result.message);
						} else {
							toast.success('删除成功');
						}
						findItemsByPage();
					})
					.catch(() => {
						toast.error('删除失败');
					});
			}
		});
	};

	const toEdit = computed(() => (item: T) => {
		return {
			name: name + 'Content',
			params: { item: JSON.stringify(item), operation: Operation.EDIT },
		};
	});

	const toCreate = computed(() => {
		return {
			name: name + 'Content',
			params: { item: JSON.stringify({}), operation: Operation.CREATE },
		};
	});

	return {
		pagination,
		tableRows,
		loading,
		totalPages,
		pageSize,
		toCreate,
		toEdit,
		remove,
	};
}
