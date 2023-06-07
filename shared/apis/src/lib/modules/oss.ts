import type {
  AxiosHttpResult,
  BucketResponse,
  ListBucketsRequest,
  BucketExistsRequest,
  MakeBucketRequest,
  RemoveBucketRequest,
  ObjectWriteResponse,
  BucketSettingResponse,
  DeleteBucketEncryptionRequest,
  DeleteBucketPolicyRequest,
  DeleteBucketTagsRequest,
  DeleteObjectLockConfigurationRequest,
  SetBucketEncryptionRequest,
  SetBucketPolicyRequest,
  SetBucketTagsRequest,
  SetObjectLockConfigurationRequest,
  MultipartUploadCreateRequest,
  MultipartUploadCompleteRequest,
  MultipartUploadCreateResponse
} from '/@/declarations';

import { HttpConfig, Service } from '../base';

class BucketService extends Service {
  private static instance: BucketService;

  private constructor(config: HttpConfig) {
    super(config);
  }

  public static getInstance(config: HttpConfig): BucketService {
    if (this.instance == null) {
      this.instance = new BucketService(config);
    }
    return this.instance;
  }

  public getBaseAddress(): string {
    return this.getConfig().getOss() + '/oss/minio/bucket';
  }

  private getListAddress(): string {
    return this.getBaseAddress() + '/list';
  }

  private getExistsAddress(): string {
    return this.getBaseAddress() + '/exists';
  }

  public list(request: ListBucketsRequest = {}): Promise<AxiosHttpResult<BucketResponse[]>> {
    return this.getConfig().getHttp().get<BucketResponse[], ListBucketsRequest>(this.getListAddress(), request);
  }
  public exists(request: BucketExistsRequest): Promise<AxiosHttpResult<boolean>> {
    return this.getConfig().getHttp().get<boolean, BucketExistsRequest>(this.getExistsAddress(), request);
  }

  public make(request: MakeBucketRequest): Promise<AxiosHttpResult<boolean>> {
    return this.getConfig().getHttp().post<boolean, MakeBucketRequest>(this.getBaseAddress(), request);
  }

  public remove(request: RemoveBucketRequest): Promise<AxiosHttpResult<boolean>> {
    return this.getConfig().getHttp().delete<boolean, RemoveBucketRequest>(this.getBaseAddress(), request);
  }
}

class BucketSettingService extends Service {
  private static instance: BucketSettingService;

  private constructor(config: HttpConfig) {
    super(config);
  }

  public static getInstance(config: HttpConfig): BucketSettingService {
    if (this.instance == null) {
      this.instance = new BucketSettingService(config);
    }
    return this.instance;
  }

  public getBaseAddress(): string {
    return this.getConfig().getOss() + '/oss/minio/bucket/setting';
  }

  public get(bucketName: string, region = ''): Promise<AxiosHttpResult<BucketSettingResponse>> {
    return this.getConfig()
      .getHttp()
      .get<BucketSettingResponse, string>(this.getBaseAddress(), { bucketName: bucketName, region: region });
  }
}

class MultipartUploadService extends Service {
  private static instance: MultipartUploadService;

  private constructor(config: HttpConfig) {
    super(config);
  }

  public static getInstance(config: HttpConfig): MultipartUploadService {
    if (this.instance == null) {
      this.instance = new MultipartUploadService(config);
    }
    return this.instance;
  }

  public getBaseAddress(): string {
    return this.getConfig().getOss() + '/oss/minio/multipart';
  }

  public getMultipartUploadCreateAddress(): string {
    return this.getBaseAddress() + '/create';
  }

  public getMultipartUploadCompleteAddress(): string {
    return this.getBaseAddress() + '/complete';
  }

  public createMultipartUpload(
    request: MultipartUploadCreateRequest
  ): Promise<AxiosHttpResult<MultipartUploadCreateResponse>> {
    return this.getConfig()
      .getHttp()
      .post<MultipartUploadCreateResponse, MultipartUploadCreateRequest>(
        this.getMultipartUploadCreateAddress(),
        request
      );
  }

  public completeMultipartUpload(
    request: MultipartUploadCompleteRequest
  ): Promise<AxiosHttpResult<ObjectWriteResponse>> {
    return this.getConfig()
      .getHttp()
      .post<ObjectWriteResponse, MultipartUploadCompleteRequest>(this.getMultipartUploadCompleteAddress(), request);
  }
}

class BucketEncryptionService extends Service {
  private static instance: BucketEncryptionService;

  private constructor(config: HttpConfig) {
    super(config);
  }

  public static getInstance(config: HttpConfig): BucketEncryptionService {
    if (this.instance == null) {
      this.instance = new BucketEncryptionService(config);
    }
    return this.instance;
  }

  public getBaseAddress(): string {
    return this.getConfig().getOss() + '/oss/minio/bucket/encryption';
  }

  public set(request: SetBucketEncryptionRequest): Promise<AxiosHttpResult<boolean>> {
    return this.getConfig().getHttp().get<boolean, SetBucketEncryptionRequest>(this.getBaseAddress(), request);
  }
  public delete(request: DeleteBucketEncryptionRequest): Promise<AxiosHttpResult<boolean>> {
    return this.getConfig().getHttp().get<boolean, DeleteBucketEncryptionRequest>(this.getBaseAddress(), request);
  }
}

class BucketPolicyService extends Service {
  private static instance: BucketPolicyService;

  private constructor(config: HttpConfig) {
    super(config);
  }

  public static getInstance(config: HttpConfig): BucketPolicyService {
    if (this.instance == null) {
      this.instance = new BucketPolicyService(config);
    }
    return this.instance;
  }

  public getBaseAddress(): string {
    return this.getConfig().getOss() + '/oss/minio/bucket/policy';
  }

  public set(request: SetBucketPolicyRequest): Promise<AxiosHttpResult<boolean>> {
    return this.getConfig().getHttp().get<boolean, SetBucketPolicyRequest>(this.getBaseAddress(), request);
  }
  public delete(request: DeleteBucketPolicyRequest): Promise<AxiosHttpResult<boolean>> {
    return this.getConfig().getHttp().get<boolean, DeleteBucketPolicyRequest>(this.getBaseAddress(), request);
  }
}

class BucketTagsService extends Service {
  private static instance: BucketTagsService;

  private constructor(config: HttpConfig) {
    super(config);
  }

  public static getInstance(config: HttpConfig): BucketTagsService {
    if (this.instance == null) {
      this.instance = new BucketTagsService(config);
    }
    return this.instance;
  }

  public getBaseAddress(): string {
    return this.getConfig().getOss() + '/oss/minio/bucket/tags';
  }

  public set(request: SetBucketTagsRequest): Promise<AxiosHttpResult<boolean>> {
    return this.getConfig().getHttp().get<boolean, SetBucketTagsRequest>(this.getBaseAddress(), request);
  }
  public delete(request: DeleteBucketTagsRequest): Promise<AxiosHttpResult<boolean>> {
    return this.getConfig().getHttp().get<boolean, DeleteBucketTagsRequest>(this.getBaseAddress(), request);
  }
}

class ObjectLockConfigurationService extends Service {
  private static instance: ObjectLockConfigurationService;

  private constructor(config: HttpConfig) {
    super(config);
  }

  public static getInstance(config: HttpConfig): ObjectLockConfigurationService {
    if (this.instance == null) {
      this.instance = new ObjectLockConfigurationService(config);
    }
    return this.instance;
  }

  public getBaseAddress(): string {
    return this.getConfig().getOss() + '/oss/minio/bucket/object-lock';
  }

  public set(request: SetObjectLockConfigurationRequest): Promise<AxiosHttpResult<boolean>> {
    return this.getConfig().getHttp().get<boolean, SetObjectLockConfigurationRequest>(this.getBaseAddress(), request);
  }
  public delete(request: DeleteObjectLockConfigurationRequest): Promise<AxiosHttpResult<boolean>> {
    return this.getConfig()
      .getHttp()
      .get<boolean, DeleteObjectLockConfigurationRequest>(this.getBaseAddress(), request);
  }
}

export {
  BucketService,
  BucketSettingService,
  MultipartUploadService,
  BucketEncryptionService,
  BucketPolicyService,
  BucketTagsService,
  ObjectLockConfigurationService
};
