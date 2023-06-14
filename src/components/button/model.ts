export interface ButtonProps extends React.PropsWithChildren {
    handler: () => void;
    color: ButtonColors;
    size: ButtonSizes;
    customColor?: string;
    customH?: number;
    customW?: number;
}

export type ButtonSizes = 'sm' | 'md' | 'lg' | 'custom';
export type ButtonColors = 'default' | 'secondary';