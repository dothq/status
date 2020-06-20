import styled, { css } from 'styled-components';

export const SetupCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 28px;
    border-radius: 4px;
    box-shadow: 0 6.4px 14.4px 0 rgba(0,0,0,.132), 0 1.2px 3.6px 0 rgba(0,0,0,.108);
    border: 1px solid #00000014;
    text-align: center;
`;

export const Header = styled.div`
    margin-top: 100px;
    width: 100%;
    height: 48px;
`;

export const Statuses = styled.div`
    display: grid;
    gap: 30px;
`;

export const StatusText = styled.div`
    font-size: 65px;
    font-weight: bold;
    margin: 90px 0;
    color: black;
`;

export const StatusContainer = styled.div`
    border-radius: 16px;
    border: 1px solid #ebebeb;
    padding: 27px;
    height: 92px;
    display: flex;
    align-items: center;
`;

export const StatusIcon = styled.div`
    ${({ type }: { type: 'check' | 'error' }) => css`
        width: 26px;
        height: 26px;
        background-image: url(/status-icons/${type}.svg)
    `}
`;

export const StatusService = styled.div`
    font-weight: 600;
    font-size: 20px;
    padding-left: 18px;
    color: #222222;
`;

export const StatusMessage = styled(StatusService)`
    font-size: 16px;
    margin-left: auto;
    padding: 0;
    color: #979797;
`;