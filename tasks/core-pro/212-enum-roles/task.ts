export enum UserPermission {
  READ = 'read',
  WRITE = 'write',
  DELETE = 'delete',
  VIEW = 'view',
}

export enum UserRole {
  ADMIN = 'admin',
  EDITOR = 'editor',
  VIEWER = 'viewer',
}

export interface User {
  role: UserRole;
  permissions: UserPermission[];
}

export function hasAccess(user: User, requiredPermission: UserPermission): boolean {
  if (user.role === UserRole.ADMIN) return true;
  return user.permissions.includes(requiredPermission);
}
