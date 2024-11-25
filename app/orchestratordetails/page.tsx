'use client'
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import {
    useOrchestratorControllerFetchOrchestratorById,
    useOrchestratorControllerUpdate,
    useOrchestratorControllerDelete
} from '@/src/generated/api/queries';
import { Table, Button, Modal, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Room from '../Components/Room';

const OrchastratorDetail = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get('orgId') || '';
    const orchId = searchParams.get('orchId') || '';

    // Hooks for update and delete operations
    const { mutate: updateMutate } = useOrchestratorControllerUpdate();
    const { mutate: deleteMutate } = useOrchestratorControllerDelete();

    const [opened, { open, close }] = useDisclosure(false);

    // Fetch data for orchestrator details
    const { data } = useOrchestratorControllerFetchOrchestratorById({
        path: {
            organizationId: id,
            orchestratorId: orchId,
        },
    });

    const [formData, setFormData] = useState({
        label: data?.label || '',
        ip: data?.ip || '',
        port: data?.port || '',
    });

    const handleEditClick = () => {
        setFormData({
            label: data?.label || '',
            ip: data?.ip || '',
            port: data?.port || '',
        });
        open();
    };

    const handleSave = () => {
        const payload: any = {
            label: formData.label,
            ip: formData.ip,
            port: formData.port,
        };
        updateMutate(
            {
                body: payload,
                path: {
                    organizationId: id,
                    orchestratorId: orchId,
                },
            },
        );
    };

    const handleDelete = () => {
        deleteMutate(
            {
                path: {
                    organizationId: id,
                    orchestratorId: orchId,
                },
            },
        );
    };

    return (
        <div className='mt-2 w-screen h-screen flex flex-col items-center'>
            <div className='w-[90%] flex flex-col items-center'>
                <div className='flex justify-between w-full'>
                    <h1 className='text-xl font-semibold'>Orchastrator Detail</h1>
                    <div className='flex gap-2'>
                        <Button onClick={handleEditClick}>Edit</Button>
                        <Button color="red" onClick={handleDelete}>Delete</Button>
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
                            <Table.Td>{data?.configured ? 'true' : 'false'}</Table.Td>
                        </Table.Tr>
                    </Table.Tbody>
                </Table>
            </div>

            <Modal opened={opened} onClose={close} title="Edit Orchastrator Details">
                <TextInput
                    label="Label"
                    value={formData.label}
                    onChange={(e) => setFormData({ ...formData, label: e.currentTarget.value })}
                />
                <TextInput
                    label="IP"
                    value={formData.ip}
                    onChange={(e) => setFormData({ ...formData, ip: e.currentTarget.value })}
                />
                <TextInput
                    label="Port"
                    value={formData.port}
                    onChange={(e) => setFormData({ ...formData, port: e.currentTarget.value })}
                />
                <Button className='mt-4' onClick={handleSave}>Save</Button>
            </Modal>

            <Room orgId={id} orchId={orchId} />
        </div>
    );
};

export default OrchastratorDetail;
