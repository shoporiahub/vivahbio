
import classicTemplate from "../assets/biodata1.png";
import modernTemplate from "../assets/biodata2.png";
import premiumTemplate from "../assets/biodata3.png";
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
        description: "Simple and elegant biodata design.",
        image: classicTemplate,
    },
    {
        id: 2,
        slug: "modern",
        name: "Modern",
        price: 0,
        description: "Clean and modern premium layout.",
        image: modernTemplate,
    },
    {
        id: 3,
        slug: "royal",
        name: "Royal",
        price: 0,
        description: "Luxury design with premium styling.",
        image: premiumTemplate,
    },
    {
        id: 4,
        slug: "luxury",
        name: "Luxury",
        price: 49,
        description: "Professional luxury biodata template.",
        image: classicTemplate,
    },
    // {
    //     id: 5,
    //     slug: "signature",
    //     name: "Signature",
    //     price: 499,
    //     description: "Our highest-end premium template.",
    //     image: modernTemplate,
    // },
];