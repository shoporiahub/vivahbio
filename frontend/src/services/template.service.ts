import { templates } from "../constants/templates";
import type { Template } from "../constants/templates";


export async function getTemplates(): Promise<Template[]> {
    return Promise.resolve(templates);
}

export async function getTemplateBySlug(
    slug: string
): Promise<Template | undefined> {
    return Promise.resolve(
        templates.find((template) => template.slug === slug)
    );
}