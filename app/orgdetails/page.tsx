'use client'
import React, { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useOrganizationControllerFindById, useOrganizationControllerUpdateOrganization } from '@/src/generated/api/queries'
import { Table, Button, Modal, TextInput, Menu } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { editOrg } from '@/services/services';
import Orchastrator from '../Components/Orchastrator';

const OrgDetail = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const id = searchParams.get('id') || '';
    const { mutate }: any = useOrganizationControllerUpdateOrganization()


    const [opened, { open, close }] = useDisclosure(false);


    const { data }: any = useOrganizationControllerFindById({
        path: {
            organizationId: id
        }
    });

    const [formData, setFormData] = useState({
        emailDomain: data?.emailDomain || '',
        organizationName: data?.organizationName || '',
        organizationIDFileLink: data?.organizationIDFileLink || '',
        governmentIDFileLink: data?.governmentIDFileLink || ''
    });

    console.log('data', data)

    const handleEditClick = () => {
        setFormData({
            emailDomain: data?.emailDomain || '',
            organizationName: data?.organizationName || '',
            organizationIDFileLink: data?.organizationIDFileLink || '',
            governmentIDFileLink: data?.governmentIDFileLink || ''
        });
        open();
    };

    const handleSave = () => {
        let payload = {
            "domain": formData.emailDomain,
            "organizationName": formData.organizationName,
            "organizationIDFileLink": formData.organizationIDFileLink,
            "governmentIDFileLink": formData.governmentIDFileLink
        }
        mutate({
            body: payload,
            path: {
                organizationId: id
            },
        })
        close()
    };

    return (
        <div className='mt-2 w-screen h-screen flex flex-col items-center'>
            <div className='w-[90%] flex flex-col items-center'>
                <div className='flex justify-between w-full'>
                    <h1 className='text-xl font-semibolds'>Organization Detail</h1>
                    <div className='flex gap-2'>
                        <Button onClick={handleEditClick}>Edit</Button>
                        <Button>Delete</Button>
                        <Button onClick={() => {
                            router.push(`/user?orgId=${id}`)
                        }}>Users</Button>
                    </div>
                </div>
                <br />
                <Table>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>Domain</Table.Th>
                            <Table.Th>Organization Name</Table.Th>
                            <Table.Th>Organization ID File Link</Table.Th>
                            <Table.Th>Government ID File Link</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        <Table.Tr key={data?.name}>
                            <Table.Td>{data?.emailDomain}</Table.Td>
                            <Table.Td>{data?.organizationName}</Table.Td>
                            <Table.Td>{data?.organizationIDFileLink}</Table.Td>
                            <Table.Td>{data?.governmentIDFileLink}</Table.Td>
                        </Table.Tr>
                    </Table.Tbody>
                </Table>
                <Orchastrator organizationIdState={id} />
            </div>

            <Modal opened={opened} onClose={close} title="Edit Organization Details">
                <TextInput
                    label="Email Domain"
                    value={formData.emailDomain}
                    onChange={(e) => setFormData({ ...formData, emailDomain: e.currentTarget.value })}
                />
                <TextInput
                    label="Organization Name"
                    value={formData.organizationName}
                    onChange={(e) => setFormData({ ...formData, organizationName: e.currentTarget.value })}
                />
                <TextInput
                    label="Organization ID File Link"
                    value={formData.organizationIDFileLink}
                    onChange={(e) => setFormData({ ...formData, organizationIDFileLink: e.currentTarget.value })}
                />
                <TextInput
                    label="Government ID File Link"
                    value={formData.governmentIDFileLink}
                    onChange={(e) => setFormData({ ...formData, governmentIDFileLink: e.currentTarget.value })}
                />
                <Button className='mt-4' onClick={handleSave}>Save</Button>
            </Modal>
        </div>
    )
}

export default OrgDetail