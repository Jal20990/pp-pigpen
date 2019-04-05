import { FSAdminPermissions } from 'src/models/fs-admin-permissions';

export abstract class WebmasterService {
  public permissions: FSAdminPermissions | undefined;

  public abstract savePermissions(): void;
  public abstract addUserClaim(): void;

}
