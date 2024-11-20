'use client'
import { useOrchestratorControllerFindOrchestratorsByOrg, useOrchestratorControllerAddOrchestrator } from '@/src/generated/api/queries';
import { orchastratorIdStore, organizationIdStore } from '@/store/store';
import { Button, Modal, Table, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useAtom } from 'jotai';
import React, { useState } from 'react'

const Orchastrator = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const [organizationIdState, setOrganizationIdState] = useAtom(organizationIdStore)
    const [orchastratorIdStoreState, setOrchastratorIdStoreState] = useAtom(orchastratorIdStore)

    console.log('organizationIdState', organizationIdState)


    const { data }: any = useOrchestratorControllerFindOrchestratorsByOrg({
        path: {
            organizationId: organizationIdState
        },
        query: {
            status: 'AWAITING_SETUP'
        }
    })

    const { mutate, isLoading, data2 }: any = useOrchestratorControllerAddOrchestrator();


    const [form, setForm] = useState<any>({
        organizationId: organizationIdState,
        label: '',
    });

    const handleSubmit = () => {
        const payload = {
            label: form?.label,
        };

        console.log('payload', payload)

        mutate({
            body: payload,
            path: {
                organizationId: organizationIdState || form?.organizationId
            },
        });
    };



    const rows = data && data?.map((item: any) => (
        <Table.Tr key={item.id} onClick={() => {
            setOrchastratorIdStoreState(item?.id)
        }}>
            <Table.Td>{item.id}</Table.Td>
            <Table.Td>{item.label}</Table.Td>
            <Table.Td>{item.configured ? "true" : "false"}</Table.Td>
        </Table.Tr>
    ));

    console.log('data', data)
    return (
        <div className="w-full h-full mt-10 ">
            <div className="w-full flex justify-end">
                <Button className="" onClick={open}>Create Orchastrator</Button>
            </div>
            <div>
                <h2 className="font-semibold text-lg">Orchastrator</h2>
                <Table>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>id</Table.Th>
                            <Table.Th>label</Table.Th>
                            <Table.Th>configured</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    {data?.length <= 0 ?
                        <span>No Items</span>
                        :
                        <Table.Tbody>{rows}</Table.Tbody>
                    }
                </Table>
            </div>
            <Modal opened={opened} onClose={close} title="Create Orchastrator">
                <TextInput label="organizationId"
                    defaultValue={organizationIdState}
                    onChange={(e) => setForm({ ...form, organizationId: e.target.value })}
                />
                <TextInput label="label"
                    onChange={(e) => setForm({ ...form, label: e.target.value })}

                />
                <Button className="w-full mt-2" onClick={handleSubmit}>Submit</Button>
            </Modal>
        </div>
    )
}

export default Orchastrator
