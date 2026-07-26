import api from "../../../services/api";

import type {
    Biodata,
    BiodataRequest,
} from "../types/biodata.types";

export const getMyBiodata = async (): Promise<Biodata> => {
    const response = await api.get("/biodata/me");
    return response.data;
};

export const saveBiodata = async (
    data: BiodataRequest
): Promise<Biodata> => {
    const response = await api.post("/biodata", data);
    return response.data;
};