// This file is auto-generated by @hey-api/openapi-ts

import { createClient, createConfig, type Options } from '@hey-api/client-fetch';
import type { CertControllerCreateData, CertControllerCreateError, CertControllerCreateResponse, OrganizationControllerAddUserToOrganizationData, OrganizationControllerAddUserToOrganizationError, OrganizationControllerAddUserToOrganizationResponse, OrganizationControllerEditUserInOrganizationData, OrganizationControllerEditUserInOrganizationError, OrganizationControllerEditUserInOrganizationResponse, OrganizationControllerRemoveUserFromOrganizationData, OrganizationControllerRemoveUserFromOrganizationError, OrganizationControllerRemoveUserFromOrganizationResponse, OrganizationControllerRegisterData, OrganizationControllerRegisterError, OrganizationControllerRegisterResponse, OrganizationControllerUpdateOrganizationData, OrganizationControllerUpdateOrganizationError, OrganizationControllerUpdateOrganizationResponse, OrganizationControllerFindByIdData, OrganizationControllerFindByIdError, OrganizationControllerFindByIdResponse, OrganizationControllerRemoveOrganizationData, OrganizationControllerRemoveOrganizationError, OrganizationControllerRemoveOrganizationResponse, OrchestratorControllerFindOrchestratorsByOrgData, OrchestratorControllerFindOrchestratorsByOrgError, OrchestratorControllerFindOrchestratorsByOrgResponse, OrchestratorControllerAddOrchestratorData, OrchestratorControllerAddOrchestratorError, OrchestratorControllerAddOrchestratorResponse, OrchestratorControllerFetchOrchestratorByIdData, OrchestratorControllerFetchOrchestratorByIdError, OrchestratorControllerFetchOrchestratorByIdResponse, OrchestratorControllerUpdateData, OrchestratorControllerUpdateError, OrchestratorControllerUpdateResponse, OrchestratorControllerDeleteData, OrchestratorControllerDeleteError, OrchestratorControllerDeleteResponse, OrchestratorControllerFetchOrchestratorConfigData, OrchestratorControllerFetchOrchestratorConfigError, OrchestratorControllerFetchOrchestratorConfigResponse, OrchestratorControllerFetchRoleForOrchestratorData, OrchestratorControllerFetchRoleForOrchestratorError, OrchestratorControllerFetchRoleForOrchestratorResponse, OrchestratorLicenseControllerVerifyData, OrchestratorLicenseControllerVerifyError, OrchestratorLicenseControllerVerifyResponse, UserControllerUpdateClaimsError, UserControllerUpdateClaimsResponse, UserControllerGetOrganizationsError, UserControllerGetOrganizationsResponse, UserControllerUpdateUserData, UserControllerUpdateUserError, UserControllerUpdateUserResponse, UserControllerFindByIdData, UserControllerFindByIdError, UserControllerFindByIdResponse, RoomControllerCreateData, RoomControllerCreateError, RoomControllerCreateResponse, RoomControllerFindAllData, RoomControllerFindAllError, RoomControllerFindAllResponse, RoomControllerFindOneData, RoomControllerFindOneError, RoomControllerFindOneResponse, RoomControllerUpdateData, RoomControllerUpdateError, RoomControllerUpdateResponse, RoomControllerRemoveData, RoomControllerRemoveError, RoomControllerRemoveResponse, RoomControllerFetchDevicesByRoomData, RoomControllerFetchDevicesByRoomError, RoomControllerFetchDevicesByRoomResponse, DeviceControllerCreateData, DeviceControllerCreateError, DeviceControllerCreateResponse, DeviceControllerCreatedSignedRegistrationUrlData, DeviceControllerCreatedSignedRegistrationUrlError, DeviceControllerCreatedSignedRegistrationUrlResponse, DeviceControllerFindOneData, DeviceControllerFindOneError, DeviceControllerFindOneResponse, DeviceControllerUpdateData, DeviceControllerUpdateError, DeviceControllerUpdateResponse, DeviceControllerRemoveData, DeviceControllerRemoveError, DeviceControllerRemoveResponse } from './types.gen';

export const client = createClient(createConfig());

export const certControllerCreate = <ThrowOnError extends boolean = false>(options: Options<CertControllerCreateData, ThrowOnError>) => { return (options?.client ?? client).post<CertControllerCreateResponse, CertControllerCreateError, ThrowOnError>({
    ...options,
    url: '/api/v1/cert'
}); };

export const organizationControllerAddUserToOrganization = <ThrowOnError extends boolean = false>(options: Options<OrganizationControllerAddUserToOrganizationData, ThrowOnError>) => { return (options?.client ?? client).post<OrganizationControllerAddUserToOrganizationResponse, OrganizationControllerAddUserToOrganizationError, ThrowOnError>({
    ...options,
    url: '/api/v1/organization/{organizationId}/user'
}); };

export const organizationControllerEditUserInOrganization = <ThrowOnError extends boolean = false>(options: Options<OrganizationControllerEditUserInOrganizationData, ThrowOnError>) => { return (options?.client ?? client).put<OrganizationControllerEditUserInOrganizationResponse, OrganizationControllerEditUserInOrganizationError, ThrowOnError>({
    ...options,
    url: '/api/v1/organization/{organizationId}/user/{userId}'
}); };

export const organizationControllerRemoveUserFromOrganization = <ThrowOnError extends boolean = false>(options: Options<OrganizationControllerRemoveUserFromOrganizationData, ThrowOnError>) => { return (options?.client ?? client).delete<OrganizationControllerRemoveUserFromOrganizationResponse, OrganizationControllerRemoveUserFromOrganizationError, ThrowOnError>({
    ...options,
    url: '/api/v1/organization/{organizationId}/user/{userId}'
}); };

export const organizationControllerRegister = <ThrowOnError extends boolean = false>(options: Options<OrganizationControllerRegisterData, ThrowOnError>) => { return (options?.client ?? client).post<OrganizationControllerRegisterResponse, OrganizationControllerRegisterError, ThrowOnError>({
    ...options,
    url: '/api/v1/organization'
}); };

export const organizationControllerUpdateOrganization = <ThrowOnError extends boolean = false>(options: Options<OrganizationControllerUpdateOrganizationData, ThrowOnError>) => { return (options?.client ?? client).patch<OrganizationControllerUpdateOrganizationResponse, OrganizationControllerUpdateOrganizationError, ThrowOnError>({
    ...options,
    url: '/api/v1/organization/{organizationId}'
}); };

export const organizationControllerFindById = <ThrowOnError extends boolean = false>(options: Options<OrganizationControllerFindByIdData, ThrowOnError>) => { return (options?.client ?? client).get<OrganizationControllerFindByIdResponse, OrganizationControllerFindByIdError, ThrowOnError>({
    ...options,
    url: '/api/v1/organization/{organizationId}'
}); };

export const organizationControllerRemoveOrganization = <ThrowOnError extends boolean = false>(options: Options<OrganizationControllerRemoveOrganizationData, ThrowOnError>) => { return (options?.client ?? client).delete<OrganizationControllerRemoveOrganizationResponse, OrganizationControllerRemoveOrganizationError, ThrowOnError>({
    ...options,
    url: '/api/v1/organization/{organizationId}'
}); };

export const orchestratorControllerFindOrchestratorsByOrg = <ThrowOnError extends boolean = false>(options: Options<OrchestratorControllerFindOrchestratorsByOrgData, ThrowOnError>) => { return (options?.client ?? client).get<OrchestratorControllerFindOrchestratorsByOrgResponse, OrchestratorControllerFindOrchestratorsByOrgError, ThrowOnError>({
    ...options,
    url: '/api/v1/organization/{organizationId}/orchestrator'
}); };

export const orchestratorControllerAddOrchestrator = <ThrowOnError extends boolean = false>(options: Options<OrchestratorControllerAddOrchestratorData, ThrowOnError>) => { return (options?.client ?? client).post<OrchestratorControllerAddOrchestratorResponse, OrchestratorControllerAddOrchestratorError, ThrowOnError>({
    ...options,
    url: '/api/v1/organization/{organizationId}/orchestrator'
}); };

export const orchestratorControllerFetchOrchestratorById = <ThrowOnError extends boolean = false>(options: Options<OrchestratorControllerFetchOrchestratorByIdData, ThrowOnError>) => { return (options?.client ?? client).get<OrchestratorControllerFetchOrchestratorByIdResponse, OrchestratorControllerFetchOrchestratorByIdError, ThrowOnError>({
    ...options,
    url: '/api/v1/organization/{organizationId}/orchestrator/{orchestratorId}'
}); };

export const orchestratorControllerUpdate = <ThrowOnError extends boolean = false>(options: Options<OrchestratorControllerUpdateData, ThrowOnError>) => { return (options?.client ?? client).patch<OrchestratorControllerUpdateResponse, OrchestratorControllerUpdateError, ThrowOnError>({
    ...options,
    url: '/api/v1/organization/{organizationId}/orchestrator/{orchestratorId}'
}); };

export const orchestratorControllerDelete = <ThrowOnError extends boolean = false>(options: Options<OrchestratorControllerDeleteData, ThrowOnError>) => { return (options?.client ?? client).delete<OrchestratorControllerDeleteResponse, OrchestratorControllerDeleteError, ThrowOnError>({
    ...options,
    url: '/api/v1/organization/{organizationId}/orchestrator/{orchestratorId}'
}); };

export const orchestratorControllerFetchOrchestratorConfig = <ThrowOnError extends boolean = false>(options: Options<OrchestratorControllerFetchOrchestratorConfigData, ThrowOnError>) => { return (options?.client ?? client).get<OrchestratorControllerFetchOrchestratorConfigResponse, OrchestratorControllerFetchOrchestratorConfigError, ThrowOnError>({
    ...options,
    url: '/api/v1/organization/{organizationId}/orchestrator/{orchestratorId}/config'
}); };

export const orchestratorControllerFetchRoleForOrchestrator = <ThrowOnError extends boolean = false>(options: Options<OrchestratorControllerFetchRoleForOrchestratorData, ThrowOnError>) => { return (options?.client ?? client).get<OrchestratorControllerFetchRoleForOrchestratorResponse, OrchestratorControllerFetchRoleForOrchestratorError, ThrowOnError>({
    ...options,
    url: '/api/v1/organization/{organizationId}/orchestrator/{orchestratorId}/role'
}); };

export const orchestratorLicenseControllerVerify = <ThrowOnError extends boolean = false>(options: Options<OrchestratorLicenseControllerVerifyData, ThrowOnError>) => { return (options?.client ?? client).post<OrchestratorLicenseControllerVerifyResponse, OrchestratorLicenseControllerVerifyError, ThrowOnError>({
    ...options,
    url: '/api/v1/organization/{organizationId}/orchestrator/{orchestratorId}/license/verify'
}); };

export const userControllerUpdateClaims = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => { return (options?.client ?? client).get<UserControllerUpdateClaimsResponse, UserControllerUpdateClaimsError, ThrowOnError>({
    ...options,
    url: '/api/v1/user/updateClaims'
}); };

export const userControllerGetOrganizations = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => { return (options?.client ?? client).get<UserControllerGetOrganizationsResponse, UserControllerGetOrganizationsError, ThrowOnError>({
    ...options,
    url: '/api/v1/user/organizations'
}); };

export const userControllerUpdateUser = <ThrowOnError extends boolean = false>(options: Options<UserControllerUpdateUserData, ThrowOnError>) => { return (options?.client ?? client).patch<UserControllerUpdateUserResponse, UserControllerUpdateUserError, ThrowOnError>({
    ...options,
    url: '/api/v1/user/{id}'
}); };

export const userControllerFindById = <ThrowOnError extends boolean = false>(options: Options<UserControllerFindByIdData, ThrowOnError>) => { return (options?.client ?? client).get<UserControllerFindByIdResponse, UserControllerFindByIdError, ThrowOnError>({
    ...options,
    url: '/api/v1/user/{id}'
}); };

export const roomControllerCreate = <ThrowOnError extends boolean = false>(options: Options<RoomControllerCreateData, ThrowOnError>) => { return (options?.client ?? client).post<RoomControllerCreateResponse, RoomControllerCreateError, ThrowOnError>({
    ...options,
    url: '/api/v1/organization/{organizationId}/orchestrator/{orchestratorId}/room'
}); };

export const roomControllerFindAll = <ThrowOnError extends boolean = false>(options: Options<RoomControllerFindAllData, ThrowOnError>) => { return (options?.client ?? client).get<RoomControllerFindAllResponse, RoomControllerFindAllError, ThrowOnError>({
    ...options,
    url: '/api/v1/organization/{organizationId}/orchestrator/{orchestratorId}/room'
}); };

export const roomControllerFindOne = <ThrowOnError extends boolean = false>(options: Options<RoomControllerFindOneData, ThrowOnError>) => { return (options?.client ?? client).get<RoomControllerFindOneResponse, RoomControllerFindOneError, ThrowOnError>({
    ...options,
    url: '/api/v1/organization/{organizationId}/orchestrator/{orchestratorId}/room/{roomId}'
}); };

export const roomControllerUpdate = <ThrowOnError extends boolean = false>(options: Options<RoomControllerUpdateData, ThrowOnError>) => { return (options?.client ?? client).patch<RoomControllerUpdateResponse, RoomControllerUpdateError, ThrowOnError>({
    ...options,
    url: '/api/v1/organization/{organizationId}/orchestrator/{orchestratorId}/room/{roomId}'
}); };

export const roomControllerRemove = <ThrowOnError extends boolean = false>(options: Options<RoomControllerRemoveData, ThrowOnError>) => { return (options?.client ?? client).delete<RoomControllerRemoveResponse, RoomControllerRemoveError, ThrowOnError>({
    ...options,
    url: '/api/v1/organization/{organizationId}/orchestrator/{orchestratorId}/room/{roomId}'
}); };

export const roomControllerFetchDevicesByRoom = <ThrowOnError extends boolean = false>(options: Options<RoomControllerFetchDevicesByRoomData, ThrowOnError>) => { return (options?.client ?? client).get<RoomControllerFetchDevicesByRoomResponse, RoomControllerFetchDevicesByRoomError, ThrowOnError>({
    ...options,
    url: '/api/v1/organization/{organizationId}/orchestrator/{orchestratorId}/room/{roomId}/devices'
}); };

export const deviceControllerCreate = <ThrowOnError extends boolean = false>(options: Options<DeviceControllerCreateData, ThrowOnError>) => { return (options?.client ?? client).post<DeviceControllerCreateResponse, DeviceControllerCreateError, ThrowOnError>({
    ...options,
    url: '/api/v1/organization/{organizationId}/orchestrator/{orchestratorId}/device'
}); };

export const deviceControllerCreatedSignedRegistrationUrl = <ThrowOnError extends boolean = false>(options: Options<DeviceControllerCreatedSignedRegistrationUrlData, ThrowOnError>) => { return (options?.client ?? client).get<DeviceControllerCreatedSignedRegistrationUrlResponse, DeviceControllerCreatedSignedRegistrationUrlError, ThrowOnError>({
    ...options,
    url: '/api/v1/organization/{organizationId}/orchestrator/{orchestratorId}/device/signed'
}); };

export const deviceControllerFindOne = <ThrowOnError extends boolean = false>(options: Options<DeviceControllerFindOneData, ThrowOnError>) => { return (options?.client ?? client).get<DeviceControllerFindOneResponse, DeviceControllerFindOneError, ThrowOnError>({
    ...options,
    url: '/api/v1/organization/{organizationId}/orchestrator/{orchestratorId}/device/{id}'
}); };

export const deviceControllerUpdate = <ThrowOnError extends boolean = false>(options: Options<DeviceControllerUpdateData, ThrowOnError>) => { return (options?.client ?? client).patch<DeviceControllerUpdateResponse, DeviceControllerUpdateError, ThrowOnError>({
    ...options,
    url: '/api/v1/organization/{organizationId}/orchestrator/{orchestratorId}/device/{id}'
}); };

export const deviceControllerRemove = <ThrowOnError extends boolean = false>(options: Options<DeviceControllerRemoveData, ThrowOnError>) => { return (options?.client ?? client).delete<DeviceControllerRemoveResponse, DeviceControllerRemoveError, ThrowOnError>({
    ...options,
    url: '/api/v1/organization/{organizationId}/orchestrator/{orchestratorId}/device/{id}'
}); };