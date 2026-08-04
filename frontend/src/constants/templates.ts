import classicTemplate from "../assets/mb1.png";
import modernTemplate from "../assets/mb2.png";
import premiumTemplate from "../assets/mb3.png";
import RoyalTemplate from "../assets/mb4.png";

export type Template = {
    id: number;
    slug: string;
    name: string;
    price: number;
    description: string;
    image: string;
};

export const templates: Template[] = [
    {
        id: 1,
        slug: "elegant",
        name: "Elegant",
        price: 0,
        description:
            "A clean and professional marriage biodata template with a simple and elegant layout.",
        image: classicTemplate,
    },
    {
        id: 2,
        slug: "modern",
        name: "Modern",
        price: 0,
        description:
            "A modern marriage biodata template featuring a clean layout and professional typography.",
        image: modernTemplate,
    },
    {
        id: 3,
        slug: "royal",
        name: "Royal",
        price: 0,
        description:
            "A premium marriage biodata template with an elegant design and refined styling.",
        image: premiumTemplate,
    },
    {
        id: 4,
        slug: "luxury",
        name: "Luxury",
        price: 49,
        description:
            "A luxury marriage biodata template designed for a polished and professional PDF.",
        image: RoyalTemplate,
    },
];