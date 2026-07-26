import { create } from "zustand";

import type {
    Biodata,
    BiodataRequest,
} from "../types/biodata.types";

import {
    getMyBiodata,
    saveBiodata,
} from "../api/biodata.service";

interface BiodataState {
    biodata: Biodata | null;
    loading: boolean;
    error: string | null;

    fetchBiodata: () => Promise<void>;
    save: (data: BiodataRequest) => Promise<void>;

    clear: () => void;
}

export const useBiodataStore = create<BiodataState>((set) => ({
    biodata: null,
    loading: false,
    error: null,

    fetchBiodata: async () => {
        try {
            set({
                loading: true,
                error: null,
            });

            const biodata = await getMyBiodata();

            set({
                biodata,
                loading: false,
                error: null,
            });

        } catch (error: any) {

            if (error?.response?.status === 404) {
                set({
                    biodata: null,
                    loading: false,
                    error: null,
                });
                return;
            }

            set({
                biodata: null,
                loading: false,
                error:
                    error?.response?.data?.detail ??
                    "Failed to load biodata",
            });
        }
    },

    save: async (data) => {
        try {
            set({
                loading: true,
                error: null,
            });

            const biodata = await saveBiodata(data);

            set({
                biodata,
                loading: false,
            });
        } catch (error: any) {
            set({
                loading: false,
                error:
                    error?.response?.data?.detail ??
                    "Failed to save biodata",
            });

            throw error;
        }
    },

    clear: () =>
        set({
            biodata: null,
            loading: false,
            error: null,
        }),
}));