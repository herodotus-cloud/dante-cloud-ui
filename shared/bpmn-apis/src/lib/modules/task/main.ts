import type {
  AxiosHttpResult,
  BpmnDeleteQueryParams,
  VariableValue,
  BpmnIdPathParams,
  TaskEntity,
  TaskQueryParams,
  TaskSortBy,
  TaskFormKeyEntity,
  TaskClaimRequestBody,
  TaskCompleteRequestBody,
  TaskSubmitFormRequestBody,
  TaskResolveRequestBody,
  TaskSetAssigneeRequestBody,
  TaskDelegateRequestBody,
  TaskFormVariablesQueryParams,
  TaskCreateRequestBody,
  TaskUpdateRequestBody,
  TaskBpmnErrorRequestBody,
  TaskBpmnEscalationRequestBody
} from '/@/declarations';

import { HttpConfig, BaseBpmnService } from '../../base';

class TaskService extends BaseBpmnService<TaskEntity, TaskQueryParams, TaskSortBy> {
  private static instance: TaskService;

  private constructor(config: HttpConfig) {
    super(config);
  }

  public static getInstance(config: HttpConfig): TaskService {
    if (this.instance == null) {
      this.instance = new TaskService(config);
    }
    return this.instance;
  }

  public getBaseAddress(): string {
    return this.getConfig().getBpmn() + '/task';
  }

  public getCreateAddress(): string {
    return this.getBaseAddress() + '/create';
  }

  public deleteById(id: string, query: BpmnDeleteQueryParams): Promise<AxiosHttpResult<string>> {
    return this.getConfig()
      .getHttp()
      .deleteWithParams<string, string>(this.createAddressWithParam({ id: id }), query);
  }

  public getFormKey(path: BpmnIdPathParams): Promise<AxiosHttpResult<TaskFormKeyEntity>> {
    return this.getConfig().getHttp().get<TaskFormKeyEntity>(this.createAddressWithParam(path, 'form'));
  }

  /**
   * Claims a task for a specific user.
   * Note: The difference with the Set Assignee method is that here a check is performed to see if the task already has a user assigned to it.
   *
   * @param path {@link BpmnIdPathParams}
   * @param data {@link TaskClaimRequestBody}
   * @returns This method returns no content.
   */
  public claimTask(path: BpmnIdPathParams, data: TaskClaimRequestBody): Promise<AxiosHttpResult<string>> {
    return this.getConfig()
      .getHttp()
      .post<string, TaskClaimRequestBody>(this.createAddressWithParam(path, 'claim'), data);
  }

  /**
   * Resets a task’s assignee. If successful, the task is not assigned to a user.
   *
   * @param path {@link BpmnIdPathParams}
   * @returns This method returns no content.
   */
  public unclaimTask(path: BpmnIdPathParams): Promise<AxiosHttpResult<string>> {
    return this.getConfig().getHttp().post<string, any>(this.createAddressWithParam(path, 'unclaim'), {});
  }

  /**
   * Completes a task and updates process variables.
   *
   * @param path {@link BpmnIdPathParams}
   * @param data {@link TaskCompleteRequestBody}
   * @returns This method returns no content.
   */
  public completeTask(path: BpmnIdPathParams, data: TaskCompleteRequestBody): Promise<AxiosHttpResult<string>> {
    return this.getConfig()
      .getHttp()
      .post<string, TaskCompleteRequestBody>(this.createAddressWithParam(path, 'complete'), data);
  }

  /**
   * Completes a task and updates process variables using a form submit.
   * There are two differences between this method and the complete method:
   *
   * · If the task is in state PENDING - i.e., has been delegated before, it is not completed but resolved. Otherwise it will be completed.
   * · If the task has Form Field Metadata defined, the process engine will perform backend validation for any form fields which have validators defined.
   * See the Generated Task Forms section of the User Guide for more information.
   * Note that Form Field Metadata does not restrict which variables you can submit via this endpoint.
   *
   * @param path {@link BpmnIdPathParams}
   * @param data {@link TaskSubmitFormRequestBody}
   * @returns This method returns no content.
   */
  public submitTaskForm(path: BpmnIdPathParams, data: TaskSubmitFormRequestBody): Promise<AxiosHttpResult<string>> {
    return this.getConfig()
      .getHttp()
      .post<string, TaskSubmitFormRequestBody>(this.createAddressWithParam(path, 'submit-form'), data);
  }

  /**
   * Completes a task and updates process variables using a form submit.
   * There are two differences between this method and the complete method:
   *
   * · If the task is in state PENDING - i.e., has been delegated before, it is not completed but resolved. Otherwise it will be completed.
   * · If the task has Form Field Metadata defined, the process engine will perform backend validation for any form fields which have validators defined.
   * See the Generated Task Forms section of the User Guide for more information.
   * Note that Form Field Metadata does not restrict which variables you can submit via this endpoint.
   *
   * @param path {@link BpmnIdPathParams}
   * @param data {@link TaskResolveRequestBody}
   * @returns This method returns no content.
   */
  public resolveTask(path: BpmnIdPathParams, data: TaskResolveRequestBody): Promise<AxiosHttpResult<string>> {
    return this.getConfig()
      .getHttp()
      .post<string, TaskResolveRequestBody>(this.createAddressWithParam(path, 'resolve'), data);
  }

  /**
   * Changes the assignee of a task to a specific user.
   * Note: The difference with the Claim Task method is that this method does not check if the task already has a user assigned to it.
   *
   * @param path {@link BpmnIdPathParams}
   * @param data {@link TaskSetAssigneeRequestBody}
   * @returns This method returns no content.
   */
  public setAssignee(path: BpmnIdPathParams, data: TaskSetAssigneeRequestBody): Promise<AxiosHttpResult<string>> {
    return this.getConfig()
      .getHttp()
      .post<string, TaskSetAssigneeRequestBody>(this.createAddressWithParam(path, 'assignee'), data);
  }

  /**
   * Delegates a task to another user.
   *
   * @param path {@link BpmnIdPathParams}
   * @param data {@link TaskDelegateRequestBody}
   * @returns This method returns no content.
   */
  public delegateTask(path: BpmnIdPathParams, data: TaskDelegateRequestBody): Promise<AxiosHttpResult<string>> {
    return this.getConfig()
      .getHttp()
      .post<string, TaskDelegateRequestBody>(this.createAddressWithParam(path, 'delegate'), data);
  }

  /**
   * Retrieves the deployed form that is referenced from a given task. For further information please refer to User Guide.
   *
   * @param path {@link BpmnIdPathParams}
   * @returns An object with the deployed form content.
   */
  public getDeployedTaskForm(path: BpmnIdPathParams): Promise<AxiosHttpResult<Record<string, any>>> {
    return this.getConfig().getHttp().get<Record<string, any>>(this.createAddressWithParam(path, 'deployed-form'));
  }

  /**
   * Retrieves the rendered form for a task. This method can be used to get the HTML rendering of a Generated Task Form.
   *
   * @param path {@link BpmnIdPathParams}
   * @returns An object with the deployed form content.
   */
  public getRenderedTaskForm(path: BpmnIdPathParams): Promise<AxiosHttpResult<string>> {
    return this.getConfig().getHttp().get<string>(this.createAddressWithParam(path, 'rendered-form'));
  }

  /**
   * Retrieves the form variables for a task. The form variables take form data specified on the task into account.
   * If form fields are defined, the variable types and default values of the form fields are taken into account.
   *
   * @param path {@link BpmnIdPathParams}
   * @param param {@link TaskFormVariablesQueryParams}
   * @returns {@link VariableValue}
   */
  public getTaskFormVariables(
    path: BpmnIdPathParams,
    param: TaskFormVariablesQueryParams
  ): Promise<AxiosHttpResult<VariableValue>> {
    return this.getConfig()
      .getHttp()
      .get<VariableValue, TaskFormVariablesQueryParams>(this.createAddressWithParam(path, 'form-variables'), param);
  }

  /**
   * Creates a new task.
   *
   * @param data {@link TaskCreateRequestBody}
   * @returns This method returns no content
   */
  public createTask(data: TaskCreateRequestBody): Promise<AxiosHttpResult<string>> {
    return this.getConfig().getHttp().post<string, TaskCreateRequestBody>(this.getCreateAddress(), data);
  }

  /**
   * Updates a task.
   *
   * @param data {@link TaskUpdateRequestBody}
   * @returns This method returns no content
   */
  public updateTask(path: BpmnIdPathParams, data: TaskUpdateRequestBody): Promise<AxiosHttpResult<string>> {
    return this.getConfig().getHttp().put<string, TaskUpdateRequestBody>(this.createAddressWithParam(path), data);
  }

  /**
   * Reports a business error in the context of a running task by id.
   * The error code must be specified to identify the BPMN error handler. See the documentation for Reporting Bpmn Error in User Tasks.
   *
   * @param path {@link BpmnIdPathParams}
   * @param data {@link TaskBpmnErrorRequestBody}
   * @returns This method returns no content
   */
  public handleTaskBpmnError(path: BpmnIdPathParams, data: TaskBpmnErrorRequestBody): Promise<AxiosHttpResult<string>> {
    return this.getConfig()
      .getHttp()
      .post<string, TaskBpmnErrorRequestBody>(this.createAddressWithParam(path, 'bpmnError'), data);
  }

  /**
   * Reports an escalation in the context of a running task by id.
   * The escalation code must be specified to identify the escalation handler. See the documentation for Reporting Bpmn Escalation in User Tasks.
   *
   * @param path {@link BpmnIdPathParams}
   * @param data {@link TaskBpmnEscalationRequestBody}
   * @returns This method returns no content
   */
  public handleTaskBpmnEscalation(
    path: BpmnIdPathParams,
    data: TaskBpmnEscalationRequestBody
  ): Promise<AxiosHttpResult<string>> {
    return this.getConfig()
      .getHttp()
      .post<string, TaskBpmnEscalationRequestBody>(this.createAddressWithParam(path, 'bpmnEscalation'), data);
  }
}

export { TaskService };
