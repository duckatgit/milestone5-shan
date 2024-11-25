'use client'
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useOrganizationControllerAddUserToOrganization, } from '@/src/generated/api/queries'
import { Table, Button, Modal, TextInput, Menu } from '@mantine/core';

const OrchastratorDetail = () => {
    const searchParams = useSearchParams()
    const id = searchParams.get('orgId') || '';

    const { mutate }: any = useOrganizationControllerAddUserToOrganization()

    const [formData, setFormData] = useState({
        userEmail: '',
        roles: '',
    });

    const handleSave = () => {
        let payload = {
            userEmail: formData?.userEmail,
            roles: formData?.roles,
        }
        mutate({
            body: payload,
            path: {
                organizationId: id,
            },
        })
    };

    return (
        <div className='mt-2 w-screen h-screen flex flex-col items-center'>
            <h1 className='text-xl font-semibolds'>User</h1>
            {/* <div className='w-[90%] flex flex-col items-center'>
                <div className='flex justify-between w-full'>
                   
                    <div className='flex gap-2'>
                        <Button onClick={handleEditClick}>Edit</Button>
                        <Button>Delete</Button>
                    </div>
                </div>
                <br />
                <Table>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>id</Table.Th>
                            <Table.Th>Label</Table.Th>
                            <Table.Th>Configured</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        <Table.Tr key={data?.id}>
                            <Table.Td>{data?.id}</Table.Td>
                            <Table.Td>{data?.label}</Table.Td>
                            <Table.Td>{data?.configured ? "true" : "false"}</Table.Td>
                        </Table.Tr>
                    </Table.Tbody>
                </Table>

            </div> */}

            {/* <Modal opened={opened} onClose={close} title="Edit Orchastrator Details"> */}
            <TextInput
                label="User Email"
                value={formData.userEmail}
                onChange={(e) => setFormData({ ...formData, userEmail: e.currentTarget.value })}
            />
            <TextInput
                label="Roles"
                value={formData.roles}
                onChange={(e) => setFormData({ ...formData, roles: e.currentTarget.value })}
            />
            <Button className='mt-4' onClick={handleSave}>Save</Button>
            {/* </Modal> */}

        </div>
    )
}

export default OrchastratorDetail