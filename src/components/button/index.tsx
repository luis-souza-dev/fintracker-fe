import { ButtonColors, ButtonProps, ButtonSizes } from "./model"

function Button({ children, handler, size, customH, customW, color}: ButtonProps) {

    const classes: string[] = [
            'border',
            'border-[#084969]',
            'shadow-[#084969]',
            'rounded-md',
            'transition-all',
            'delay-100',
            'shadow-sm',
            'hover:border-black',
            'hover:shadow-black'
        ];

    classes.push(...parseButtonSize(size, customW, customH), ...parseButtonColors(color));

    return (
        <button className={classes.join(' ')} onClick={() => handler()}>
            { children }
        </button>
    )
}


function parseButtonSize(size: ButtonSizes, customW = 208, customH = 48): string[] {
    const classes = [];
    switch (size) {
        case 'lg':
            classes.push('w-52 h-12 text-lg')
        break;
        case 'md':
            classes.push('w-32 h-11 text-base')
        break;
        case 'sm':
            classes.push('w-20 h-10 text-sm')
        break;
        default:
            classes.push(
                `w-[${customW}px]`,
                `h-[${customH}px]`,
            )
        break;
    }

    return classes
}

function parseButtonColors(color: ButtonColors): string[] {
    const classes = [];
    switch (color) {
        case 'secondary':
            classes.push('bg-[#476160]', 'text-white', 'hover:bg-[#304242]')
        break;
    
        default:
            classes.push('bg-[#0b8f88]', 'text-white', 'hover:bg-[#087570]')
        break;
    }

    return classes;
}
  
  export default Button
  