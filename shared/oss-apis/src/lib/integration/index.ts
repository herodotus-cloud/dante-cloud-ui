import type {
  AxiosHttpResult,
  BucketDomain,
  CreateBucketArguments,
  DeleteBucketArguments,
  ListObjectsArguments,
  ObjectListingDomain
} from '/@/declarations';

import { Service, HttpConfig } from '../base';

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
    return this.getConfig().getOss() + '/oss/bucket';
  }

  private getListAddress(): string {
    return this.getBaseAddress() + '/list';
  }

  private getExistsAddress(): string {
    return this.getBaseAddress() + '/exists';
  }

  public doesBucketExist(bucketName: string): Promise<AxiosHttpResult<boolean>> {
    return this.getConfig().getHttp().get<boolean, string>(this.getExistsAddress(), { bucketName: bucketName });
  }

  public listBuckets(): Promise<AxiosHttpResult<Array<BucketDomain>>> {
    return this.getConfig().getHttp().get<Array<BucketDomain>, string>(this.getListAddress());
  }

  public createBucket(request: CreateBucketArguments): Promise<AxiosHttpResult<boolean>> {
    return this.getConfig().getHttp().post<boolean, CreateBucketArguments>(this.getBaseAddress(), request);
  }

  public deleteBucket(request: DeleteBucketArguments): Promise<AxiosHttpResult<boolean>> {
    return this.getConfig().getHttp().delete<boolean, DeleteBucketArguments>(this.getBaseAddress(), request);
  }
}

class ObjectService extends Service {
  private static instance: ObjectService;

  private constructor(config: HttpConfig) {
    super(config);
  }

  public static getInstance(config: HttpConfig): ObjectService {
    if (this.instance == null) {
      this.instance = new ObjectService(config);
    }
    return this.instance;
  }

  public getBaseAddress(): string {
    return this.getConfig().getOss() + '/oss/object';
  }

  private getListAddress(): string {
    return this.getBaseAddress() + '/list';
  }

  public listObjects(request: ListObjectsArguments): Promise<AxiosHttpResult<ObjectListingDomain>> {
    return this.getConfig().getHttp().get<ObjectListingDomain, ListObjectsArguments>(this.getListAddress(), request);
  }
}

export { BucketService, ObjectService };
