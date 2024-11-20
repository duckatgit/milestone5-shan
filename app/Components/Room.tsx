'use client'
import { useRoomControllerCreate, useRoomControllerFindAll } from '@/src/generated/api/queries';
import { orchastratorIdStore, organizationIdStore } from '@/store/store';
import { Button, Modal, Table, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useAtom } from 'jotai';
import React, { useState } from 'react'

const Room = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const [organizationIdState, setOrganizationIdState] = useAtom(organizationIdStore)
    const [orchastratorIdStoreState, setOrchastratorIdStoreState] = useAtom(orchastratorIdStore)


    const { data }: any = useRoomControllerFindAll({
        path: {
            organizationId: organizationIdState,
            orchestratorId: orchastratorIdStoreState
        }
    })

    const { mutate }: any = useRoomControllerCreate();


    const [form, setForm] = useState<any>({
        organizationId: organizationIdState,
        orchestratorId: orchastratorIdStoreState,
        label: '',
        description: ''
    });

    const handleSubmit = () => {
        const payload = {
            label: form?.label,
            description: form?.description
        };

        console.log('payload', payload)

        mutate({
            body: payload,
            path: {
                organizationId: organizationIdState || form?.organizationId,
                orchestratorId: orchastratorIdStoreState || form?.orchestratorId
            },
        });
    };



    const rows = data && data?.map((item: any) => (
        <Table.Tr key={item.id}>
            <Table.Td>{item.id}</Table.Td>
            <Table.Td>{item.label}</Table.Td>
            <Table.Td>{item.description}</Table.Td>
        </Table.Tr>
    ));

    console.log('data', data)
    return (
        <div className="w-full h-full mt-10 ">
            <div className="w-full flex justify-end">
                <Button className="" onClick={open}>Create Room</Button>
            </div>
            <div>
                <h2 className="font-semibold text-lg">Room</h2>
                <Table>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>id</Table.Th>
                            <Table.Th>label</Table.Th>
                            <Table.Th>description</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    {data?.length <= 0 ?
                        <span>No Items</span>
                        :
                        <Table.Tbody>{rows}</Table.Tbody>
                    }
                </Table>
            </div>
            <Modal opened={opened} onClose={close} title="Create Room">
                <TextInput label="organizationId"
                    defaultValue={organizationIdState}
                    disabled={organizationIdState?.length > 0}
                    onChange={(e) => setForm({ ...form, organizationId: e.target.value })}
                />
                <TextInput label="orchestratorId"
                    defaultValue={orchastratorIdStoreState}
                    disabled={orchastratorIdStoreState?.length > 0}
                    onChange={(e) => setForm({ ...form, orchestratorId: e.target.value })}
                />
                <TextInput label="label"
                    onChange={(e) => setForm({ ...form, label: e.target.value })}

                />
                <TextInput label="description"
                    onChange={(e) => setForm({ ...form, description: e.target.value })}

                />
                <Button className="w-full mt-2" onClick={handleSubmit}>Submit</Button>
            </Modal>
        </div>
    )
}

export default Room
