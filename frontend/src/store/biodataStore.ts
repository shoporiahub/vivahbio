import { create } from "zustand";

import type { BiodataSchema } from "../schemas/biodata.schema";

type BiodataStore = {
    biodata: BiodataSchema | null;

    setBiodata: (data: BiodataSchema) => void;

    clearBiodata: () => void;
};

export const useBiodataStore =
    create<BiodataStore>((set) => ({
        biodata: null,

        setBiodata: (data) =>
            set({
                biodata: data,
            }),

        clearBiodata: () =>
            set({
                biodata: null,
            }),
    }));