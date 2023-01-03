// type MenuItem = {
//     label: string;
//     submenu?: { label: string; submenu?: MenuItem[] }[];
// };
export type MenuItem = {
    id: string
    label: string;
    submenu?: MenuItem[]
}


export const multiDropdownData: MenuItem[] = [
    {
        id: '1',
        label: "Red",
    },
    {
        id: '2',
        label: "Other",
        submenu: [
            { label: "Blue", id: "2_1" },
            { id: "2_2", label: "Green", submenu: [{ id: "2_2_1", label: 'Yellowgreen' }, { id: "2_2_2", label: 'Greenish' }] },
        ],
    },

];







