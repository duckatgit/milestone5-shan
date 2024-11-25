'use client'
import { useRoomControllerCreate, useRoomControllerFindAll } from '@/src/generated/api/queries';
import { orchastratorIdStore, organizationIdStore } from '@/store/store';
import { Button, Modal, Table, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Room = ({ orgId, orchId }: any) => {
    const [opened, { open, close }] = useDisclosure(false);
    const router = useRouter()




    const { data }: any = useRoomControllerFindAll({
        path: {
            organizationId: orgId,
            orchestratorId: orchId
        }
    })

    const { mutate }: any = useRoomControllerCreate();


    const [form, setForm] = useState<any>({
        organizationId: orgId,
        orchestratorId: orchId,
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
                organizationId: orgId || form?.organizationId,
                orchestratorId: orchId || form?.orchestratorId
            },
        });
    };



    const rows = data && data?.map((item: any) => (
        <Table.Tr key={item.id} onClick={(() => {
            router.push(`/roomdetails?orgId=${orgId}&orchId=${orchId}&roomId=${item.id}`)
        })}>
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
                    defaultValue={orgId}
                    disabled={orgId?.length > 0}
                    onChange={(e) => setForm({ ...form, organizationId: e.target.value })}
                />
                <TextInput label="orchestratorId"
                    defaultValue={orchId}
                    disabled={orchId?.length > 0}
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
