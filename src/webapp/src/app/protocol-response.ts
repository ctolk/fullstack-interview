export interface ProtocolResponse {
    meta : Meta;
    protocols: Protocol[]
}

export interface Meta {
    totalCount : number;
    limit: number;
    offset: number;
}

export interface Protocol {
    protocolId: number;
    name: string;
    fileName: string;
    drawingNumber: string | null;
    partNumber: string | null;
    orderNumber: string | null;
    workpieceName: string | null;
    softwareVersion: string | null;
    operatorName: string | null;
    cmmNumber: string | null;
    measuredOn: string;
    // comments: string[] | null;
}
