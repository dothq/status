import React from 'react';

import { StatusContainer, StatusIcon, StatusService, StatusMessage } from "../style";

export const Service = ({ name, status, isWorking }: { name: string; status: string; isWorking: boolean }) => (
    <StatusContainer>
        <StatusIcon type={isWorking ? "check" : "error"} />
        <StatusService>{name}</StatusService>
        <StatusMessage>{status}</StatusMessage>
    </StatusContainer>
)