// This file is auto-generated by @hey-api/openapi-ts

export const CreateCertDtoSchema = {
    type: 'object',
    properties: {
        domain: {
            type: 'string'
        }
    },
    required: ['domain']
} as const;

export const CreateCertbotDtoSchema = {
    type: 'object',
    properties: {
        certificate: {
            type: 'string'
        },
        expiration: {
            format: 'date-time',
            type: 'string'
        },
        key: {
            type: 'string'
        }
    },
    required: ['certificate', 'expiration', 'key']
} as const;

export const AddUserToOrganizationRequestDtoSchema = {
    type: 'object',
    properties: {
        userEmail: {
            type: 'string'
        },
        roles: {
            type: 'string',
            enum: ['Super Admin', 'Admin', 'Data Analyst', 'Research Coordinator', 'User']
        }
    },
    required: ['userEmail']
} as const;

export const EditUserInOrganizationRequestDtoSchema = {
    type: 'object',
    properties: {
        roles: {
            type: 'string',
            enum: ['Super Admin', 'Admin', 'Data Analyst', 'Research Coordinator', 'User']
        }
    },
    required: ['roles']
} as const;

export const CreateOrganizationRequestDtoSchema = {
    type: 'object',
    properties: {
        domain: {
            type: 'string'
        },
        organizationName: {
            type: 'string'
        },
        organizationIDFileLink: {
            type: 'string'
        },
        governmentIDFileLink: {
            type: 'string'
        }
    },
    required: ['domain', 'organizationName', 'organizationIDFileLink', 'governmentIDFileLink']
} as const;

export const UpdateOrganizationRequestDtoSchema = {
    type: 'object',
    properties: {
        domain: {
            type: 'string'
        },
        organizationName: {
            type: 'string'
        },
        organizationIDFileLink: {
            type: 'string'
        },
        governmentIDFileLink: {
            type: 'string'
        }
    }
} as const;

export const DocumentReferenceSchema = {
    type: 'object',
    properties: {}
} as const;

export const OrganizationSchema = {
    type: 'object',
    properties: {
        createdBy: {
            '$ref': '#/components/schemas/DocumentReference'
        },
        organizationIDFileLink: {
            type: 'string'
        },
        governmentIDFileLink: {
            type: 'string'
        },
        isApproved: {
            type: 'boolean'
        },
        organizationName: {
            type: 'string'
        },
        emailDomain: {
            type: 'string'
        },
        orchestrators: {
            type: 'object'
        },
        users: {
            type: 'object'
        },
        id: {
            type: 'string'
        },
        createTime: {
            format: 'date-time',
            type: 'string'
        },
        updateTime: {
            format: 'date-time',
            type: 'string'
        },
        readTime: {
            format: 'date-time',
            type: 'string'
        },
        ref: {
            '$ref': '#/components/schemas/DocumentReference'
        }
    },
    required: ['createdBy', 'organizationIDFileLink', 'governmentIDFileLink', 'isApproved', 'organizationName', 'id']
} as const;

export const RoomDtoSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'string'
        },
        label: {
            type: 'string'
        },
        description: {
            type: 'string'
        }
    },
    required: ['id', 'label', 'description']
} as const;

export const OrchestratorDtoSchema = {
    type: 'object',
    properties: {
        configured: {
            type: 'boolean'
        },
        id: {
            type: 'string'
        },
        ip: {
            type: 'string'
        },
        label: {
            type: 'string'
        },
        port: {
            type: 'number'
        },
        rooms: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/RoomDto'
            }
        }
    },
    required: ['configured', 'id', 'label']
} as const;

export const CreateOrchestratorDtoSchema = {
    type: 'object',
    properties: {
        label: {
            type: 'string'
        }
    },
    required: ['label']
} as const;

export const UpdateOrchestratorDtoSchema = {
    type: 'object',
    properties: {
        label: {
            type: 'string'
        },
        ip: {
            type: 'string'
        },
        port: {
            type: 'number'
        }
    }
} as const;

export const OrchestratorConfigurationDtoSchema = {
    type: 'object',
    properties: {
        cert: {
            type: 'string'
        },
        key: {
            type: 'string'
        },
        natsConfig: {
            type: 'string'
        },
        orchestratorConfig: {
            type: 'string'
        }
    },
    required: ['cert', 'key', 'natsConfig', 'orchestratorConfig']
} as const;

export const OrchestratorVerifyLicenseDtoSchema = {
    type: 'object',
    properties: {
        key: {
            type: 'string'
        }
    },
    required: ['key']
} as const;

export const UserOrganizationDtoSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'string'
        },
        organizationName: {
            type: 'string'
        }
    },
    required: ['id', 'organizationName']
} as const;

export const GetOrganizationsResponseSchema = {
    type: 'object',
    properties: {
        organizations: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/UserOrganizationDto'
            }
        }
    },
    required: ['organizations']
} as const;

export const UpdateUserRequestDtoSchema = {
    type: 'object',
    properties: {}
} as const;

export const UserOrganizationSchema = {
    type: 'object',
    properties: {
        ref: {
            '$ref': '#/components/schemas/DocumentReference'
        },
        role: {
            type: 'string'
        }
    },
    required: ['ref', 'role']
} as const;

export const ContactInfoSchema = {
    type: 'object',
    properties: {
        phone: {
            type: 'string'
        },
        location: {
            type: 'string'
        },
        city: {
            type: 'string'
        },
        state: {
            type: 'string'
        },
        address: {
            type: 'string'
        },
        postalCode: {
            type: 'string'
        }
    }
} as const;

export const UserSchema = {
    type: 'object',
    properties: {
        email: {
            type: 'string'
        },
        organizations: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/UserOrganization'
            }
        },
        firstName: {
            type: 'string'
        },
        lastName: {
            type: 'string'
        },
        address: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ContactInfo'
            }
        },
        id: {
            type: 'string'
        },
        createTime: {
            format: 'date-time',
            type: 'string'
        },
        updateTime: {
            format: 'date-time',
            type: 'string'
        },
        readTime: {
            format: 'date-time',
            type: 'string'
        },
        ref: {
            '$ref': '#/components/schemas/DocumentReference'
        }
    },
    required: ['email', 'id']
} as const;

export const FetchUserResponseDtoSchema = {
    type: 'object',
    properties: {
        email: {
            type: 'string'
        },
        id: {
            type: 'string'
        },
        organizations: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        picture: {
            type: 'string'
        }
    },
    required: ['email', 'id', 'organizations', 'picture']
} as const;

export const CreateRoomDtoSchema = {
    type: 'object',
    properties: {
        label: {
            type: 'string'
        },
        description: {
            type: 'string'
        }
    },
    required: ['label', 'description']
} as const;

export const RoomSchema = {
    type: 'object',
    properties: {
        devices: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        label: {
            type: 'string'
        },
        description: {
            type: 'string'
        },
        id: {
            type: 'string'
        },
        createTime: {
            format: 'date-time',
            type: 'string'
        },
        updateTime: {
            format: 'date-time',
            type: 'string'
        },
        readTime: {
            format: 'date-time',
            type: 'string'
        },
        ref: {
            '$ref': '#/components/schemas/DocumentReference'
        }
    },
    required: ['label', 'description', 'id']
} as const;

export const DeviceSchema = {
    type: 'object',
    properties: {
        room: {
            '$ref': '#/components/schemas/DocumentReference'
        },
        key: {
            type: 'string'
        },
        deviceId: {
            type: 'string'
        },
        deleted: {
            type: 'boolean'
        },
        deletedTime: {
            format: 'date-time',
            type: 'string'
        },
        label: {
            type: 'string'
        },
        token: {
            type: 'string'
        },
        id: {
            type: 'string'
        },
        createTime: {
            format: 'date-time',
            type: 'string'
        },
        updateTime: {
            format: 'date-time',
            type: 'string'
        },
        readTime: {
            format: 'date-time',
            type: 'string'
        },
        ref: {
            '$ref': '#/components/schemas/DocumentReference'
        }
    },
    required: ['key', 'deviceId', 'id']
} as const;

export const UpdateRoomDtoSchema = {
    type: 'object',
    properties: {}
} as const;

export const CreateDeviceDtoSchema = {
    type: 'object',
    properties: {
        deviceId: {
            type: 'string'
        },
        key: {
            type: 'string'
        },
        roomId: {
            type: 'string'
        },
        label: {
            type: 'string'
        }
    },
    required: ['deviceId', 'key']
} as const;

export const NatsUserDtoSchema = {
    type: 'object',
    properties: {
        jwt: {
            type: 'string'
        },
        seed: {
            type: 'string'
        }
    },
    required: ['jwt', 'seed']
} as const;

export const KeyResponseDtoSchema = {
    type: 'object',
    properties: {
        key: {
            type: 'string'
        }
    },
    required: ['key']
} as const;

export const UpdateDeviceDtoSchema = {
    type: 'object',
    properties: {
        deviceId: {
            type: 'string'
        },
        key: {
            type: 'string'
        },
        roomId: {
            type: 'string'
        },
        label: {
            type: 'string'
        }
    }
} as const;