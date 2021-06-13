import React from 'react'
import { Header, Icon, Table, Button } from 'semantic-ui-react'
import { useState, useEffect } from "react";
import CandidateService from '../../../services/candidateService';

export default function CandidateList() {

    const [candidates, setcandidates] = useState([])

    useEffect(() => {
        let candidateService = new CandidateService()
        candidateService.getCandidates().then(result => setcandidates(result.data.data));
    }, []);

    return (
        <div>
            <Header as="h2">
                <Icon name="unordered list" />
                <Header.Content>Candidate List</Header.Content>
            </Header>
            <Table color="green" key="green">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Detail</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {candidates.map((candidate) => (
                        <Table.Row key={candidate.id}>
                            <Table.Cell>{candidate.firstName}</Table.Cell>
                            <Table.Cell>{candidate.lastName}</Table.Cell>
                            <Table.Cell>{candidate.email}</Table.Cell>
                            <Table.Cell>
                                <Button>View</Button>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    );
}
