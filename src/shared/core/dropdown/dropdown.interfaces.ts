export interface DropdownItem {
    text: string;
    path: string;
}

export interface DropdownMenu {
    title: string;
    items: DropdownItem[];
}
