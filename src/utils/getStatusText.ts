export function getStatusText(status: string): string {
    switch (status) {
        case 'open':
            return 'Inscrições abertas';
        case 'limited':
            return 'Últimas vagas';
        case 'confirmed':
            return 'Confirmado';
        default:
            return status;
    }
}