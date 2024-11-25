'use client'
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import {
    useRoomControllerFindOne,
    useRoomControllerUpdate,
    useRoomControllerRemove
} from '@/src/generated/api/queries';
import { Table, Button, Modal, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const RoomDetail = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get('orgId') || '';
    const orchId = searchParams.get('orchId') || '';
    const roomId = searchParams.get('roomId') || '';

    const { mutate: updateMutate } = useRoomControllerUpdate();
    const { mutate: removeMutate } = useRoomControllerRemove();

    const [opened, { open, close }] = useDisclosure(false);

    const { data }: any = useRoomControllerFindOne({
        path: {
            organizationId: id,
            orchestratorId: orchId,
            roomId: roomId,
        },
    });

    const [formData, setFormData] = useState({
        label: data?.label || '',
    });

    const handleEditClick = () => {
        setFormData({
            label: data?.label || '',
        });
        open();
    };

    const handleSave = () => {
        const payload = {
            label: formData?.label || '',
        };
        updateMutate(
            {
                body: payload,
                path: {
                    organizationId: id,
                    orchestratorId: orchId,
                    roomId: roomId,
                },
            }
        );
    };

    const handleDelete = () => {
        if (confirm('Are you sure you want to delete this room? This action cannot be undone.')) {
            removeMutate(
                {
                    path: {
                        organizationId: id,
                        orchestratorId: orchId,
                        roomId: roomId,
                    },
                }
            );
        }
    };

    return (
        <div className='mt-2 w-screen h-screen flex flex-col items-center'>
            <div className='w-[90%] flex flex-col items-center'>
                <div className='flex justify-between w-full'>
                    <h1 className='text-xl font-semibold'>Room Detail</h1>
                    <div className='flex gap-2'>
                        <Button onClick={handleEditClick}>Edit</Button>
                        <Button color="red" onClick={handleDelete}>Delete</Button>
                    </div>
                </div>
                <br />
                <Table>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>ID</Table.Th>
                            <Table.Th>Label</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        <Table.Tr key={data?.id}>
                            <Table.Td>{data?.id}</Table.Td>
                            <Table.Td>{data?.label}</Table.Td>
                        </Table.Tr>
                    </Table.Tbody>
                </Table>
            </div>

            <Modal opened={opened} onClose={close} title="Edit Room Details">
                <TextInput
                    label="Label"
                    value={formData.label}
                    onChange={(e) => setFormData({ ...formData, label: e.currentTarget.value })}
                />
                <Button className='mt-4' onClick={handleSave}>Save</Button>
            </Modal>
        </div>
    );
};

export default RoomDetail;
