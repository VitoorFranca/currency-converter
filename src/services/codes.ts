import api from './api';

export async function getSupportedCodes (): Promise<[]> {
    const { data } = await api.get('/codes');
    return data.supported_codes;
};